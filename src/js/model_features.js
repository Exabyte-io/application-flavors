import lodash from "lodash";

import modelFeatures from "../../model_feature_data";
import { recursiveMerge } from "./utils";

/**
 * Filter nodes from the model tree based on path and modify node data.
 * A node of the model tree is defined in mode.js and has a form such as the following:
 * ```
 * {
 *     path: "/dft/gga",
 *     parentPath: "/dft",
 *     data: {
 *         subtype: {
 *             slug: "gga",
 *             name: "Generalized Gradient Approximation",
 *         },
 *     },
 *     children: [
 *         // array of child nodes
 *     ],
 * }
 * ```
 * @param {Array} nodes - Array of nodes to be filtered.
 * @param {string[]} paths - Array of node paths
 * @param {Object[]} pathData - Array of objects containing path and node data.
 * @returns {Object[]} - The filtered tree (with possibly modified data).
 */
export function filterTree(nodes, paths, pathData = null) {
    return nodes.reduce((accumulator, node) => {
        if (paths.includes(node.path) || node.path === "") {
            let modified = {};
            let data = pathData && pathData.find((item) => item.path === node.path)?.data;
            if (data) {
                data = recursiveMerge(node.data, data);
                modified = { ...node, data };
            }
            if (node.children?.length) {
                const children = filterTree(node.children, paths, pathData);
                if (children.length) modified = { ...node, ...modified, children };
            }
            // eslint-disable-next-line no-unused-expressions
            lodash.isEmpty(modified) ? accumulator.push(node) : accumulator.push(modified);
        }
        return accumulator;
    }, []);
}

/**
 * Selects a subset of the model tree for a given application
 * @param {Object|Array} tree - Tree object or array of nodes
 * @param {string} appName
 * @param {string} version
 * @param {string} executable
 * @param {string} build
 */
export function getModelTreeByApplication({
    tree,
    appName,
    version,
    executable,
    build = "default",
}) {
    const featureSubtree = modelFeatures[appName][version][executable][build];
    const nodePaths = featureSubtree.map((item) => item.path);
    const pathData = featureSubtree.filter((item) => "data" in item);
    const nodes = Array.isArray(tree) ? tree : [tree];
    return filterTree(nodes, nodePaths, pathData);
}

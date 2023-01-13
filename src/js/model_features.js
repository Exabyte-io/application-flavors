import { filterTree } from "@exabyte-io/mode.js/dist/tree";

import modelFeatures from "../../model_feature_data";

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

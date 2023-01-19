import { filterTree } from "@exabyte-io/mode.js/dist/tree";
import { uniqBy } from "lodash/array";

import availableModels from "../../model_list";

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
    build = "Default",
}) {
    let modelList;
    if (!executable) {
        modelList = uniqBy(
            Object.keys(availableModels[appName][version]).flatMap(
                (exec) => availableModels[appName][version][exec][build],
            ),
            "path",
        );
    } else {
        modelList = availableModels[appName][version][executable][build];
    }
    const nodePaths = modelList.map((item) => item.path);
    const pathData = modelList.filter((item) => "data" in item);
    const nodes = Array.isArray(tree) ? tree : [tree];
    return filterTree(nodes, nodePaths, pathData);
}

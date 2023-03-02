import { mergeTerminalNodes } from "@exabyte-io/code.js/dist/utils/object";
import { filterTree } from "@exabyte-io/mode.js/dist/tree";

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
    build = "default",
}) {
    const modelList = availableModels[appName][version][executable][build];
    const nodePaths = modelList.map((item) => item.path);
    const pathData = modelList.filter((item) => "data" in item);
    const nodes = Array.isArray(tree) ? tree : [tree];
    return filterTree(nodes, nodePaths, pathData);
}

export function getFilterList({
    filterObj,
    appName = "",
    version = "",
    build = "",
    executable = "",
    flavor = "",
}) {
    let filterList;
    if (!appName) {
        filterList = mergeTerminalNodes(filterObj, true);
    } else if (!version) {
        filterList = mergeTerminalNodes(filterObj[appName], true);
    } else if (!build) {
        filterList = mergeTerminalNodes(filterObj[appName][version], true);
    } else if (!executable) {
        filterList = mergeTerminalNodes(filterObj[appName][version][build], true);
    } else if (!flavor) {
        filterList = mergeTerminalNodes(filterObj[appName][version][build][executable], true);
    } else {
        filterList = filterObj[appName][version][build][executable][flavor];
    }
    return filterList;
}

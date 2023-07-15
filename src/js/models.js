import {
    filterEntityList,
    findPreviousVersion,
    mergeTerminalNodes,
} from "@exabyte-io/code.js/dist/utils";
import lodash from "lodash";

import { models as applicationModelMap } from "../../filter_trees";

/**
 * Extract unique filter objects by name of key.
 * @param {Array<{path: string}|{regex: string}>} filterObjects - List of filter objects
 * @param {string} name - Name of object key
 */
function extractUniqueBy(filterObjects, name) {
    return lodash
        .chain(filterObjects)
        .filter(Boolean)
        .filter((o) => Boolean(o[name]))
        .uniqBy(name)
        .value();
}

function safelyGet(obj, ...args) {
    return lodash.get(obj, args, undefined);
}

function getPreviousVersion(obj, version) {
    const prev = findPreviousVersion(Object.keys(obj), version);
    return lodash.get(obj, prev, undefined);
}

/**
 * Get list of paths and list of regex from nested filter object.
 * @param {Object} filterObj - filter object with nesting [appName][version][build][executable][flavor]
 * @param {string} appName - application name
 * @param {string} version - application version
 * @param {string} build - application build
 * @param {string} executable - executable name
 * @param {string} flavor - flavor name
 * @return {*[]} - Path list and Regex list
 */
export function getFilterObjects({
    filterTree,
    appName = "",
    version = "",
    build = "",
    executable = "",
    flavor = "",
}) {
    let filterList;
    if (!appName) {
        filterList = mergeTerminalNodes(filterTree);
    } else if (!version) {
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName));
    } else if (!build) {
        const branch =
            safelyGet(filterTree, appName, version) ||
            getPreviousVersion(filterTree[appName], version);
        filterList = mergeTerminalNodes(branch);
    } else if (!executable) {
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName, version, build));
    } else if (!flavor) {
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName, version, build, executable));
    } else {
        filterList = safelyGet(filterTree, appName, version, build, executable, flavor);
    }

    return [].concat(extractUniqueBy(filterList, "path"), extractUniqueBy(filterList, "regex"));
}

/**
 * Filters list of models for a given application
 * @param {Array<Object>} modelPaths - List of model configs or objects containing model path
 * @param {string} appName - application name
 * @param {string} version - application version
 * @param {string} build - application build
 * @param {string} executable - executable name
 * @param {string} flavor - flavor name
 * @returns {Array<Object>} - filtered list of model paths for given application data
 */
export function filterModelsByApplicationParameters({
    modelList,
    appName,
    version,
    build,
    executable,
    flavor,
}) {
    const filterObjects = getFilterObjects({
        filterTree: applicationModelMap,
        appName,
        version,
        build,
        executable,
        flavor,
    });
    return filterEntityList({
        entitiesOrPaths: modelList,
        filterObjects,
    });
}

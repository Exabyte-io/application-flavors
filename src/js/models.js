import { filterEntityList, mergeTerminalNodes } from "@exabyte-io/code.js/dist/utils";
import lodash from "lodash";

// TODO: reactivate once epic/SOF-6009 has been merged
// import { models as applicationModelMap } from "../../filter_trees";

// placeholder for applicationModelMap
const applicationModelMap = {
    espresso: {
        "5.2.1": {
            Default: {
                "pw.x": { pw_scf_bands_hse: [{ path: "/pb/qm/dft/ksdft/hybrid?functional=hse" }] },
            },
        },
    },
};

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
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName, version));
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

import {
    filterEntityList,
    findPreviousVersion,
    mergeTerminalNodes,
} from "@exabyte-io/code.js/dist/utils";
import lodash from "lodash";

import { models as applicationModelMap } from "./data/filter_trees";
import { AnyObject } from "@exabyte-io/code.js/dist/entity/in_memory";

/**
 * Extract unique filter objects by name of key.
 * @param {Array<{path: string}|{regex: string}>} filterObjects - List of filter objects
 * @param {string} name - Name of object key
 */
function extractUniqueBy(filterObjects: any, name: string) {
    return lodash
        .chain(filterObjects)
        .filter(Boolean)
        .filter((o: AnyObject) => Boolean(o[name]))
        .uniqBy(name)
        .value();
}

function safelyGet(obj: AnyObject, ...args: any[]) {
    return lodash.get(obj, args, undefined);
}

function getPreviousVersion(obj: any, version: string) {
    const availableVersions = obj ? Object.keys(obj) : [];
    return findPreviousVersion(availableVersions, version) || "";
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
}: {
    filterTree: any;
    appName: string;
    version: string;
    build: string;
    executable: string;
    flavor: string;

}) {
    let filterList;

    // use previous version when the filterTree does not contain the version specified
    const version_ = safelyGet(filterTree, appName, version)
        ? version
        : getPreviousVersion(filterTree[appName], version);

    // use Default build when the filterTree does not contain the build specified
    const build_ =
        !safelyGet(filterTree, appName, version_, build) &&
        safelyGet(filterTree, appName, version_, "Default")
            ? "Default"
            : build;
    if (!appName) {
        filterList = mergeTerminalNodes(filterTree);
    } else if (!version_) {
        // @ts-ignore
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName));
    } else if (!build_) {
        const branch =
            safelyGet(filterTree, appName, version_) ||
            getPreviousVersion(filterTree[appName], version_);
        // @ts-ignore
        filterList = mergeTerminalNodes(branch);
    } else if (!executable) {
        // @ts-ignore
        filterList = mergeTerminalNodes(safelyGet(filterTree, appName, version_, build_));
    } else if (!flavor) {
        filterList = mergeTerminalNodes(
            // @ts-ignore
            safelyGet(filterTree, appName, version_, build_, executable),
        );
    } else {
        filterList = safelyGet(filterTree, appName, version_, build_, executable, flavor);
    }

    // @ts-ignore
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
}: {
    modelList: any[];
    appName: string;
    version: string;
    build: string;
    executable: string;
    flavor: string;

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

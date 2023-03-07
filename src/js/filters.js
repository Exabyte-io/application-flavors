import { mergeTerminalNodes } from "@exabyte-io/code.js/dist/utils";
import lodash from "lodash";

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
export function getFilterLists({
    filterObj,
    appName = "",
    version = "",
    build = "",
    executable = "",
    flavor = "",
}) {
    let filterList;
    if (!appName) {
        filterList = mergeTerminalNodes(filterObj);
    } else if (!version) {
        filterList = mergeTerminalNodes(filterObj[appName]);
    } else if (!build) {
        filterList = mergeTerminalNodes(filterObj[appName][version]);
    } else if (!executable) {
        filterList = mergeTerminalNodes(filterObj[appName][version][build]);
    } else if (!flavor) {
        filterList = mergeTerminalNodes(filterObj[appName][version][build][executable]);
    } else {
        filterList = filterObj[appName][version][build][executable][flavor];
    }
    const extractUniqueBy = (name) => {
        return lodash
            .chain(filterList)
            .filter((o) => Boolean(o[name]))
            .uniqBy(name)
            .value();
    };

    return [extractUniqueBy("path"), extractUniqueBy("regex")];
}

/**
 * Filter list of entity paths for a given application
 * @param {{appName: string, version: string, build: string, executable: string, flavor: string}} applicationData
 * @param {Array<Object>} entityPathCollection - Array of objects defining entity path
 * @param {Object} entityFilterObj - filter object with nesting [appName][version][build][executable][flavor]
 * @return {Array} - entity path objects filtered by application
 */
export function filterEntityPaths({ applicationData, entityPathCollection, entityFilterObj }) {
    const [pathList, regexList] = getFilterLists({
        filterObj: entityFilterObj,
        ...applicationData,
    });

    const filtered = regexList
        .flatMap((r) => {
            const regex = new RegExp(r.regex);
            return entityPathCollection.filter((o) => regex.test(o.path));
        })
        .concat(lodash.intersectionBy(entityPathCollection, pathList, "path"));

    return lodash.uniqBy(filtered, "path");
}

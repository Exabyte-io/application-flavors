import { applicationTree as APP_TREES } from "./data/tree";

/**
 * @summary Given an application name, return the applications's tree.
 *          Expands and caches the tree to contain parent level attributes for flavors.
 * @param appName {string}
 * @returns {object}
 */
export function getAppTree(appName) {
    if (!(appName in APP_TREES)) {
        throw new Error(`${appName} is not a known application with a tree.`);
    }

    return APP_TREES[appName];
}

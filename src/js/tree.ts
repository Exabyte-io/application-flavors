import { applicationExecutableFlavorTree } from "./data/tree";

/**
 * @summary Given an application name, return the applications's tree.
 *          Expands and caches the tree to contain parent level attributes for flavors.
 * @param appName {string}
 * @returns {object}
 */
export function getApplicationExecutableFlavorTree(appName: keyof typeof applicationExecutableFlavorTree) {
    if (!(appName in applicationExecutableFlavorTree)) {
        throw new Error(`${appName} is not a known application with a tree.`);
    }

    return applicationExecutableFlavorTree[appName];
}

import { AllowedApplications, ExecutableTreeData } from ".";
import { ApplicationTreeData } from "./build_templates";
import { applicationTree } from "./data/tree";

/**
 * @summary Given an application name, return the applications's tree.
 *          Expands and caches the tree to contain parent level attributes for flavors.
 */
export function getAppTree(appName: AllowedApplications) {
    if (!(appName in applicationTree)) {
        throw new Error(`${appName} is not a known application with a tree.`);
    }

    return applicationTree[appName];
}

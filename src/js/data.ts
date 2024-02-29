import { applicationVersionBuildTree } from "./data/application_data";

/**
 * Given an application name, return the applications's version and build data.
 * @param appName
 * @returns application, version build configuration for the given application
 */
export function getApplicationVersionBuildData(appName: keyof typeof applicationVersionBuildTree) {
    if (!(appName in applicationVersionBuildTree)) {
        throw new Error(`${appName} is not a known application with data.`);
    }
    return applicationVersionBuildTree[appName];
}

import { applicationData as APP_DATA } from "./data/application_data";

/**
 * Given an application name, return the applications's data.
 * @param appName {str}
 * @returns {object}
 */
export function getAppData(appName) {
    if (!(appName in APP_DATA)) {
        throw new Error(`${appName} is not a known application with data.`);
    }
    return APP_DATA[appName];
}

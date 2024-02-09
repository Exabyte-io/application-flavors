import { AllowedApplications } from ".";
import { ApplicationData } from "./build_templates";
import { applicationData as APP_DATA } from "./data/application_data";

/**
 * Given an application name, return the applications's data.
 * @param appName {str}
 * @returns {object}
 */
export function getAppData(appName: AllowedApplications) {
    const app_data = APP_DATA as {[key in AllowedApplications]: ApplicationData};
    if (!(appName in app_data)) {
        throw new Error(`${appName} is not a known application with data.`);
    }
    return app_data[appName];
}

import { AllowedApplications } from ".";
import { ApplicationData } from "./build_templates";
import { applicationData as APP_DATA } from "./data/application_data";

/**
 * Given an application name, return the applications's data.
 * @param appName {str}
 * @returns {object}
 */
export function getAppData(appName: AllowedApplications): ApplicationData {
    if (!(appName in APP_DATA)) {
        throw new Error(`${appName} is not a known application with data.`);
    }
    return APP_DATA[appName] as ApplicationData;
}

import availableModels from "../../model_list";
import { filterEntityPaths } from "./filters";

/**
 * Filters list of models for a given application
 * @param {Array<Object>} modelPaths - List of objects containing model path
 * @param {string} appName - application name
 * @param {string} version - application version
 * @param {string} build - application build
 * @param {string} executable - executable name
 * @param {string} flavor - flavor name
 * @returns {Array<Object>} - filtered list of model paths for given application data
 */
export function filterModelsByApplicationParameters({
    modelPaths,
    appName,
    version,
    build,
    executable,
    flavor,
}) {
    return filterEntityPaths({
        applicationData: { appName, version, build, executable, flavor },
        entityFilterObj: availableModels,
        entityPathCollection: modelPaths,
    });
}

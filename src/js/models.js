import availableModels from "../../model_list";
import { filterEntityPaths } from "./filters";

/**
 * Filters list of models for a given application
 * @param {Object|Array} tree - Tree object or array of nodes
 * @param {string} appName
 * @param {string} version
 * @param {string} build
 * @param {string} executable
 * @param {string} flavor
 * @returns {Array<Object>} - filtered list of model paths for given application data
 */
export function filterModelsByApplication({
    modelPaths,
    appName,
    version,
    build,
    executable,
    flavor,
}) {
    return filterEntityPaths({
        appName,
        version,
        build,
        executable,
        flavor,
        entityFilterObj: availableModels,
        entityPathCollection: modelPaths,
    });
}

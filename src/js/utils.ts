import fs from "fs";
import lodash from "lodash";
import path from "path";
import _ from "underscore";

export const makeObjectsFromContextProviderNames = (asset) => {
    return {
        ...asset,
        contextProviders: asset.contextProviders.map((name) => {
            return _.isObject(name) ? name : { name };
        }),
    };
};

/**
 * Load an asset file for the given application, of the given name.
 * @param applicationPath {string} The directory path in the /assets directory of this package, for this application
 * @param filename {string} The name of the file in the applicationPath directory to load and return
 * @returns {string} The contents of the given file
 */
export function readAssetFile(applicationPath, filename) {
    const assetsDir = path.resolve(__dirname, "../../assets/");
    return fs.readFileSync(path.resolve(assetsDir, applicationPath, filename), "utf8");
}

/**
 * Merge two arrays containing objects with attribute `key`
 * @param {Array} array - The array incoming data is merged into.
 * @param {Array} other - The array containing new (incoming) data.
 * @param {string} key - Name of attribute to merge by.
 * @returns {Array} - The merged array.
 */
const mergeArrayByKey = (array, other, key) => {
    return lodash.values(lodash.merge(lodash.keyBy(array, key), lodash.keyBy(other, key)));
};

/**
 * Customizer for `lodash.mergeWith()` used to apply logic of removing
 * objects which contain the property `isRemoved`.
 * @param objValue
 * @param srcValue
 * @returns {unknown[]|Array}
 */
const customizer = (objValue, srcValue) => {
    if (Array.isArray(objValue) && Array.isArray(srcValue)) {
        if (objValue.every((item) => lodash.isPlainObject(item) && "path" in item)) {
            const removedPaths = srcValue.filter((o) => o.isRemoved).map((o) => o.path);
            if (removedPaths.length) {
                return mergeArrayByKey(
                    objValue.filter((o) => !removedPaths.includes(o.path)),
                    srcValue.filter((o) => !o.isRemoved),
                    "path",
                );
            }
            return mergeArrayByKey(objValue, srcValue, "path");
        }
        return lodash.unionWith(objValue, srcValue, lodash.isEqual);
    }
};

/**
 * Recursively merge objects or arrays while removing objects with attribute `isRemoved`.
 * @param {Object|Array} target - The initial data structure to be merged into.
 * @param {Object|Array} source - The incoming data structure.
 * @returns {Object|Array|undefined} - The merged value.
 */
export const recursiveMerge = (target, source) => {
    return lodash.mergeWith({}, target, source, customizer);
};

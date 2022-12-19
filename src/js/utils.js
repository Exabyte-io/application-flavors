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
 * @param applicationPath {str} The directory path in the /assets directory of this package, for this application
 * @param filename {str} The name of the file in the applicationPath directory to load and return
 * @returns {str} The contents of the given file
 */
export function readAssetFile(applicationPath, filename) {
    const assetsDir = path.resolve(__dirname, "../../assets/");
    return fs.readFileSync(path.resolve(assetsDir, applicationPath, filename), "utf8");
}

/**
 * Create a list of keys from an array of objects.
 * @param {Object[]} array - Array of Objects.
 * @param {string} key - Object attribute to create list for.
 * @returns {Array}
 */
const mapToKeys = (array, key) => {
    if (!key) return array;
    return array
        .map((item) => (lodash.isPlainObject(item) ? item[key] : undefined))
        .filter(Boolean);
};

/**
 * Merge two arrays containing objects with attribute `key`
 * @param {Array} array - The array incoming data is merged into.
 * @param {Array} other - The array containing new (incoming) data.
 * @param {string} key - Name of attribute to merge by.
 * @param {Function} mergeFunction - Function for merging pairs of items.
 * @returns {Array} - The merged array.
 */
const mergeArrayByKey = (array, other, key, mergeFunction) => {
    const keys = mapToKeys(array, key);
    const otherKeys = mapToKeys(array, key);
    const merged = array
        .filter((item) => otherKeys.includes(item[key]))
        .map((item) =>
            mergeFunction(
                item,
                other.find((obj) => obj[key] === item[key]),
            ),
        )
        .filter(Boolean);
    return merged
        .concat(array.filter((item) => !otherKeys.includes(item[key])))
        .concat(other.filter((item) => !keys.includes(item[key])));
};

/**
 * Recursively merge objects or arrays.
 * @param {Object|Array} target - The initial data structure to be merged into.
 * @param {Object|Array} source - The incoming data structure.
 * @returns {Object|Array|undefined} - The merged value.
 */
export const recursiveMerge = (target, source) => {
    if (!source) return target;
    if ("isRemoved" in source && source.isRemoved) return undefined;
    if (Array.isArray(target) && Array.isArray(source)) {
        if (target.every((item) => lodash.isPlainObject(item) && "path" in item)) {
            return mergeArrayByKey(target, source, "path", recursiveMerge);
        }
        return lodash.unionWith(target, source, lodash.isEqual);
    }
    const mergedObj = lodash.cloneDeep(target);
    Object.entries(source).forEach(([key, value]) => {
        if (!(key in target)) {
            mergedObj[key] = value;
        } else if (lodash.isPlainObject(value)) {
            mergedObj[key] = recursiveMerge(target[key], value);
        } else if (Array.isArray(value)) {
            mergedObj[key] = recursiveMerge(target[key], value);
        } else {
            mergedObj[key] = value;
        }
        return null;
    });
    return mergedObj;
};

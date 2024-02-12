import fs from "fs";
import lodash from "lodash";
import path from "path";
import _ from "underscore";

type HasContextProviders = {
    contextProviders: Array<string | { name: string }>;
};

export function makeObjectsFromContextProviderNames(asset: HasContextProviders) {
    return {
        ...asset,
        contextProviders: asset.contextProviders.map((name) => {
            return _.isObject(name) ? name : { name };
        }),
    };
};

/**
 * Load an asset file for the given application, of the given name.
 * @param applicationPath The directory path in the /assets directory of this package, for this application
 * @param filename The name of the file in the applicationPath directory to load and return
 * @returns The contents of the given file
 */
export function readAssetFile(applicationPath: string, filename: string) {
    const assetsDir = path.resolve(__dirname, "../../assets/");
    return fs.readFileSync(path.resolve(assetsDir, applicationPath, filename), "utf8");
}

/**
 * Merge two arrays containing objects with attribute `key`
 * @param array - The array incoming data is merged into.
 * @param other - The array containing new (incoming) data.
 * @param key - Name of attribute to merge by.
 * @returns - The merged array.
 */
function mergeArrayByKey<T>(array: Array<T>, other: Array<T>, key: keyof T) {
    return lodash.values(lodash.merge(lodash.keyBy(array, key), lodash.keyBy(other, key)));
};

type RemoveableObject = {
    path: string;
    isRemoved: boolean;
};
/**
 * Customizer for `lodash.mergeWith()` used to apply logic of removing
 * objects which contain the property `isRemoved`.
 * @param objValue
 * @param srcValue
 */
function customizer<T extends RemoveableObject>(objValue: Array<T>, srcValue: Array<T>) {
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
 * @param target - The initial data structure to be merged into.
 * @param source - The incoming data structure.
 * @returns - The merged value.
 */
export function recursiveMerge(target: object | Array<any>, source: object | Array<any>) {
    return lodash.mergeWith({}, target, source, customizer);
};

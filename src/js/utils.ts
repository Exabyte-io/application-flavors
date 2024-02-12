import fs from "fs";
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

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import lodash from "lodash";
import { JsYamlAllSchemas, createObjectPathFromFilePath, getDirectories, getFilesInDirectory} from "@exabyte-io/code.js/dist/utils";

const MODEL_ASSET_PATH = path.resolve(__dirname, "../../models");
const METHOD_ASSET_PATH = path.resolve(__dirname, "../../methods");
const MODEL_FILTER_TREE = {};
const METHOD_FILTER_TREE = {};

/**
 * Reads asset file and stores asset data in target object under object path which reflects the file system.
 * @param {Object} targetObject - Object in which asset data should be stored
 * @param {string} assetPath - Absolute path to asset file.
 * @param {string} assetRoot - Path to asset root directory to construct relative path.
 */
function loadAndInsertAssetData(targetObject: object, assetPath: string, assetRoot: string) {
    const fileContent = fs.readFileSync(assetPath, "utf8");
    const data = yaml.load(fileContent, { schema: JsYamlAllSchemas });
    const objectPath = createObjectPathFromFilePath(assetPath, assetRoot);
    lodash.set(targetObject, objectPath, data);
}

/**
 * Traverse asset folder recursively and load asset files.
 * @param currPath {string} - path to asset directory
 * @param {Object} targetObj - Object in which assets are assigned
 * @param {string} assetRoot - Path to asset root directory to construct relative path.
 */
function getAssetData(currPath: string, targetObj: object, assetRoot: string) {
    // TODO: improve this type in code.js
    const branches = getDirectories(currPath) as string[];
    const assetFiles = getFilesInDirectory(currPath, [".yml", ".yaml"], false);

    assetFiles.forEach((asset) => {
        try {
            loadAndInsertAssetData(targetObj, path.join(currPath, asset), assetRoot);
        } catch (e) {
            console.log(e);
        }
    });
    branches.forEach((b) => {
        getAssetData(path.resolve(currPath, b), targetObj, assetRoot);
    });
};

getAssetData(MODEL_ASSET_PATH, MODEL_FILTER_TREE, MODEL_ASSET_PATH);
getAssetData(METHOD_ASSET_PATH, METHOD_FILTER_TREE, METHOD_ASSET_PATH);
const ignore = "/* eslint-disable */\n";
const data = {
    models: MODEL_FILTER_TREE,
    methods: METHOD_FILTER_TREE,
};

fs.writeFileSync(
    "./src/js/data/filter_trees.ts",
    ignore + `export const filterTree = ${JSON.stringify(data)} as const;\nexport default filterTree;`,
    "utf8",
);

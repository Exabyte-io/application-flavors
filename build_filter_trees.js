const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const lodash = require("lodash");
const utils = require("@exabyte-io/code.js/dist/utils");

const MODEL_ASSET_PATH = path.resolve(__dirname, "models");
const METHOD_ASSET_PATH = path.resolve(__dirname, "methods");
const MODEL_FILTER_TREE = {};
const METHOD_FILTER_TREE = {};

/**
 * Reads asset file and stores asset data in target object under object path which reflects the file system.
 * @param {Object} targetObject - Object in which asset data should be stored
 * @param {string} assetPath - Absolute path to asset file.
 * @param {string} assetRoot - Path to asset root directory to construct relative path.
 */
function loadAndInsertAssetData(targetObject, assetPath, assetRoot) {
    const fileContent = fs.readFileSync(assetPath, "utf8");
    const data = yaml.load(fileContent, { schema: utils.JsYamlAllSchemas });
    const objectPath = utils.createObjectPathFromFilePath(assetPath, assetRoot);
    lodash.set(targetObject, objectPath, data);
}

/**
 * Traverse asset folder recursively and load asset files.
 * @param currPath {string} - path to asset directory
 * @param {Object} targetObj - Object in which assets are assigned
 * @param {string} assetRoot - Path to asset root directory to construct relative path.
 */
const getAssetData = (currPath, targetObj, assetRoot) => {
    const branches = utils.getDirectories(currPath);
    const assetFiles = utils.getFilesInDirectory(currPath, [".yml", ".yaml"], false);

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

const data = {
    models: MODEL_FILTER_TREE,
    methods: METHOD_FILTER_TREE,
};

fs.writeFileSync("./filter_trees.js", `module.exports = ${JSON.stringify(data)}`, "utf8");

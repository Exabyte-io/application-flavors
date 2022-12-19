const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const _ = require("lodash");
const utils = require("./lib/js/utils");

const ASSET_PATH = path.resolve(__dirname, "application_features");
const FEATURE_DATA = {};

/**
 * Search recursively for a key name in an object.
 * @param {string} key
 * @param {Object} object
 * @returns {String[]} - List of object paths (usable with _.set / _.get)
 * @todo Move to code.js
 */
const findKeys = (key, object) => {
    const foundKeys = [];
    const iterate = (obj, level) => {
        Object.keys(obj).forEach((k) => {
            const objPath = !level ? k : [level, k].join(".");
            if (k === key) {
                foundKeys.push(objPath);
            } else if (typeof obj[k] === "object" && obj[k] !== null) {
                iterate(obj[k], objPath);
            }
        });
    };
    iterate(object);
    return foundKeys;
};

/**
 * Patched version of lodash's _.get() which handles empty object paths.
 * @param {Object} obj - The object to query
 * @param {string} objPath - The path of the property to get
 * @returns {*} - Resolved value
 * @todo Move to code.js
 */
const getByPath = (obj, objPath) => {
    return !objPath ? obj : _.get(obj, objPath);
};

/**
 * Load file and resolve references recursively.
 * NOTE: The `include` key is used to designate a reference.
 * With a separator present, the reference may refer to a key in the object.
 * Please use with caution in order to avoid circular references!
 * @param filePath
 * @param separator
 * @returns {Object}
 * @todo Move to code.js
 */
const loadYAMLWithReferences = (filePath, separator = "#") => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const currentDir = path.dirname(filePath);
    let yamlObj = yaml.load(fileContent);
    findKeys("include", yamlObj).forEach((includePath) => {
        console.log(`found include at path ${includePath}`);
        const reference = _.get(yamlObj, includePath);
        const parentObjPath = includePath.replace(/[.]?include/, "");
        const currObj = getByPath(yamlObj, parentObjPath);
        if (typeof reference === "string") {
            const [fileName, key = ""] = reference.split(separator);
            let resolved = loadYAMLWithReferences(path.resolve(currentDir, fileName));
            resolved = getByPath(resolved, key);
            resolved = utils.recursiveMerge(resolved, currObj);
            if (!parentObjPath) {
                yamlObj = resolved;
            } else {
                _.set(yamlObj, parentObjPath, resolved);
            }
            _.unset(yamlObj, includePath);
        }
        return null;
    });
    return yamlObj;
};

const cleanObjectPath = (objPath) => {
    if (!objPath.includes(".")) return objPath;
    return `['${objPath}']`;
};

/**
 * Load YAML asset files and insert asset data into the MODEL_DATA object.
 * @param {string} dir - folder containing asset file
 * @param {string} fileName - asset file name
 * @param {string} assetExtension - file extension for asset
 */
const loadAssetFile = (dir, fileName, assetExtension = ".yml") => {
    const yamlObj = loadYAMLWithReferences(path.resolve(dir, fileName));
    const key = cleanObjectPath(path.basename(fileName, assetExtension));
    let objectPath = path.relative(ASSET_PATH, dir).split(path.sep).join(".");
    objectPath = [objectPath, key].filter(Boolean).join(".");
    _.set(FEATURE_DATA, objectPath, yamlObj);
    console.log(`setting feature data of [${fileName}] at path [${objectPath}]`);
};

const getDirectories = (currentPath) => {
    return fs
        .readdirSync(currentPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
};

const getAssetFiles = (currentPath, assetExtension = ".yml") => {
    return fs
        .readdirSync(currentPath)
        .filter((dirItem) => path.extname(dirItem) === assetExtension);
};

/**
 * Traverse asset folder recursively and load asset files.
 * @param currPath {string} - path to asset directory
 */
const getAssetData = (currPath) => {
    const branches = getDirectories(currPath);
    const assetFiles = getAssetFiles(currPath);
    console.log(`current directory: ${currPath}`);
    console.log("contains assets: ");
    assetFiles.forEach((a) => console.log(a));
    console.log("-----");

    assetFiles.forEach((asset) => {
        try {
            loadAssetFile(currPath, asset);
        } catch (e) {
            console.log(e);
        }
    });
    branches.forEach((b) => {
        getAssetData(path.resolve(currPath, b));
    });
};

getAssetData(ASSET_PATH);

fs.writeFileSync(
    "./model_feature_data.js",
    `module.exports = ${JSON.stringify(FEATURE_DATA)}`,
    "utf8",
);

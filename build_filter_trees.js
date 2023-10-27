const fs = require("fs");
const path = require("path");
const utils = require("@exabyte-io/code.js/dist/utils");

const MODEL_ASSET_PATH = path.resolve(__dirname, "models");
const METHOD_ASSET_PATH = path.resolve(__dirname, "methods");
const MODEL_FILTER_TREE = {};
const METHOD_FILTER_TREE = {};

utils.getAssetDataFromPath(MODEL_ASSET_PATH, MODEL_FILTER_TREE, MODEL_ASSET_PATH);
utils.getAssetDataFromPath(METHOD_ASSET_PATH, METHOD_FILTER_TREE, METHOD_ASSET_PATH);
const ignore = "/* eslint-disable */\n";
const data = {
    models: MODEL_FILTER_TREE,
    methods: METHOD_FILTER_TREE,
};

fs.writeFileSync(
    "./src/js/data/filter_trees.js",
    ignore + `module.exports = ${JSON.stringify(data)}`,
    "utf8",
);

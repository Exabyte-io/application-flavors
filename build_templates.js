/**
 * build_templates uses node API to read all jinja templates from the FS
 * at build time and writes them out to a single templates.js file for
 * downstream consumption to avoid FS calls in the browser.
 */
const fs = require("fs");
const yaml = require("js-yaml");
const utils = require("@exabyte-io/code.js/dist/utils");

function buildAsset({ assetPath, targetPath, dataKey = "" }) {
    const fileContent = fs.readFileSync(assetPath);
    const obj = yaml.load(fileContent, { schema: utils.JsYamlAllSchemas });
    const ignore = "/* eslint-disable */\n";
    fs.writeFileSync(
        targetPath,
        ignore + `module.exports = {${dataKey}: ` + JSON.stringify(obj) + "}\n",
        "utf8",
    );
    console.log(`Written asset "${assetPath}" to "${targetPath}"`);
}

buildAsset({
    assetPath: "./templates/templates.yml",
    targetPath: "./src/js/data/templates.js",
    dataKey: "allTemplates",
});

buildAsset({
    assetPath: "./applications/application_data.yml",
    targetPath: "./src/js/data/application_data.js",
    dataKey: "applicationData",
});

buildAsset({
    assetPath: "./executables/tree.yml",
    targetPath: "./src/js/data/tree.js",
    dataKey: "applicationTree",
});

/**
 * build_templates uses node API to read all jinja templates from the FS
 * at build time and writes them out to a single templates.js file for
 * downstream consumption to avoid FS calls in the browser.
 */
const utils = require("@exabyte-io/code.js/dist/utils");

utils.buildJsAssetFromYaml({
    assetPath: "./templates/templates.yml",
    targetPath: "./src/js/data/templates.js",
    dataKey: "allTemplates",
});

utils.buildJsAssetFromYaml({
    assetPath: "./applications/application_data.yml",
    targetPath: "./src/js/data/application_data.js",
    dataKey: "applicationData",
});

utils.buildJsAssetFromYaml({
    assetPath: "./executables/tree.yml",
    targetPath: "./src/js/data/tree.js",
    dataKey: "applicationTree",
});

/**
 * build_application_trees uses node API to read all jinja templates from the FS
 * at build time and writes them out to a single templates.js file for
 * downstream consumption to avoid FS calls in the browser.
 */
import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import fs from "fs";
import yaml from "js-yaml";

function buildAsset({
    assetPath,
    targetPath,
    dataKey = ""
}: {
    assetPath: fs.PathOrFileDescriptor;
    targetPath: fs.PathOrFileDescriptor;
    dataKey: string;
}) {
    const fileContent = fs.readFileSync(assetPath);
    const obj = yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas });
    const ignore = "/* eslint-disable */\n";
    fs.writeFileSync(
        targetPath,
        ignore + `export const ${dataKey} = ${JSON.stringify(obj)} as const;\nexport default ${dataKey};`,
        "utf8",
    );
    console.log(`Written asset "${assetPath}" to "${targetPath}"`);
}

buildAsset({
    assetPath: "./templates/templates.yml",
    targetPath: "src/js/data/templates.ts",
    dataKey: "allTemplates",
});

buildAsset({
    assetPath: "./applications/application_data.yml",
    targetPath: "src/js/data/application_data.ts",
    dataKey: "applicationVersionBuildTree",
});

buildAsset({
    assetPath: "./executables/tree.yml",
    targetPath: "src/js/data/tree.ts",
    dataKey: "applicationExecutableFlavorTree",
});

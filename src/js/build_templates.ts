/**
 * build_templates uses node API to read all jinja templates from the FS
 * at build time and writes them out to a single templates.js file for
 * downstream consumption to avoid FS calls in the browser.
 */
import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import { AllowedMonitors } from "./allowed_monitors";
import { AllowedPostProcessors } from "./allowed_post-processors";
import { AllowedResults } from "./allowed_results";
import fs from "fs";
import { AllowedApplications } from "./index";
import yaml from "js-yaml";

export type VersionData = {
    version: string;
    isDefault: boolean;
    build?: string;
    hasAdvancedComputeOptions?: boolean;
};

export type ApplicationData = {
    name: AllowedApplications;
    shortName: string;
    summary: string;
    defaultVersion: string;
    versions: VersionData[];
};

export type TemplateData = {
    content: string;
    name: string;
    contextProviders: { name: string }[];
    applicationName: AllowedApplications;
    executableName: string;
};

export type FlavorTreeData = {
    isDefault?: boolean;
    results?: AllowedResults[];
    monitors?: AllowedMonitors[];
    postProcessors?: AllowedPostProcessors[];
    applicationName: AllowedApplications;
    executableName: string;
    supportedApplicationVerions?: string[];
};

export type ExecutableTreeData = {
    monitors?: AllowedMonitors[];
    results?: AllowedResults[];
    postProcessors?: AllowedPostProcessors[];
    isDefault?: boolean;
    hasAdvancedComputeOptions?: boolean;
    flavors: Record<string, FlavorTreeData>;
};

export type ApplicationTreeData = Record<AllowedApplications, ExecutableTreeData>;

/*
 * This function reads a yml asset from the file system and writes it to the target path as json under the given dataKey.
 * @param assetPath - The path to the asset file.
 * @param targetPath - The path to the target file.
 * @param dataKey - The key to use for the data in the target file.
 */
function buildAsset<T, K extends string = string>({
    assetPath,
    targetPath,
    dataKey,
}: {
    assetPath: fs.PathOrFileDescriptor;
    targetPath: fs.PathOrFileDescriptor;
    dataKey: K;
}): Record<K, T> {
    const fileContent = fs.readFileSync(assetPath);
    const obj = yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as Record<
        K,
        T
    >;
    const ignore = "/* eslint-disable */\n";
    fs.writeFileSync(
        targetPath,
        ignore + `module.exports = {${dataKey}: ` + JSON.stringify(obj) + "}\n",
        "utf8",
    );
    console.log(`Written asset "${assetPath}" to "${targetPath}"`);
    return obj;
}

buildAsset<TemplateData, "allTemplates">({
    assetPath: "./templates/templates.yml",
    targetPath: "./src/js/data/templates.js",
    dataKey: "allTemplates",
});

buildAsset<ApplicationData, "applicationData">({
    assetPath: "./applications/application_data.yml",
    targetPath: "./src/js/data/application_data.js",
    dataKey: "applicationData",
});

buildAsset<ApplicationTreeData, "applicationTree">({
    assetPath: "./executables/tree.yml",
    targetPath: "./src/js/data/tree.js",
    dataKey: "applicationTree",
});

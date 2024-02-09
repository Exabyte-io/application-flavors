import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import { ApplicationData, ApplicationTreeData, TemplateData } from "./build_templates";
import fs from "fs";
import yaml from "js-yaml";

export function getAllAppTemplates() {
    const fileContent = fs.readFileSync("./templates/templates.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as Record<string, TemplateData>;
}

/*
* @returns {object} - The flat list of applications (flattened by version and build).
*/
export function getAllAppData() {
    const fileContent = fs.readFileSync("./applications/application_data.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as Record<string, ApplicationData>;
}

/*
* @returns {object} - The tree of applications containing the executables and flavors.
*/
export function getAllAppTree() {
    const fileContent = fs.readFileSync("./executables/tree.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as Record<string, ApplicationTreeData>;
}

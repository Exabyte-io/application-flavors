import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import fs from "fs";
import yaml from "js-yaml";
import applicationVersionBuildTree from "./data/application_data";
import applicationExecutableFlavorTree from "./data/tree";
import allTemplates from "./data/templates";

export function loadApplicationTemplates() {
    const fileContent = fs.readFileSync("../../templates/templates.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof allTemplates;
}

export function loadApplicationVersionBuildTree() {
    const fileContent = fs.readFileSync("../../applications/application_data.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof applicationVersionBuildTree;
};

export function loadApplicationExecutableFlavorTree() {
    const fileContent = fs.readFileSync("../../executables/tree.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof applicationExecutableFlavorTree;
}
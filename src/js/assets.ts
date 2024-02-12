import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import fs from "fs";
import yaml from "js-yaml";
import applicationVersionBuildTree from "./data/application_data";
import applicationExecutableFlavorTree from "./data/tree";
import allTemplates from "./data/templates";
import _ from "lodash";
import path from "path";

export function loadApplicationTemplates(pathOverride?: string) {
    const fileContent = fs.readFileSync(pathOverride || "../../templates/templates.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof allTemplates;
}

export function loadApplicationVersionBuildTree(pathOverride?: string) {
    const fileContent = fs.readFileSync(pathOverride || "../../applications/application_data.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof applicationVersionBuildTree;
};

export function loadApplicationExecutableFlavorTree(pathOverride?: string) {
    const fileContent = fs.readFileSync(pathOverride || "../../executables/tree.yml");
    return yaml.load(fileContent.toString(), { schema: JsYamlAllSchemas }) as typeof applicationExecutableFlavorTree;
}

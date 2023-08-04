import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import fs from "fs";
import yaml from "js-yaml";

export function getAllAppTemplates() {
    const fileContent = fs.readFileSync("./templates/templates.yml");
    return yaml.load(fileContent, { schema: JsYamlAllSchemas });
}

export function getAllAppData() {
    const fileContent = fs.readFileSync("./applications/application_data.yml");
    return yaml.load(fileContent, { schema: JsYamlAllSchemas });
}

export function getAllAppTree() {
    const fileContent = fs.readFileSync("./executables/tree.yml");
    return yaml.load(fileContent, { schema: JsYamlAllSchemas });
}

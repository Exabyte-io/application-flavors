import { JsYamlAllSchemas } from "@exabyte-io/code.js/dist/utils";
import fs from "fs";
import yaml from "js-yaml";

export function getAllAppTemplates() {
    const fileContent = fs.readFileSync("./templates/templates.yml");
    return yaml.load(fileContent, { schema: JsYamlAllSchemas });
}

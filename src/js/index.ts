import allowedMonitors, {type AllowedMonitors} from "./allowed_monitors";
import allowedResults, {type AllowedResults} from "./allowed_results";
import allowedPostProcessors, { type AllowedPostProcessors } from "./allowed_post-processors";
export { getAllAppTemplates, getAllAppData, getAllAppTree } from "./assets";
export { getAppTree } from "./tree";
export { getAppData } from "./data";
export { allTemplates } from "./data/templates";
export { applicationData } from "./data/application_data";
export { applicationTree } from "./data/tree";
export { filterModelsByApplicationParameters } from "./models";
export {
    allowedMonitors,
    allowedResults,
    allowedPostProcessors,
    AllowedMonitors,
    AllowedResults,
    AllowedPostProcessors
};
export {
    type VersionData,
    type ApplicationData,
    type TemplateData,
    type FlavorTreeData,
    type ExecutableTreeData,
    type ApplicationTreeData
} from "./build_templates";

export const allApplications = [
    "espresso",
    "jupyterLab",
    "exabyteml",
    "deepmd",
    "nwchem",
    "python",
    "shell",
    "vasp",
] as const;

export type AllowedApplications = typeof allApplications[number];

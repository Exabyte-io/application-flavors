import { filterEntityList } from "@exabyte-io/code.js/dist/utils";

import { methods as applicationMethodMap } from "./data/filter_trees";
import { getFilterObjects } from "./models";
import { FilterObject } from "@exabyte-io/code.js/dist/utils/filter";
import { AllowedApplications } from ".";

export function filterMethodsByApplicationParameters({
    methodList,
    appName,
    version,
    build,
    executable,
    flavor,
}: {
    methodList: {path: string}[];
    appName: AllowedApplications;
    version: string;
    build: string;
    executable: string;
    flavor: string;
}) {
    const filterObjects = getFilterObjects({
        filterTree: applicationMethodMap,
        appName,
        version,
        build,
        executable,
        flavor,
    }) as FilterObject[];

    return filterEntityList({
        entitiesOrPaths: methodList,
        filterObjects,
        multiPathSeparator: "::",
    }) as {path: string}[];
}

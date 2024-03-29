import { filterEntityList } from "@mat3ra/code/dist/js/utils";

import { methods as applicationMethodMap } from "./data/filter_trees";
import { getFilterObjects } from "./models";

export function filterMethodsByApplicationParameters({
    methodList,
    appName,
    version,
    build,
    executable,
    flavor,
}) {
    const filterObjects = getFilterObjects({
        filterTree: applicationMethodMap,
        appName,
        version,
        build,
        executable,
        flavor,
    });
    return filterEntityList({
        entitiesOrPaths: methodList,
        filterObjects,
        multiPathSeparator: "::",
    });
}

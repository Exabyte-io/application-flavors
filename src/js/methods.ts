import { filterEntityList } from "@exabyte-io/code.js/dist/utils";

import filterTree from "./data/filter_trees";
import { getFilterObjects } from "./models";
import { PathObject } from "@exabyte-io/code.js/dist/utils/filter";

export function filterMethodsByApplicationParameters<T extends PathObject[]>({
    methodList,
    appName,
    version,
    build,
    executable,
    flavor,
}: {
    methodList: T;
    appName: string;
    version?: string;
    build?: string;
    executable?: string;
    flavor?: string;
}) {
    const filterObjects = getFilterObjects({
        filterTree: filterTree.methods,
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

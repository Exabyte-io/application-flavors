import { filterEntityList } from "@exabyte-io/code.js/dist/utils";

import { getFilterObjects } from "./models";

// TODO: reactivate once epic/SOF-6009 has been merged
// import { methods as applicationMethodMap } from "../../filter_trees";

// placeholder for applicationMethodMap
const applicationMethodMap = {
    espresso: {
        "5.2.1": {
            Default: {
                "pw.x": {
                    pw_scf: [
                        { path: "/qm/wf/undefined/pw/undefined" },
                        { regex: "/qm/wf/undefined/psp/.*" },
                        { regex: "/qm/wf/undefined/smearing/.*" },
                        { regex: "/qm/wf/undefined/tetrahedron/.*" },
                        { path: "/opt/diff/ordern/cg/undefined" },
                        { path: "/linalg/diag/undefined/davidson/undefined" },
                    ],
                },
            },
        },
    },
};

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

import assert from "assert";
import { expect } from "chai";

import {
    allTemplates,
    allowedMonitors,
    allowedResults,
    applicationExecutableFlavorTree,
    loadApplicationVersionBuildTree,
    loadApplicationTemplates,
    loadApplicationExecutableFlavorTree,
    getApplicationVersionBuildData,
    allowedPostProcessors,
    allowedApplications,
    getApplicationExecutableFlavorData,
} from "../src/js/index";

describe("allowedApplications", () => {
    it("should not be empty", () => {
        assert(Array.isArray(allowedApplications));
        assert(allowedApplications.length > 0);
    });
});

describe("allowedResults", () => {
    it("should not be empty", () => {
        assert(Array.isArray(allowedResults));
        assert(allowedResults.length > 0);
    });
});

describe("allowedMonitors", () => {
    it("should not be empty", () => {
        assert(allowedMonitors instanceof Object);
        assert(Object.keys(allowedMonitors).length > 0);
    });
});

describe("allowedPostProcessors", () => {
    it("should not be empty", () => {
        assert(allowedPostProcessors instanceof Object);
        assert(Object.keys(allowedPostProcessors).length > 0);
    });
});

describe("loadApplicationTemplates", () => {
    const ALL_INPUT_TEMPLATES = loadApplicationTemplates("./templates/templates.yml");
    assert(Array.isArray(ALL_INPUT_TEMPLATES));
    assert(ALL_INPUT_TEMPLATES.length > 0);
    it("has all required keys in each element", () => {
        ALL_INPUT_TEMPLATES.forEach((template) => {
            assert("applicationName" in template);
            assert("executableName" in template);
            assert("name" in template);
            assert("content" in template);
        });
    });
});

describe("loadApplicationExecutableFlavorTree", () => {
    let APP_TREE: typeof applicationExecutableFlavorTree;
    before(() => {
        APP_TREE = loadApplicationExecutableFlavorTree("./executables/tree.yml");
    });

    it("returns valid tree", () => {
        assert("nwchem" in APP_TREE);
    });
});

describe("getApplicationExecutableFlavorData", () => {
    it("raises on unknown application", () => {
        expect(() => {
            // @ts-expect-error
            getApplicationExecutableFlavorData("unknown_app");
        }).to.throw("Cannot use \'in\' operator to search for \'unknown_app\' in undefined");
    });
});

describe("loadApplicationVersionBuildTree", () => {
    it("returns results", () => {
        const { nwchem } = loadApplicationVersionBuildTree("./applications/application_data.yml");
        assert("name" in nwchem);
        assert(nwchem.name === "nwchem");
    });
});

describe("getApplicationVersionBuildData", () => {
    it("raises on unknown application", () => {
        expect(() => {
            // @ts-expect-error
            getApplicationVersionBuildData("unknown_app");
        }).to.throw("unknown_app is not a known application with data.");
    });
});

describe("assets for all executables", () => {
    let APP_TREE: typeof applicationExecutableFlavorTree, templates: typeof allTemplates;
    before(() => {
        APP_TREE = loadApplicationExecutableFlavorTree("./executables/tree.yml");
        templates = loadApplicationTemplates("./templates/templates.yml");
    });

    it("exists at least 1 asset for each tree entry for deepmd tree", () => {
        const tree = APP_TREE.deepmd;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for espresso tree", () => {
        const tree = APP_TREE.espresso;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for jupyterLab tree", () => {
        const tree = APP_TREE.jupyterLab;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    // skip as there are no template assets for exabyteml
    it.skip("exists at least 1 asset for each tree entry for exabyteml tree", () => {
        const tree = APP_TREE.exabyteml;
        console.log(JSON.stringify(tree, null, 4));

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for nwchem tree", () => {
        const tree = APP_TREE.nwchem;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for python tree", () => {
        const tree = APP_TREE.python;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for shell tree", () => {
        const tree = APP_TREE.shell;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });

    it("exists at least 1 asset for each tree entry for vasp tree", () => {
        const tree = APP_TREE.vasp;

        Object.keys(tree).forEach((treeItemName) => {
            const treeItemTemplates = templates.filter(
                (template) => template.executableName === treeItemName,
            );

            assert(treeItemTemplates.length > 0);
        });
    });
});

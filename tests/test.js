import assert from "assert";
import { expect } from "chai";

import {
    allowedMonitors,
    allowedResults,
    getAllAppData,
    getAllAppTemplates,
    getAllAppTree,
    getAppData,
    getAppTree,
} from "../src/js/index";

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

describe("ALL_INPUT_TEMPLATES", () => {
    const ALL_INPUT_TEMPLATES = getAllAppTemplates();
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

describe("getAllAppTree", () => {
    let APP_TREE;
    before(() => {
        APP_TREE = getAllAppTree();
    });

    it("returns valid tree", () => {
        assert("nwchem" in APP_TREE);
    });
});

describe("getAppTree", () => {
    it("raises on unknown application", () => {
        expect(() => {
            getAppTree("unknown_app");
        }).to.throw("unknown_app is not a known application with a tree.");
    });
});

describe("getAllAppData", () => {
    it("returns results", () => {
        const { nwchem } = getAllAppData();
        assert("name" in nwchem);
        assert(nwchem.name === "nwchem");
    });
});

describe("getAppData", () => {
    it("raises on unknown application", () => {
        expect(() => {
            getAppData("unknown_app");
        }).to.throw("unknown_app is not a known application with data.");
    });
});

describe("assets for all executables", () => {
    let APP_TREE, templates;
    before(() => {
        APP_TREE = getAllAppTree();
        templates = getAllAppTemplates();
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

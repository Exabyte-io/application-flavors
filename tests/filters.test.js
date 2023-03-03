import { expect } from "chai";

import { filterEntityPaths } from "../src/js/filters";

describe("filterEntityPaths", () => {
    const entityPathCollection = [
        { path: "/a/b/c/d/e" },
        { path: "/a/b/c/d/f" },
        { path: "/a/b/c/g/h" },
        { path: "/a/b/c/g/i" },
        { path: "/a/b/k/l/m" },
        { path: "/n/o/p/q/r" },
        { path: "/v/w/x/y/z" },
    ];
    const filterObj = {
        app: {
            v1: {
                Default: {
                    "a.x": {
                        // eslint-disable-next-line
                        aDefault: [{ regex: "/a/b/c/d/.*" }],
                        aCustom: [{ path: "/a/b/k/l/m" }],
                    },
                },
            },
            v2: {
                Default: {
                    "a.x": {
                        // eslint-disable-next-line
                        aDefault: [{ regex: "/a/b/c/g/.*" }],
                        aCustom: [{ path: "/a/b/k/l/m" }, { path: "/n/o/p/q/r" }],
                    },
                },
            },
        },
    };
    it("returns an empty array for empty path collections", () => {
        const applicationData = { appName: "app", version: "v1", build: "Default" };
        const filteredPaths = filterEntityPaths({
            applicationData,
            entityPathCollection: [],
            entityFilterObj: filterObj,
        });
        // eslint-disable-next-line no-unused-expressions
        expect(filteredPaths).to.be.an("array").that.is.empty;
    });

    it("filters entity path collection with partial application data", () => {
        const applicationData = { appName: "app", version: "v1", build: "Default" };
        const filteredPaths = filterEntityPaths({
            applicationData,
            entityPathCollection,
            entityFilterObj: filterObj,
        });
        expect(filteredPaths).to.have.length(3);
        expect(filteredPaths.map((o) => o.path)).to.have.members([
            "/a/b/c/d/e",
            "/a/b/c/d/f",
            "/a/b/k/l/m",
        ]);
    });

    it("filters entity path collection with full application data", () => {
        const applicationData = {
            appName: "app",
            version: "v2",
            build: "Default",
            executable: "a.x",
            flavor: "aCustom",
        };
        const filteredPaths = filterEntityPaths({
            applicationData,
            entityPathCollection,
            entityFilterObj: filterObj,
        });
        expect(filteredPaths).to.have.length(2);
        expect(filteredPaths.map((o) => o.path)).to.have.members(["/a/b/k/l/m", "/n/o/p/q/r"]);
    });
});

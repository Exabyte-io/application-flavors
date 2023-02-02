import MODEL_TREE from "@exabyte-io/mode.js/model_tree";
import { expect } from "chai";
import t from "t";

import { getModelTreeByApplication } from "../src/js/models";

describe("Model features", () => {
    it("can be filtered by application", () => {
        const filtered = getModelTreeByApplication({
            tree: MODEL_TREE,
            appName: "espresso",
            version: "5.4.0",
            executable: "pw.x",
            build: "default",
        });
        const pbe = t.find(filtered, (node) => node.path === "/dft/gga/pbe");
        const re = t.find(filtered, (node) => node.path === "/ml/re");
        expect(pbe.data).to.have.property("functional");
        expect(re).to.be.undefined;
    });
});

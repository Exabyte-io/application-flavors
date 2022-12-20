import { expect } from "chai";
import t from "t";

import { filterTree, getModelTreeByApplication } from "../src/js/model_features";

const MODEL_TREE = {
    path: "",
    children: [
        {
            parentPath: "",
            path: "/dft",
            data: { type: { slug: "dft", name: "Density Functional Theory", default: "dft" } },
            children: [
                {
                    parentPath: "/dft",
                    path: "/dft/lda",
                    data: { subtype: { slug: "lda", name: "Local Density Approximation" } },
                    children: [
                        {
                            parentPath: "/dft/lda",
                            path: "/dft/lda/spz",
                            data: { functional: { slug: "spz", name: "Slater-PZ" } },
                        },
                    ],
                },
                {
                    parentPath: "/dft",
                    path: "/dft/gga",
                    data: {
                        default: true,
                        subtype: {
                            slug: "gga",
                            name: "Generalized Gradient Approximation",
                            default: "gga",
                        },
                    },
                    children: [
                        {
                            parentPath: "/dft/gga",
                            path: "/dft/gga/pbe",
                            data: { functional: { slug: "pbe", name: "PBE" } },
                        },
                    ],
                },
            ],
        },
        {
            parentPath: "",
            path: "/ml",
            data: { type: { slug: "ml", name: "Machine Learning", default: "ml" } },
            children: [
                {
                    parentPath: "/ml",
                    path: "/ml/re",
                    data: { subtype: { slug: "re", name: "Regression" } },
                },
            ],
        },
    ],
};

describe("Model features", () => {
    const paths = ["/dft", "/dft/lda"];
    const pathData = [
        {
            path: "/dft/lda",
            data: {
                additionalAttribute: "test",
                subtype: {
                    slug: "lda-modified",
                },
            },
        },
    ];
    it("can be filtered", () => {
        const filtered = filterTree(MODEL_TREE.children, paths);
        expect(filtered).to.have.length(1);
    });
    it("can be modified", () => {
        const tree = filterTree([MODEL_TREE], paths, pathData);
        const modified = t.find(tree, (node) => node.path === "/dft/lda");
        expect(modified.data).to.have.property("additionalAttribute", "test");
        expect(modified.data.subtype.slug).to.be.equal("lda-modified");
    });
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

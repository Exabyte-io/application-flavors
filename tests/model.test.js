import { expect } from "chai";
import t from "t";

import { filterTree, getModelTreeByApplication } from "../src/js/model_features";

const MODEL_TREE = {
    label: "",
    children: [
        {
            parent: "",
            label: "/dft",
            data: { type: { slug: "dft", name: "Density Functional Theory", default: "dft" } },
            children: [
                {
                    parent: "/dft",
                    label: "/dft/lda",
                    data: { subtype: { slug: "lda", name: "Local Density Approximation" } },
                    children: [
                        {
                            parent: "/dft/lda",
                            label: "/dft/lda/spz",
                            data: { functional: { slug: "spz", name: "Slater-PZ" } },
                        },
                    ],
                },
                {
                    parent: "/dft",
                    label: "/dft/gga",
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
                            parent: "/dft/gga",
                            label: "/dft/gga/pbe",
                            data: { functional: { slug: "pbe", name: "PBE" } },
                        },
                    ],
                },
            ],
        },
        {
            parent: "",
            label: "/ml",
            data: { type: { slug: "ml", name: "Machine Learning", default: "ml" } },
            children: [
                {
                    parent: "/ml",
                    label: "/ml/re",
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
        const modified = t.find(tree, (node) => node.label === "/dft/lda");
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
        const pbe = t.find(filtered, (node) => node.label === "/dft/gga/pbe");
        const re = t.find(filtered, (node) => node.label === "/ml/re");
        expect(pbe.data).to.have.property("functional");
        expect(re).to.be.undefined;
    });
});

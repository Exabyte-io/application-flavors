import { expect } from "chai";

import { filterMethodsByApplicationParameters } from "../src/js/methods";

describe("filterMethodsByApplicationParameters", () => {
    const methodConfigs = [
        {
            path: "/qm/wf/none/smearing/gaussian::/linalg/diag/none/davidson/none::/qm/wf/none/psp/us::/qm/wf/none/pw/none",
            name: "mock method A",
        },
        {
            path: "/linalg/diag/none/davidson/none::/qm/wf/none/psp/paw::/qm/wf/none/pw/none",
            name: "mock method B",
        },
        {
            path: "/some/unsupported/method/path::/qm/wf/none/pw/none",
            name: "mock method C",
        },
    ];

    it("should filter list of method configs", () => {
        const filteredMethods = filterMethodsByApplicationParameters({
            methodList: methodConfigs,
            appName: "espresso",
            version: "5.2.1",
            build: "Default",
            executable: "pw.x",
            flavor: "pw_scf",
        });
        expect(filteredMethods).to.have.length(2);
        expect(filteredMethods).not.to.have.deep.members([
            {
                path: "/some/unsupported/method/path::/qm/wf/none/pw/none",
                name: "mock method C",
            },
        ]);
    });

    it("should return empty array if no filter assets are available", () => {
        const filteredConfigs = filterMethodsByApplicationParameters({
            methodList: methodConfigs,
            appName: "python",
            version: "3.8.6",
            build: "Default",
        });
        expect(filteredConfigs).to.have.length(0);
    });
});

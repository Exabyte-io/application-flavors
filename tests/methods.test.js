import { expect } from "chai";

import { filterMethodsByApplicationParameters } from "../src/js/methods";

describe("filterMethodsByApplicationParameters", () => {
    it("should filter list of method configs", () => {
        const methodConfigs = [
            {
                path: "/qm/wf/undefined/smearing/gaussian::/opt/diff/ordern/cg/undefined::/qm/wf/undefined/psp/us::/qm/wf/undefined/pw/undefined",
                name: "mock method A",
            },
            {
                path: "/linalg/diag/undefined/davidson/undefined::/qm/wf/undefined/psp/paw::/qm/wf/undefined/pw/undefined",
                name: "mock method B",
            },
            {
                path: "/some/unsupported/method/path::/qm/wf/undefined/pw/undefined",
                name: "mock method C",
            },
        ];
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
                path: "/some/unsupported/method/path::/qm/wf/undefined/pw/undefined",
                name: "mock method C",
            },
        ]);
    });
});

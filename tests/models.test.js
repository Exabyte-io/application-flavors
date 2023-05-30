import { expect } from "chai";

import { filterModelsByApplicationParameters } from "../src/js/models";

describe("filterModelsByApplication", () => {
    it("can filter list of model configs", () => {
        const modelConfigs = [
            {
                path: "/pb/qm/dft/ksdft/lda?functional=pz",
                type: "ksdft",
                subtype: "lda",
                functional: "pz",
            },
            {
                path: "/pb/qm/dft/ksdft/gga?functional=pbe",
                type: "ksdft",
                subtype: "gga",
                functional: "pbe",
            },
            {
                path: "/pb/qm/dft/ksdft/hybrid?functional=hse",
                type: "ksdft",
                subtype: "hybrid",
                functional: "hse",
            },
        ];
        const filteredConfigs = filterModelsByApplicationParameters({
            modelList: modelConfigs,
            appName: "espresso",
            version: "5.2.1",
            build: "Default",
            executable: "pw.x",
            flavor: "pw_scf_bands_hse",
        });
        expect(filteredConfigs).to.have.length(1);
        expect(filteredConfigs[0]).to.have.property("type", "ksdft");
        expect(filteredConfigs[0]).to.have.property("subtype", "hybrid");
        expect(filteredConfigs[0]).to.have.property("functional", "hse");
    });
});

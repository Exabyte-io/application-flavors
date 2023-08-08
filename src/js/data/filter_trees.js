// eslint-disable
module.exports = {
    models: {
        espresso: {
            "5.2.1": {
                Default: {
                    "pw.x": {
                        pw_scf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        pw_scf_bands_hse: [{ path: "/pb/qm/dft/ksdft/hybrid?functional=hse" }],
                        pw_esm: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        pw_esm_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        pw_nscf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        pw_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        "pw_vc-relax": [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
            },
        },
        exabyteml: {
            "0.2.0": {
                Default: {
                    train: { train: [{ regex: "\\/st\\/det\\/ml\\/.*" }] },
                    score: { score: [{ regex: "\\/st\\/det\\/ml\\/.*" }] },
                },
            },
        },
        nwchem: {
            6.6: {
                Default: {
                    nwchem: {
                        nwchem_total_energy: [{ path: "/pb/qm/dft/ksdft/hybrid?functional=b3lyp" }],
                    },
                },
            },
        },
        vasp: {
            "5.3.5": {
                Default: {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                "Non-collinear": {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                VTST: {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
            },
            "5.4.4": {
                Default: {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                Gamma: {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                "Non-collinear": {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                VTST: {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                "VTST-Gamma": {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
                "VTST-Non-collinear": {
                    vasp: {
                        vasp: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_bands: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_ncsf: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_zpe: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_kpt_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_vc_relax_conv: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_initial: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                        vasp_neb_final: [{ regex: "\\/pb\\/qm\\/dft\\/ksdft\\/(lda|gga).*" }],
                    },
                },
            },
        },
    },
    methods: {
        espresso: {
            "5.2.1": {
                Default: {
                    "pw.x": {
                        pw_scf: [
                            { path: "/qm/wf/none/pw/none" },
                            { path: "/qm/wf/none/smearing/gaussian" },
                            { regex: "\\/qm\\/wf\\/none\\/psp\\/.*" },
                            { path: "/linalg/diag/none/davidson/none" },
                        ],
                        pw_scf_bands_hse: [
                            { path: "/qm/wf/none/pw/none" },
                            { regex: "\\/qm\\/wf\\/none\\/psp\\/.*" },
                            { path: "/linalg/diag/none/davidson/none" },
                        ],
                    },
                },
            },
        },
        exabyteml: {
            "0.2.0": {
                Default: {
                    train: {
                        train: [
                            { path: "/none/none/none/linear/least_squares" },
                            { path: "/none/none/none/linear/ridge" },
                            { path: "/none/none/none/kernel_ridge/least_squares" },
                        ],
                    },
                    score: {
                        score: [
                            { path: "/none/none/none/linear/least_squares" },
                            { path: "/none/none/none/linear/ridge" },
                            { path: "/none/none/none/kernel_ridge/least_squares" },
                        ],
                    },
                },
            },
        },
        nwchem: {
            6.6: {
                Default: {
                    nwchem: {
                        nwchem_total_energy: [{ path: "/qm/wf/none/ao/pople?basisSlug=6-31G" }],
                    },
                },
            },
        },
        vasp: {
            "5.3.5": {
                Default: {
                    vasp: {
                        vasp: [
                            { path: "/qm/wf/none/pw/none" },
                            { path: "/qm/wf/none/psp/paw" },
                            { path: "/qm/wf/none/smearing/gaussian" },
                            { path: "/linalg/diag/none/davidson/none" },
                        ],
                    },
                },
            },
        },
    },
};

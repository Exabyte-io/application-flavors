module.exports = {
    espresso: {
        "5.2.1": {
            "pw.x": {
                default: [
                    { path: "/dft" },
                    { path: "/dft/lda" },
                    { path: "/dft/lda/spz", data: { functional: { name: "PZ" } } },
                    { path: "/dft/lda/spw92", data: { functional: { name: "PW" } } },
                    { path: "/dft/lda/svwn5", data: { functional: { name: "VWN" } } },
                    { path: "/dft/gga" },
                    { path: "/dft/gga/pbe" },
                    { path: "/dft/gga/pbesol" },
                    { path: "/dft/gga/pw91" },
                ],
            },
        },
        "5.4.0": {
            "pw.x": {
                default: [
                    { path: "/dft" },
                    { path: "/dft/lda" },
                    { path: "/dft/lda/spw92", data: { functional: { name: "PW" } } },
                    { path: "/dft/lda/svwn5", data: { functional: { name: "SVWN5" } } },
                    { path: "/dft/gga" },
                    { path: "/dft/gga/pbe" },
                    { path: "/dft/gga/pbesol" },
                    { path: "/dft/gga/pw91" },
                    { path: "/dft/gga/rvv10" },
                ],
            },
        },
    },
};

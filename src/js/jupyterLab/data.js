export default {
    name: "jupyterLab",
    shortName: "jl",
    summary: "JupyterLab",
    defaultVersion: "3.0.3",
    versions: [
        {
            version: "3.0.3",
            isDefault: true,
        },
        {
            version: "3.0.3",
            isDefault: false,
            build: "with-pre-installed-packages",
        },
    ],
};

import monitors from "../allowed_monitors";

export default {
    jupyter: {
        isDefault: true,
        monitors: [monitors.standard_output, monitors.jupyterNotebookEndpoint],
        results: [],
        flavors: {
            notebook: {
                isDefault: true,
                input: [
                    {
                        name: "requirements.txt",
                        templateName: "requirements.txt",
                    },
                ],
                monitors: [monitors.standard_output, monitors.jupyterNotebookEndpoint],
            },
        },
    },
};

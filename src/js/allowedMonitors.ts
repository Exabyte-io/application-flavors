const allowedMonitors = {
    standard_output: "standard_output",
    convergence_electronic: "convergence_electronic",
    convergence_ionic: "convergence_ionic",
    jupyterNotebookEndpoint: "jupyter_notebook_endpoint",
} as const;

export default allowedMonitors;

export type AllowedMonitors = keyof typeof allowedMonitors;

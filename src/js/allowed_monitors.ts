const allowed_monitors = {
    standard_output: "standard_output",
    convergence_electronic: "convergence_electronic",
    convergence_ionic: "convergence_ionic",
    jupyterNotebookEndpoint: "jupyter_notebook_endpoint",
} as const;

export default allowed_monitors;
export type AllowedMonitors = typeof allowed_monitors[keyof typeof allowed_monitors];

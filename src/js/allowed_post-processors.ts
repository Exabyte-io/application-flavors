const allowed_postProcessors = {
    error_handler: "error_handler", // TODO: move it to error handlers
    prepare_restart: "prepare_restart",
    remove_non_zero_weight_kpoints: "remove_non_zero_weight_kpoints",
} as const;

export default allowed_postProcessors;
export type AllowedPostProcessors = typeof allowed_postProcessors[keyof typeof allowed_postProcessors];

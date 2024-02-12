export const allowedPostProcessors = {
    error_handler: "error_handler", // TODO: move it to error handlers
    prepare_restart: "prepare_restart",
    remove_non_zero_weight_kpoints: "remove_non_zero_weight_kpoints",
} as const;

export default allowedPostProcessors;

export type AllowedPostProcessors = keyof typeof allowedPostProcessors;

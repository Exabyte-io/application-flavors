
export const allowedApplications = [
    "espresso",
    "jupyterLab",
    "exabyteml",
    "deepmd",
    "nwchem",
    "python",
    "shell",
    "vasp",
] as const

export type AllowedApplications = typeof allowedApplications[number]

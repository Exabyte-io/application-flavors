import { makeObjectsFromContextProviderNames, readAssetFile } from "../utils";

const applicationName = "jupyterLab";
const executableName = "jupyter";

// Here, we're returning a delayed-evaluation lambda, to avoid loading the asset files in scenarios where they're not
// available, like on the client.
export default () => {
    const allAssets = [
        {
            content: readAssetFile(applicationName, "requirements303.j2.txt"),
            name: "requirements.txt",
            contextProviders: [],
            applicationName,
            executableName,
        },
    ];

    return allAssets.map((a) => makeObjectsFromContextProviderNames(a));
};

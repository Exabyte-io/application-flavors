# Introduction
This repository contains the runtime assets for the various application flavors in the Exabyte platform workflow units.

# Installation
## Javascript
```shell
npm install @exabyte-io/application-flavors.js
```


# Repo Organization
Application templates live in `assets`, with each subdirectory being the name of each application.  All files in here are considered to be Jinja2 templates (regardless of the file extension), and so each file has a `*.j2.*` name as a reminder.

The javascript library source code lives in `src/js` to make room for other language libraries in the future.

# Building, Testing, and Using in Development
With a working NPM environment, do:
```shell
 npm install
 npm test
```

To build the library's source such that you can import it from another project during development, do:
```shell
npm run prepublishOnly
```
Then you can change your importing project's `package.json` to temporarily include the file path import instead of installing from NPM:
```
"@exabyte-io/application-flavors.js": "file:/some/path/to/application-flavors",
```
Remember to revert this line to an NPM version when you're done developing.

## Python Integration Tests

We use the built-in unittests module to run our unit tests. They can be run by doing:

```bash
cd test/pythonml
python -m unittest
```

This set of tests is configured using the `integration_configuration.yaml` file, which contains information for which
units are to be present in a test, and the order they're to be run in. It also contains general settings, such as
where the test fixtures are located, and which files need to be cleaned up when a test job is complete.

## Application Features
The available options (e.g. models) for each application are defined via asset files in `application_features`,
which are used to construct a single object containing all feature definitions (`model_feature_data.js`).
These asset files are organized in the specific way, whereby the filepath also plays a role
in the generation of the feature data object:
1. directory - application name
2. filename - application version
3. first level (of the object defined by asset) - executable
4. second level - build of the executable

The build property contains a list of objects defining the path of the node in the feature tree
(`path`) as well as additional data (`data`), which is used to redefine tree data locally.

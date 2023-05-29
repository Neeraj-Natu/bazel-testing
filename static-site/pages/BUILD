load("@aspect_rules_ts//ts:defs.bzl", "ts_project")


ts_project(
    name = "pages",
    resolve_json_module = True,
    tsconfig = "//:tsconfig",
    preserve_jsx = True,
    allow_js = True,
    visibility = ["//static-site:__subpackages__"],
    deps = [
        "//:node_modules/@types/react",
        "//:node_modules/@types/react-dom",
        "//:node_modules/next",
    ],
)

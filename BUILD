load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//:next/package_json.bzl", next_bin = "bin")

npm_link_all_packages(name = "node_modules")

next_bin.next_binary(
    name = "next_js_binary",
    visibility = ["//visibility:public"],
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)

js_library(
    name = "eslintrc",
    srcs = [".eslintrc.json"],
    visibility = ["//visibility:public"],
)
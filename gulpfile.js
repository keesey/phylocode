"use strict";
exports.build = require("./tasks/build");
exports.deploy = require("./tasks/deploy");
exports.watch = require("./tasks/watch");
exports.default = exports.build;

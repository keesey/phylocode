"use strict";
const { dest, src } = require("gulp");
const paths = require("./paths");
const assets = () => src(paths.src.assets)
    .pipe(dest(paths.dest));
module.exports = assets;
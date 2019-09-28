"use strict";
const { dest, src } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const paths = require("./paths");
const scripts = () =>
    src(paths.src.scripts)
        .pipe(uglify())
        .pipe(dest(paths.dest));
module.exports = scripts;

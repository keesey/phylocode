"use strict";
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { dest, src } = require("gulp");
const postcss = require("gulp-postcss");
const paths = require("./paths");
const styles = () =>
    src(paths.src.styles)
        .pipe(postcss([
            autoprefixer(),
            cssnano(),
        ]))
        .pipe(dest(paths.dest));
module.exports = styles;

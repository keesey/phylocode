"use strict";
const { dest, src } = require("gulp");
const imagemin = require("gulp-imagemin");
const paths = require("./paths");
const images = () => src(paths.src.images)
    .pipe(imagemin())
    .pipe(dest(paths.dest));
module.exports = images;
"use strict";
const { dest, src } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const paths = require("./paths");
const pages = () =>
    src(paths.src.pages)
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
        }))
        .pipe(dest(paths.dest));
module.exports = pages;

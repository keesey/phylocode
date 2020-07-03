"use strict";
const { dest, src } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const nunjucksAPI = require("gulp-nunjucks-api");
const paths = require("./paths");
const pages = () =>
    src(paths.src.pages)
        .pipe(nunjucksAPI({
            data: require("../src/data.json"),
            src: paths.src.templates
        }))
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

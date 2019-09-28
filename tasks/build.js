"use strict";
const { parallel, series } = require("gulp");
const assets = require("./assets");
const clean = require("./clean");
const images = require("./images");
const pages = require("./pages");
const scripts = require("./scripts");
const styles = require("./styles");
module.exports = series(
    clean,
    parallel(
        assets,
        images,
        pages,
        scripts,
        styles,
    ),
);

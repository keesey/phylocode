"use strict";
const del = require("del");
const { dest } = require("./paths");
const clean = () => del(dest, { dot: true });
module.exports = clean;

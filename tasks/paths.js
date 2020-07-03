"use strict";
module.exports = {
    dest: "./dist",
    src: {
        assets: "./src/assets/**/*.{doc,docx,pdf}",
        data: "./src/data.json",
        images: "./src/html/**/*.{png,svg}",
        pages: "./src/templates/**/*.html",
        scripts: "./src/assets/**/*.js",
        styles: "./src/assets/**/*.css",
        templateFiles: "./src/templates/**/*.njk",
        templates: "./src/templates/",
    },
};

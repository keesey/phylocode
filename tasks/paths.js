"use strict";
module.exports = {
    dest: "./dist",
    src: {
        assets: "./src/html/**/*.{doc,docx,pdf}",
        data: "./src/data.json",
        images: "./src/html/**/*.{png,svg}",
        pages: "./src/html/**/*.html",
        scripts: "./src/html/**/*.js",
        styles: "./src/html/**/*.css",
        templates: "./src/templates/",
        templateFiles: "./src/templates/**/*.html",
    },
};

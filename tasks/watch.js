const { watch } = require("gulp");
const assets = require("./assets");
const images = require("./images");
const pages = require("./pages");
const { src } = require("./paths");
const scripts = require("./scripts");
const styles = require("./styles");
module.exports = () => {
    watch(src.assets, assets);
    watch(src.images, images);
    watch(src.pages, pages);
    watch(src.scripts, scripts);
    watch(src.styles, styles);
};

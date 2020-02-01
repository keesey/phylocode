document.addEventListener("DOMContentLoaded", function () {
    function handleFolderClick(event) {
        event.stopPropagation();
        const classList = event.currentTarget.classList;
        const href = event.path && event.path[0] ? event.path[0].href : undefined;
        console.log(event);
        if (typeof href === "string" && href.indexOf("#") >= 0) {
            classList.add("open");
            classList.remove("closed");
        } else {
            classList.toggle("open");
            classList.toggle("closed");
        }
    }
    const folders = document.getElementById("code-nav").querySelectorAll(".folder")
    for (var i = 0; i < folders.length; i++) {
        folders.item(i).addEventListener("click", handleFolderClick);
    }
    document.getElementById("site-nav").addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById("site-nav").classList.toggle("open");
    });
    document.body.addEventListener("click", function () {
        document.getElementById("site-nav").classList.remove("open");
    });
});

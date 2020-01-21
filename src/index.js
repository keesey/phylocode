document.addEventListener("DOMContentLoaded", function () {
    function handleFolderClick(event) {
        event.stopPropagation();
        const classList = event.currentTarget.classList;
        classList.toggle("open");
        classList.toggle("closed");
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

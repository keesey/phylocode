document.addEventListener("DOMContentLoaded", function () {
    function handleFolderClick(event) {
        event.stopPropagation();
        const classList = event.currentTarget.classList;
        classList.toggle("open");
        classList.toggle("closed");
    }
    function initNav(name) {
        const id = name + "-nav";
        document.getElementById(id).addEventListener("click", function () {
            document.getElementById(id).classList.toggle("open");
        });
    }
    const folders = document.getElementById("code-nav").querySelectorAll(".folder")
    for (var i = 0; i < folders.length; i++) {
        folders.item(i).addEventListener("click", handleFolderClick);
    }
    initNav("code");
    initNav("site");
});

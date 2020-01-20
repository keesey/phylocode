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
    document.getElementById("site-nav-button").addEventListener("click", function () {
        document.getElementById("site-nav-content").classList.toggle("open");
    });
});

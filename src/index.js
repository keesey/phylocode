(function() {
    function indicateSelection() {
        const fragment = (window.location.hash || "").replace(/^#/, "");
        const element = document.getElementById(fragment);
        if (element) {
            const current = document.getElementsByClassName("indicated");
            for (let i = 0; i < current.length; ++i) {
                current.item(i).classList.remove("indicated");
            }
            element.classList.add("indicated");
        }
    }
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
        let highlightLink = null;
        function handleMouseOverIdentified(event) {
            event.stopPropagation();
            const id = event.currentTarget.id;
            if (highlightLink) {
                highlightLink.parentElement.removeChild(highlightLink);
                highlightLink = null;
            }
            highlightLink = document.createElement("a");
            highlightLink.classList.add("highlight");
            highlightLink.setAttribute("role", "button")
            highlightLink.addEventListener("mousedown", function() {
                window.location.href = `#${id}`;
            });
            event.currentTarget.insertBefore(highlightLink, event.currentTarget.firstChild);
        }
        indicateSelection();
        {
            const folders = document.getElementById("code-nav").querySelectorAll(".folder")
            for (let i = 0; i < folders.length; i++) {
                folders.item(i).addEventListener("click", handleFolderClick);
            }
        }
        document.getElementById("site-nav").addEventListener("click", function (event) {
            event.stopPropagation();
            document.getElementById("site-nav").classList.toggle("open");
        });
        document.body.addEventListener("click", function () {
            document.getElementById("site-nav").classList.remove("open");
        });
        {
            const identified = document.querySelectorAll("main [id]");
            for (let i = 0; i < identified.length; ++i) {
                identified.item(i).addEventListener("mouseover", handleMouseOverIdentified);
            }
        }
    });
    window.addEventListener("hashchange", indicateSelection);
})();

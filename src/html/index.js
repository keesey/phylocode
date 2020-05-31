(function () {
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
            if (event.currentTarget !== event.target) {
                return;
            }
            event.stopPropagation();
            const classList = event.currentTarget.classList;
            const href = event.path && event.path[0] ? event.path[0].href : undefined;
            if (typeof href === "string" && href.indexOf("#") >= 0) {
                classList.add("open");
                classList.remove("closed");
            } else {
                classList.toggle("open");
                classList.toggle("closed");
            }
        }
        function hideAllHighlights() {
            const highlights = document.querySelectorAll(".highlight");
            for (let i = 0; i < highlights.length; ++i) {
                highlights.item(i).classList.remove("active");
            }
        }
        function handleMouseOverIdentified(event) {
            event.stopPropagation();
            hideAllHighlights();
            const highlight = event.currentTarget.querySelector(".highlight");
            if (highlight) {
                highlight.classList.add("active");
            }
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
                const element = identified.item(i);
                const id = element.id;
                const highlightLink = document.createElement("a");
                highlightLink.classList.add("highlight");
                highlightLink.setAttribute("role", "button")
                highlightLink.addEventListener("mousedown", function () {
                    hideAllHighlights();
                    window.location.href = `#${id}`;
                });
                element.insertBefore(highlightLink, identified.item(i).firstChild);
                element.addEventListener("mouseover", handleMouseOverIdentified);
            }
        }
    });
    window.addEventListener("hashchange", indicateSelection);
})();

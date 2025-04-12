const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("panel-active");
    });
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        if (panel.classList.contains("panel-active")) {
            removeActiveClasses();
        } else {
            removeActiveClasses();
            panel.classList.add("panel-active");
        }
    });
});

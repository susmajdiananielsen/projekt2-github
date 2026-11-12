const menuKnap = document.querySelector(".menu-knap");

menuKnap.addEventListener("click", () => {
    // Skifter mellem åben (true) og lukket (false).
    const erAaben = menuKnap.getAttribute("aria-expanded") === "true";
    menuKnap.setAttribute("aria-expanded", erAaben ? "false" : "true");
});

// Vis først knappen, når den kan bruges.
menuKnap.hidden = false;

const hovedmenu = document.querySelector(".hovedmenu");

hovedmenu.addEventListener("keydown", (event) => {
    // Luk kun med Escape, når mobilknappen er synlig og menuen er åben.
    const mobilknapErSynlig = menuKnap.getClientRects().length > 0;
    const menuErAaben = menuKnap.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && mobilknapErSynlig && menuErAaben) {
        menuKnap.setAttribute("aria-expanded", "false");

        // Flyt fokus tilbage til knappen, så det ikke bliver på et skjult link.
        menuKnap.focus();
    }
});
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

function openMenu() {
    sideMenu.classList.add("open");
    overlay.classList.add("open");
}

function closeMenu() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("open");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);


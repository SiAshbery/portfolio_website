import "../scss/main.scss";

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const menuBranding = document.querySelector(".menu-branding");

let hideMenu = true;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hide");
  menuNav.classList.toggle("hide");
  menuBranding.classList.toggle("hide");
  menuBtn.classList.toggle("close");

  navItems.forEach(item => {
    item.classList.toggle("hide");
  });

  hideMenu = !hideMenu;
}

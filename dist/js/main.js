const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

let hideMenu = true;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hide");
  menuBtn.classList.toggle("close");

  hideMenu = !hideMenu;
}

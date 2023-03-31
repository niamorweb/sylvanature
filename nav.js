let openNav = document.querySelector("#open_nav_mobile");
let closeNav = document.querySelector("#close_nav_mobile");
let btnGroupNav = document.querySelector(".nav__mobile-btn");
let containerNav = document.querySelector(".nav__mobile-container-links");

btnGroupNav.addEventListener("click", () => {
  openNav.classList.toggle("hidden");
  closeNav.classList.toggle("hidden");
  containerNav.classList.toggle("nav__mobile-container-links-active");
});

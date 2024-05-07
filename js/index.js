/* menu hamburgesa */
let iconMenu = document.querySelector(".icon-menu");
let iconClose = document.querySelector(".icon-close");
let contMenu = document.querySelector(".nav_menu");
let MenuActive = document.querySelector(".ctive");
let menuItems = document.querySelectorAll(".menu .menu_item a");

//abrir el menu
iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  contMenu.classList.toggle("show");
  iconClose.classList.toggle("active");
});

//cerrar el menu
iconClose.addEventListener("click", () => {
  iconClose.classList.toggle("active");
  contMenu.classList.toggle("show");
  iconMenu.classList.add("active");
});

// marcar el enlace del menu
menuItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    iconMenu.classList.toggle("active");
    contMenu.classList.toggle("show");
    iconClose.classList.toggle("active");

    // marcar el enlace del menu 
    menuItems.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active")

  });
});

/*
setInterval(contentLogo, 1000);
*/

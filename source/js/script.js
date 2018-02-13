var main_menu = document.querySelector(".main-header__menu");
var user_menu = document.querySelector(".main-header__user-menu");
var toogle_button = document.querySelector(".main-header__toggle-menu");


toogle_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  main_menu.classList.toggle("main-header__menu--closed");
  user_menu.classList.toggle("main-header__user-menu--closed");
  toogle_button.classList.toggle("main-header__toggle-menu--close");
});

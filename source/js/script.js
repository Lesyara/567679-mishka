var main_menu = document.querySelector(".main-header__menu");
var user_menu = document.querySelector(".main-header__user-menu");
var toogle_button = document.querySelector(".main-header__toggle-menu");


window.addEventListener("load", function (evt) {

  evt.preventDefault();
  if (main_menu.classList.contains("main-header__menu--no-js")) {
    main_menu.classList.remove("main-header__menu--no-js");
  }

  if (user_menu.classList.contains("main-header__user-menu--no-js")) {
    user_menu.classList.remove("main-header__user-menu--no-js");
  }

  if (toogle_button.classList.contains("main-header__toggle-menu--no-js")) {
    toogle_button.classList.remove("main-header__toggle-menu--no-js");
  }
})

toogle_button.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (main_menu.classList.contains("main-header__menu--open") &&
    user_menu.classList.contains("main-header__user-menu--open")) {
    main_menu.classList.remove("main-header__menu--open");
    main_menu.classList.add("main-header__menu--closed");
    user_menu.classList.remove("main-header__user-menu--open");
    user_menu.classList.add("main-header__user-menu--closed");
    toogle_button.classList.remove("main-header__toggle-menu--close");
    toogle_button.classList.add("main-header__toggle-menu--open");
  }
  else if (main_menu.classList.contains("main-header__menu--closed") &&
    user_menu.classList.contains("main-header__user-menu--closed")) {
    main_menu.classList.remove("main-header__menu--closed");
    main_menu.classList.add("main-header__menu--open");
    user_menu.classList.remove("main-header__user-menu--closed");
    user_menu.classList.add("main-header__user-menu--open");
    toogle_button.classList.remove("main-header__toggle-menu--open");
    toogle_button.classList.add("main-header__toggle-menu--close");
  }
  else {
    return;
  }
});

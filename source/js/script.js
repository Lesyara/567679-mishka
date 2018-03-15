var main_menu = document.querySelector(".main-header__menu");
var user_menu = document.querySelector(".main-header__user-menu");
var toogle_menu_button = document.querySelector(".main-header__toggle-menu");
var promo_button = document.querySelector(".promo-product__order-button");
var cart_links = document.querySelectorAll(".product__add-to-cart");
var add_to_cart_button = document.querySelector("button.cart-filter__add");
var popup = document.querySelector(".popup");
var popup_back = document.querySelector(".popup__back");


window.onload = function (evt) {
  evt.preventDefault();
  if (main_menu.classList.contains("main-header__menu--no-js")) {
    main_menu.classList.remove("main-header__menu--no-js");
  }

  if (user_menu.classList.contains("main-header__user-menu--no-js")) {
    user_menu.classList.remove("main-header__user-menu--no-js");
  }

  if (toogle_menu_button.classList.contains("main-header__toggle-menu--no-js")) {
    toogle_menu_button.classList.remove("main-header__toggle-menu--no-js");
  }

  if (popup.classList.contains("popup--no-js")) {
    popup.classList.remove("popup--no-js");
  }
};


toogle_menu_button.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (main_menu.classList.contains("main-header__menu--open") &&
    user_menu.classList.contains("main-header__user-menu--open")) {
    main_menu.classList.remove("main-header__menu--open");
    main_menu.classList.add("main-header__menu--closed");
    user_menu.classList.remove("main-header__user-menu--open");
    user_menu.classList.add("main-header__user-menu--closed");
    toogle_menu_button.classList.remove("main-header__toggle-menu--close");
    toogle_menu_button.classList.add("main-header__toggle-menu--open");
  }
  else if (main_menu.classList.contains("main-header__menu--closed") &&
    user_menu.classList.contains("main-header__user-menu--closed")) {
    main_menu.classList.remove("main-header__menu--closed");
    main_menu.classList.add("main-header__menu--open");
    user_menu.classList.remove("main-header__user-menu--closed");
    user_menu.classList.add("main-header__user-menu--open");
    toogle_menu_button.classList.remove("main-header__toggle-menu--open");
    toogle_menu_button.classList.add("main-header__toggle-menu--close");
  }
  else {
    return;
  }
});

if (promo_button) {
  promo_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    show_popup();
  });
}

add_to_cart_button.addEventListener("submit", function (evt) {
  evt.preventDefault();
  hide_popup();
});


if (cart_links) {
  for (var i = 0; i < cart_links.length; i++) {
    cart_links.item(i).addEventListener("click", function (evt) {
      evt.preventDefault();
      show_popup();
    });
  }
}

popup_back.addEventListener("click",function(evt) {
  evt.preventDefault();
  hide_popup();
});

function show_popup() {
  popup.classList.remove("popup--hide");
  popup_back.classList.remove("popup__back--hide");
  popup.classList.add("popup--show");
  popup_back.classList.add("popup__back--show");
}

function hide_popup() {
  popup.classList.remove("popup--show");
  popup_back.classList.remove("popup__back--show");
  popup.classList.add("popup--hide");
  popup_back.classList.add("popup__back--hide");
}

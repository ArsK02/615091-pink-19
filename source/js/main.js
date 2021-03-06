var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var header = document.querySelector(".page-header");

header.classList.remove("page-header--static");
navMain.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    header.classList.add("page-header--static");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    header.classList.remove("page-header--static");
  }
});

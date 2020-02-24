const hamburger = document.querySelector(".icon-hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".icon-close");

hamburger.addEventListener("click", function() {
  navMenu.style.height = "100%";
});

closeBtn.addEventListener("click", function() {
  navMenu.style.height = "0%";
});

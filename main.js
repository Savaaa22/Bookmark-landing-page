const hamburger = document.querySelector(".icon-hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".icon-close");
const logoBookmark = document.querySelector(".logo-bookmark");

hamburger.addEventListener("click", function() {
  navMenu.style.height = "100%";
  hamburger.classList.add("hidden");
  logoBookmark.classList.add("hidden");
});

closeBtn.addEventListener("click", function() {
  navMenu.style.height = "0%";
  hamburger.classList.remove("hidden");
  logoBookmark.classList.remove("hidden");
});

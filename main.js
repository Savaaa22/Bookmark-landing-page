// Hamburger Menu

const hamburger = document.querySelector(".icon-hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".icon-close");
const logoBookmark = document.querySelector(".logo-bookmark");

// Features Tabs

const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab1Content = document.querySelector(".tab1-content");
const tab2Content = document.querySelector(".tab2-content");
const tab3Content = document.querySelector(".tab3-content");

// FAQ

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const answer1 = document.querySelector(".faq-answer1");
const answer2 = document.querySelector(".faq-answer2");
const answer3 = document.querySelector(".faq-answer3");
const answer4 = document.querySelector(".faq-answer4");

// NEWSLETTER

const input = document.querySelector(".email-input");
const submit = document.querySelector(".email-submit");

// Hamburger Menu

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

// Features Tabs

tab1.addEventListener("click", function() {
  tab1.classList.add("features-tabs-click");
  tab2.classList.remove("features-tabs-click");
  tab3.classList.remove("features-tabs-click");
  tab1Content.classList.remove("hide");
  tab2Content.classList.add("hide");
  tab3Content.classList.add("hide");
});

tab2.addEventListener("click", function() {
  tab2.classList.add("features-tabs-click");
  tab1.classList.remove("features-tabs-click");
  tab3.classList.remove("features-tabs-click");
  tab2Content.classList.remove("hide");
  tab1Content.classList.add("hide");
  tab3Content.classList.add("hide");
});

tab3.addEventListener("click", function() {
  tab3.classList.add("features-tabs-click");
  tab2.classList.remove("features-tabs-click");
  tab1.classList.remove("features-tabs-click");
  tab3Content.classList.remove("hide");
  tab2Content.classList.add("hide");
  tab1Content.classList.add("hide");
});

// FAQ

arrow1.addEventListener("click", function() {
  answer1.classList.toggle("hide");
  arrow1.classList.toggle("red-arrow");
});

arrow2.addEventListener("click", function() {
  answer2.classList.toggle("hide");
  arrow2.classList.toggle("red-arrow");
});

arrow3.addEventListener("click", function() {
  answer3.classList.toggle("hide");
  arrow3.classList.toggle("red-arrow");
});

arrow4.addEventListener("click", function() {
  answer4.classList.toggle("hide");
  arrow4.classList.toggle("red-arrow");
});

// NEWSLETTER
submit.addEventListener("click", function() {
  if (input.value === "" || input.value == null) {
    input.classList.add("red-border");
    input.removeAttribute("placeholder");
    input.placeholder = "email@example/com";
  } else {
    input.classList.remove("red-border");
    input.removeAttribute("placeholder");
    input.placeholder = "Enter your email address";
    input.value = "";
  }
});

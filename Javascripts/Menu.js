let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

let nvArrow = document.querySelector(".nv-arrow");
nvArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let bcArrow = document.querySelector(".bc-arrow");
bcArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let tkArrow = document.querySelector(".tk-arrow");
tkArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};




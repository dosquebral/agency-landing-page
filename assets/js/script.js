'use sctrict';

const menuToggleBtn = document.querySelector("[data-navbar-menu-btn]");
const navbar = document.querySelector("[data-navbar]")

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

menuToggleBtn.addEventListener('click', function () {
    elemToggleFunc(navbar);
})
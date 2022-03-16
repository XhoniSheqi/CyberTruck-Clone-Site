
const burger = document.querySelector(".navbar__burger");
const nav = document.querySelector(".navbar__menu");
const link = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
    nav.classList.toggle("navbar--open");
    burger.classList.toggle("line");
});

link.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("navbar--open");
        burger.classList.toggle("line");
    })
});

/* animation on scrool library */

AOS.init();


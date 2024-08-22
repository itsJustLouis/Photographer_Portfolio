const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-2-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-2-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
});
ScrollReveal().reveal(".about_container .logoMid", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".service_container .section_header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".service_container .section_description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    duration: 1000,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

import Swiper from 'swiper';

console.log("Swiper loaded", Swiper);

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        600: {
        slidesPerView: 2,
        spaceBetween: 0,
        },
        900: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

console.log("Swiper initialized", swiper);
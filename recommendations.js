import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
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
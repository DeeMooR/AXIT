// Инициализируем Swiper
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
            simulateTouch: true,
        },
        768: {
            slidesPerView: 3,
            simulateTouch: false,
        },
        1110: {
            slidesPerView: 3,
            spaceBetween: 30,
            simulateTouch: false,
        },
    },
});
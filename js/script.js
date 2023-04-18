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




// const el1 = document.getElementById('swiper');
// const el2 = document.getElementById('swiper-wrapper');
// const el3 = document.getElementById('swiper-slide');
// const el4 = document.getElementById('swiper-pagination');

// function addClassAtCertainWidth() {
//   if (window.innerWidth <= 767.98) {
//     el1.classList.add('swiper');
//     el2.classList.add('swiper-wrapper');
//     el3.classList.add('swiper-slide');
//     el4.classList.add('swiper-pagination');
//   }
// }


// const el1 = document.getElementById('swiper');
// const el2 = document.getElementById('swiper-wrapper');
// const el3 = document.getElementById('swiper-slide');
// const el4 = document.getElementById('swiper-pagination');
// let swiperAdded = false;

// function addClassAtCertainWidth() {
//   if (window.innerWidth <= 767.98 && !swiperAdded) {
//     el1.classList.add('swiper');
//     el2.classList.add('swiper-wrapper');
//     el3.classList.add('swiper-slide');
//     el4.classList.add('swiper-pagination');
//     swiperAdded = true;
//   } else if (window.innerWidth > 767.98 && swiperAdded) {
//     el1.classList.remove('swiper');
//     el2.classList.remove('swiper-wrapper');
//     el3.classList.remove('swiper-slide');
//     el4.classList.remove('swiper-pagination');
//     swiperAdded = false;
//   }
// }

// window.addEventListener('resize', addClassAtCertainWidth);
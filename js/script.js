$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.header__item').click(function(event) {
        if (window.innerWidth <= 767.98) {
            $('.header__burger,.header__menu').toggleClass('active');
		    $('body').toggleClass('lock');
        };
	});
});

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
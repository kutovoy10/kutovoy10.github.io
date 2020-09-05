$(function () {

    // nav

    const btnNav = document.querySelector('.media-header__btn-nav'),
        navList = document.querySelector('.media-nav');

    function navShow(btn, nav, navActive) {
        btn.addEventListener('click', () => {
            nav.classList.toggle(navActive);
        });
    }

    navShow(btnNav, navList, 'media-nav__active');

    // slider

    $('.slider-employees').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev-employees'),
        nextArrow: $('.next-employees')
    });

    $('.slider-birthday').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev-birthday'),
        nextArrow: $('.next-birthday')
    });

    // checkbox
    $('input, select').styler();

});
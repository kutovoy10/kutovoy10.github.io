$(function () {

    $('.slider-feedback').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
    });

    $('.popular-slaider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // video hover 
    const bgVideoHide = document.querySelector('.bg-video'),
        playBtnHide = document.querySelector('.play-btn'),
        videoView = document.querySelector('.video-view');

    playBtnHide.addEventListener('click', () => {
        playBtnHide.classList.add('hide-block-for-video');
        bgVideoHide.classList.add('hide-block-for-video');
        setTimeout(() => {
            playBtnHide.style.zIndex = '-111';
            bgVideoHide.style.zIndex = '-111';
            videoView.style.zIndex = '1';
        }, 1000);
    });

    // nav

    $('.btn-for-media').click(function () {
        $('header .wrapper .nav nav>ul').slideToggle('300ms', function () {});
        $('.btn-for-media span').toggleClass('active-span');
        $('.btn-for-media').toggleClass('active-btn-for-media');
    });

    $('.subnav-for-media').click(function () {
        $('.submenu').slideToggle('300ms', function () {});
        $('.nav nav ul li:hover i.fas.fa-caret-down').toggleClass('submenu-active');
    });
});
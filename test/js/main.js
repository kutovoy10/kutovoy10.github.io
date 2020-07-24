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
        dots: true
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


});
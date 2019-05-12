// slaider in header

$(".my-slaider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="images/arrow-left.png" class="prev">',
    nextArrow: '<img src="images/arrow-right.png" class="next">'
});


// slaider in posts

$('.center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
});
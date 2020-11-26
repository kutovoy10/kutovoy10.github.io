$('.blog__slider').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1501,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// 

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


$('.slider__text').slick({
  dots: true,
  prevArrow: '<div class="arrow-left"><svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469646 5.40644C0.176754 5.69933 0.176754 6.1742 0.469646 6.4671L5.24262 11.2401C5.53551 11.533 6.01039 11.533 6.30328 11.2401C6.59617 10.9472 6.59617 10.4723 6.30328 10.1794L2.06064 5.93677L6.30328 1.69413C6.59617 1.40123 6.59617 0.92636 6.30328 0.633467C6.01039 0.340573 5.53551 0.340573 5.24262 0.633467L0.469646 5.40644ZM30.8947 5.18677L0.999977 5.18677V6.68677L30.8947 6.68677V5.18677Z"/></svg></div>',
  nextArrow: '<div class="arrow-right"><svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469646 5.40644C0.176754 5.69933 0.176754 6.1742 0.469646 6.4671L5.24262 11.2401C5.53551 11.533 6.01039 11.533 6.30328 11.2401C6.59617 10.9472 6.59617 10.4723 6.30328 10.1794L2.06064 5.93677L6.30328 1.69413C6.59617 1.40123 6.59617 0.92636 6.30328 0.633467C6.01039 0.340573 5.53551 0.340573 5.24262 0.633467L0.469646 5.40644ZM30.8947 5.18677L0.999977 5.18677V6.68677L30.8947 6.68677V5.18677Z"/></svg></div>'
});

let navBtn = document.querySelector('.header__media-btn');
let navList = document.querySelector('.header__right');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('close');
  navList.classList.toggle('nav-active');
})
$(function () {

  // slider
  $('.client__slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // formstyler
  $('input.material-radio').styler();
  $('input.extra-checkbox').styler();
  $('input.pop-up-radio').styler();
  $('input.color-checkbox').styler();
  $('input.size-form').styler();

  // scroll

  if (window.innerWidth > 1200) {
    function test() {
      let a = 1575;

      // height block
      $('.calculator__title').click(function () {
        setTimeout(function () {
          a = document.querySelector('.calculator .left').clientHeight;
        }, 1000);
      });

      // position fixed for scroll
      if (a < 548) {} else {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 440 && $(window).scrollTop() < a - 40) {
            $('.calculator .right > .info').addClass('scroll');
          } else {
            $('.calculator .right > .info').removeClass('scroll')
          }
        });
      }
    }

    test();
  }

  // accordion

  function accordion(btn, blockHide, arrow) {
    $(btn).click(function () {
      $(blockHide).slideToggle('slow');
      $(arrow).toggleClass('arrow-down');
    });
  }

  accordion('.size > .calculator__title', '.size .block-hide', '.size .calculator__title-arrow');
  accordion('.writing > .calculator__title', '.writing .block-hide', '.writing .calculator__title-arrow');
  accordion('.color > .calculator__title', '.color .block-hide', '.color .calculator__title-arrow');
  accordion('.material > .calculator__title', '.material .block-hide', '.material .calculator__title-arrow');
  accordion('.extra > .calculator__title', '.extra .block-hide', '.extra .calculator__title-arrow');

  // burger-menu
  let btn = document.querySelector('.btn-media');
  let menu = document.querySelector('.header__right-nav');
  let menuBtn = document.querySelector('.header__right .info__btn');

  btn.addEventListener('click', () => {
    btn.classList.toggle('btn-media-active');
    menu.classList.toggle('header__right-nav-active');
    menuBtn.classList.toggle('info__btn-active');
  })

  // fixed menu

  if (window.innerWidth > 1024) {
    function menuFixed() {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 145) {
          $('.header').addClass('header-active');
        } else {
          $('.header').removeClass('header-active')
        }
      });
    }

    menuFixed();

  }

  // size
  let list = document.querySelectorAll('.size__form-block');

  for (let a of list) {
    a.addEventListener('click', () => {

      for (let b of list) {
        if (b.classList.contains('size__form-block-active')) {
          b.classList.remove('size__form-block-active');
        }
      }

      a.classList.add('size__form-block-active');
    })
  }

  // tab 
  let btnNormalSize = document.querySelector('.size__select-normal');
  let btnBigSize = document.querySelector('.size__select-big');

  let normalSize = document.querySelector('.size__form-normal');
  let bigSize = document.querySelector('.size__form-big');

  btnNormalSize.addEventListener('click', () => {
    normalSize.classList.add('size__form-active');
    btnNormalSize.classList.add('active');
    btnBigSize.classList.remove('active');
    bigSize.classList.remove('size__form-active');
  });

  btnBigSize.addEventListener('click', () => {
    normalSize.classList.remove('size__form-active');
    btnNormalSize.classList.remove('active');
    btnBigSize.classList.add('active');
    bigSize.classList.add('size__form-active');
  });

  // popUp
  let btnPopUp = document.querySelector('.calculator .right .info__btn a');
  let btnClose = document.querySelector('.pop-up .btn-close');
  let overlayClose = document.querySelector('.pop-up .overlay');
  let popUp = document.querySelector('.pop-up');

  btnPopUp.addEventListener('click', () => {
    popUp.style.display = "block";
  })

  btnClose.addEventListener('click', () => {
    popUp.style.display = "none";
  })

  overlayClose.addEventListener('click', () => {
    popUp.style.display = "none";
  })

  // mask
  $("#phone").mask("+ 38 (999) 999 99 99");

});
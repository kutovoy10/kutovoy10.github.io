$(function () {

  // ========== SLIDERS ==========

  $('[data-fancybox="gallery-out-blocks"]').fancybox({
    infobar: false,
    loop: true,
    idleTime: false,
    buttons: [
      "close"
    ],
    btnTpl: {
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div class="arrow-left-line"></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div class="arrow-right-line"><div>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<div class="close__line1"></div><div class="close__line2"></div>' +
        "</button>",
    },
  });

  $('[data-fancybox="gallery-certificate"]').fancybox({
    infobar: false,
    loop: true,
    idleTime: false,
    buttons: [
      "close"
    ],
    btnTpl: {
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div class="arrow-left-line"></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div class="arrow-right-line"><div>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<div class="close__line1"></div><div class="close__line2"></div>' +
        "</button>",
    },
  });

  // slider-photo
  $('.slider-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<div class="prev"><img src="./img/back.png" alt="next"></div>',
    nextArrow: '<div class="next"><img src="./img/next.png" alt="next"></div>'
  });

  // slider-feedback
  $('.slider-feedback').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    fade: true,
    prevArrow: '<div class="prev"><img src="./img/back.png" alt="next"></div>',
    nextArrow: '<div class="next"><img src="./img/next.png" alt="next"></div>'
  });

  // slider-blocks
  $('.slider-blocks').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    fade: true,
    prevArrow: '<div class="prev"><div class="arrow-left-line"></div></div>',
    nextArrow: '<div class="next"><div class="arrow-right-line"><div></div>'
  });

  // ========== NAV FOR SCROLL ==========
  let nav = document.querySelectorAll('.nav-scroll');

  window.onscroll = () => {
    for (let a of nav) {
      if (window.pageYOffset >= 300) a.style.top = '0';
      else a.style.top = '-70' + 'px';
    }
  }

  // ========== MODAL ==========

  let blockClick = document.querySelectorAll('.block-click');
  let modalOutObject = document.querySelector('.modal');
  let close = document.querySelectorAll('.modal-close');

  for (let elem of blockClick) {
    elem.addEventListener('click', function () {
      modalOutObject.style.display = (modalOutObject.style.display == 'block') ? 'none' : 'block';
      document.body.style.overflow = (document.body.style.overflow = 'visible') ? 'hidden' : 'visible';
    });
  };

  for (let elem of close) {
    elem.addEventListener('click', function () {
      modalOutObject.style.display = (modalOutObject.style.display == 'block') ? 'none' : 'block';
      document.body.style.overflow = (document.body.style.overflow = 'hidden') ? 'visible' : 'hidden';
    });
  };

  // ========== MODAL CALCULATOR ==========

  let btnCalculator = document.querySelectorAll('#calculator');
  let modalCalculator = document.querySelector('.modal-calculator');
  let closeCalculator = document.querySelectorAll('.modal-calculator-close');

  for (let elem of btnCalculator) {
    elem.addEventListener('click', function () {
      modalCalculator.style.transform = (modalCalculator.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'visible') ? 'hidden' : 'visible';
    });
  };

  for (let elem of closeCalculator) {
    elem.addEventListener('click', function () {
      modalCalculator.style.transform = (modalCalculator.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'hidden') ? 'visible' : 'hidden';
    });
  };

  // ========== BURGER MENU ==========

  let btnBurgerMenu = document.querySelectorAll('.burger-menu-button-click');
  let modalBurgerMenu = document.querySelector('.burger-menu');
  let closeBurgerMenu = document.querySelectorAll('.burger-menu-close');

  for (let elem of btnBurgerMenu) {
    elem.addEventListener('click', function () {
      modalBurgerMenu.style.transform = (modalBurgerMenu.style.transform == 'translateY(0%)') ? 'translateY(-100%)' : 'translateY(0%)';
    });
  };

  for (let elem of closeBurgerMenu) {
    elem.addEventListener('click', function () {
      modalBurgerMenu.style.transform = (modalBurgerMenu.style.transform == 'translateY(-100%)') ? 'translateY(0%)' : 'translateY(-100%)';
    });
  };

  // ========== CHECK ==========

  let btnCheck = document.querySelectorAll('.btn-check');
  let modalCheck = document.querySelector('.modal-check');
  let closeCheck = document.querySelectorAll('.modal-check-close');

  for (let elem of btnCheck) {
    elem.addEventListener('click', function () {
      modalCheck.style.transform = (modalCheck.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'visible') ? 'hidden' : 'visible';
    });
  };

  for (let elem of closeCheck) {
    elem.addEventListener('click', function () {
      modalCheck.style.transform = (modalCheck.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'hidden') ? 'visible' : 'hidden';
    });
  };

  // ========== CALL ==========

  let btnCall = document.querySelectorAll('.btn-call');
  let modalCall = document.querySelector('.modal-call');
  let closeCall = document.querySelectorAll('.modal-call-close');

  for (let elem of btnCall) {
    elem.addEventListener('click', function () {
      modalCall.style.transform = (modalCall.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'visible') ? 'hidden' : 'visible';
    });
  };

  for (let elem of closeCall) {
    elem.addEventListener('click', function () {
      modalCall.style.transform = (modalCall.style.transform == 'scale(1)') ? 'scale(0)' : 'scale(1)';
      document.body.style.overflow = (document.body.style.overflow = 'hidden') ? 'visible' : 'hidden';
    });
  };

  // ========== ANIMATION ==========

  AOS.init({
    disable: function () {
      var maxWidth = 1200;
      return window.innerWidth < maxWidth;
    }, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'
  });

  // cacl

  let heightInput = document.querySelector('.height');
  let lengthInput = document.querySelector('.length');
  let price = document.getElementById('price');

  const FIXED_PRICE = 500;

  const result = () => {
    const inputHeight = heightInput.value;
    const inputLength = lengthInput.value;
    price.textContent = `Итог: ${((Number(inputHeight) * FIXED_PRICE) * Number(inputLength))} руб./месяц`;
  }

  heightInput.addEventListener("input", result);
  lengthInput.addEventListener("input", result);

  // form calc

  let nextForm = document.querySelector('.next-form');
  let backForm = document.querySelector('.back-form');

  let formOne = document.querySelector('.form-one');
  let formTwo = document.querySelector('.form-two');

  nextForm.addEventListener('click', () => {
    formOne.style.display = 'none';
    formTwo.style.display = 'block';
  })

  backForm.addEventListener('click', function () {
    formOne.style.display = 'block';
    formTwo.style.display = 'none';
  })

});
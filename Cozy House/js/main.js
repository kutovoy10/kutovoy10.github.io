// ========== ANIMATION ==========

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
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

// ========== SLIDER ==========

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  edgeFriction: '0',
  nextArrow: '<div class="right"><img src="./img/long-right-arrow.png" alt="right"></div>',
  prevArrow: '<div class="left"><img src="./img/long-left-arrow.png" alt="left"></div>'
});


// ========== MODAL ==========

// btn-katrine-cat
let modal = document.querySelector('.modal-window-example');
let btn = document.querySelectorAll('.btn-modal-open');
let close = document.querySelectorAll('.modal-close');

btn.forEach(function (element) {
  element.onclick = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // forbid to scroll
  }
})

close.forEach(function (element) {
  element.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // allow to scroll
  };
})

// onclick on overflow close
window.onclick = function (even) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // allow to scroll
  }
}


// ========== BUTTON UP ==========

let btnScrollToTop = document.querySelectorAll('.for-scroll-to-top');

// click event
for (let p of btnScrollToTop) {
  p.addEventListener('click', scrollToTop);
}

// when scrolling button hides/appears
window.onscroll = () => {
  for (let a of btnScrollToTop) {
    if (window.pageYOffset >= 150) a.style.display = 'block';
    else a.style.display = 'none';
  }
}

// scroll to up
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}







// Позиция скроллинга
// window.onscroll = function() {
//   let a = window.pageYOffset;
//   console.log(a);
// }
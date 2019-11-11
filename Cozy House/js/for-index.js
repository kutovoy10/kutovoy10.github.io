// ========== SCROLL TO ELEMENT ==========

document.getElementById('scroll-to-about').onclick = () => scroll(scrollToAboutValue);
document.getElementById('scroll-to-pets').onclick = () => scroll(scrollToPetsValue);
document.getElementById('scroll-to-help').onclick = () => scroll(scrollToHelpValue);
document.getElementById('scroll-to-contacts').onclick = () => scroll(scrollToContactValue);

// calculate the distance to scrolling block
let scrollToAboutValue = document.querySelector('header').clientHeight;
let scrollToPetsValue = scrollToAboutValue + document.querySelector('.about-the-shelter').clientHeight;
let scrollToHelpValue = scrollToPetsValue + document.querySelector('.pets').clientHeight;
let scrollToContactValue = scrollToHelpValue + document.querySelector('.help').clientHeight + document.querySelector('.donation').clientHeight;

// scroll to up
function scroll(value) {
  window.scrollTo({
    top: value,
    behavior: 'smooth'
  });
};
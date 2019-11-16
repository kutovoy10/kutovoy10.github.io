// ========== SCROLL TO ELEMENT ==========

let toAbout = document.querySelectorAll('.scroll-to-about');
let toPets = document.querySelectorAll('.scroll-to-pets');
let toHelp = document.querySelectorAll('.scroll-to-help');
let toContacts = document.querySelectorAll('.scroll-to-contacts');

// calculate the distance to scrolling block
let scrollToAboutValue = document.querySelector('header').clientHeight;
let scrollToPetsValue = scrollToAboutValue + document.querySelector('.about-the-shelter').clientHeight;
let scrollToHelpValue = scrollToPetsValue + document.querySelector('.pets').clientHeight;
let scrollToContactValue = scrollToHelpValue + document.querySelector('.help').clientHeight + document.querySelector('.donation').clientHeight;

for(let a of toAbout) {
  a.addEventListener('click', function(){
    scroll(scrollToAboutValue);
  });
}

for(let b of toPets) {
  b.addEventListener('click', function(){
    scroll(scrollToPetsValue);
  });
}

for(let c of toHelp) {
  c.addEventListener('click', function(){
    scroll(scrollToHelpValue);
  });
}

for(let d of toContacts) {
  d.addEventListener('click', function(){
    scroll(scrollToContactValue);
  });
}

// scroll to up
function scroll(value) {
  window.scrollTo({
    top: value,
    behavior: 'smooth'
  });
};

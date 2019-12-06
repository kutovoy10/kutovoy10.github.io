// ===== ANIMATION =====

AOS.init({
	disable: function () {
		var maxWidth = 1200;
		return window.innerWidth < maxWidth;
	},
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,

	offset: 100,
	delay: 0,
	duration: 800,
	easing: 'ease',
	once: true,
	mirror: false,
	anchorPlacement: 'top-bottom'
})

// ===== OPEN/CLOSE BLOCK =====

let dropdown = document.querySelector('.dropdown');
let btnDropDown = document.querySelector('.btn-dropdown');
let btnDropDownClose = document.querySelector('.btn-close');

btnDropDown.addEventListener('click', addClass);
btnDropDownClose.addEventListener('click', addClass);

function addClass() {
	dropdown.classList.toggle('active');
	btnDropDown.classList.toggle('btn-rotate');
}

// ===== SCROLL TO TOP =====

let btnScrollToTop = document.querySelector('.button-scrollUp');

// click event
btnScrollToTop.addEventListener('click', scrollToTop);

// when scrolling button hides/appears
window.onscroll = () => (window.pageYOffset >= 150) ? btnScrollToTop.style.display = 'flex' : btnScrollToTop.style.display = 'none';

// scroll to up
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

// ===== MODAL =====

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let btnModalClose = document.querySelectorAll('.modal__close');
let btnModalOpen = document.querySelectorAll('.header__button');


for (let elemClose of btnModalClose) {
	elemClose.addEventListener('click', AddRemoveClass);
}
for (let elemOpen of btnModalOpen) {
	elemOpen.addEventListener('click', AddRemoveClass);
}

function AddRemoveClass() {
	overlay.classList.toggle('overlay-active');
	modal.classList.toggle('modal-active');

	if (overlay.classList.contains('overlay-active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}
}

// ===== BURGER MENU =====

let btnMenu = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__overlay');

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('active-menu');
	menu.classList.toggle('active-menu');
})

window.addEventListener('scroll', function () {
	if (menu.classList.contains('active-menu') == false && window.pageYOffset >= 50) {
		btnMenu.classList.add('active-without-menu');
	} else {
		btnMenu.classList.remove('active-without-menu');
	}
})
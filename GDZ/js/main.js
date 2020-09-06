// SEARCH (проверка общего поиска на пустоту)

let inputSearch = document.querySelector('.search__all');
let btnSearch = document.querySelector('.search__btn');

btnSearch.addEventListener('click', () => {

	let str = inputSearch.value;

	if (str === '') {
		return true;
	} else if (str.trim() != '') {
		return false;
	} else {
		return false;
	}
});

// burger menu

function burgerMenuSize() {
	if ($(window).width() <= '768') {

		let burgerMenuBtn = document.querySelector('.header__burger-btn');
		let burgerMenu = document.querySelector('.header .nav');

		burgerMenuBtn.addEventListener('click', () => {
			burgerMenu.classList.toggle('burger-menu-active');
			$(".header__burger-btn").toggleClass('header__burger-btn-active');
		});

		let navSubject = document.querySelector('.nav__subject');
		let navSubjectBlockImg = document.querySelector('.nav__subject-img-rotate');
		let navClass = document.querySelector('.nav__class');
		let navClassBlockImg = document.querySelector('.nav__class-img-rotate');

		navSubject.addEventListener('click', () => {
			navSubjectBlockImg.classList.toggle('nav-subject-active-img');
		});

		navClass.addEventListener('click', () => {
			navClassBlockImg.classList.toggle('nav-class-active-img');
		});

		$(".nav__subject").click(function () {
			$(".nav__subject-block").slideToggle(500);
		});

		$(".nav__class").click(function () {
			$(".nav__class-block").slideToggle(500);
		});

	};
};

$(window).on('load resize', burgerMenuSize);

// search header

function windowSizeSearch() {
	if ($(window).width() <= '768') {
		$(".header-search").click(function () {
			$(".search__all").toggleClass('search-active');
			$(".header__logo").toggleClass('hide-logo');
		});
	};
};

$(window).on('load resize', windowSizeSearch);

// search

// window.addEventListener("resize", function () {
// 	if (window.matchMedia("(max-width: 768px)").matches) {
// 		let searchBtn = document.querySelector('.header-search');
// 		let logo = document.querySelector('.header__logo');

// 		searchBtn.addEventListener('click', () => {
// 			inputSearch.classList.toggle('search-active');
// 			logo.classList.toggle('hide');
// 		});
// 	}
// });


// main-table

// function windowSize() {
// 	if ($(window).width() <= '768') {
// 		$(".table__lesson-rus").click(function () {
// 			$(".select-class__block-class-rus").slideToggle(500);
// 			$(".table__lesson-rus .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-math").click(function () {
// 			$(".select-class__block-class-math").slideToggle(500);
// 			$(".table__lesson-math .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-geogr").click(function () {
// 			$(".select-class__block-class-geogr").slideToggle(500);
// 			$(".table__lesson-geogr .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-biolog").click(function () {
// 			$(".select-class__block-class-biolog").slideToggle(500);
// 			$(".table__lesson-biolog .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-history").click(function () {
// 			$(".select-class__block-class-history").slideToggle(500);
// 			$(".table__lesson-history .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-algebra").click(function () {
// 			$(".select-class__block-class-algebra").slideToggle(500);
// 			$(".table__lesson-algebra .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-physyc").click(function () {
// 			$(".select-class__block-class-physyc").slideToggle(500);
// 			$(".table__lesson-physyc .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-chem").click(function () {
// 			$(".select-class__block-class-chem").slideToggle(500);
// 			$(".table__lesson-chem .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-geometry").click(function () {
// 			$(".select-class__block-class-geometry").slideToggle(500);
// 			$(".table__lesson-geometry .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-obshe").click(function () {
// 			$(".select-class__block-class-obshe").slideToggle(500);
// 			$(".table__lesson-obshe .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-english").click(function () {
// 			$(".select-class__block-class-english").slideToggle(500);
// 			$(".table__lesson-english .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-inf").click(function () {
// 			$(".select-class__block-class-inf").slideToggle(500);
// 			$(".table__lesson-inf .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-liter").click(function () {
// 			$(".select-class__block-class-liter").slideToggle(500);
// 			$(".table__lesson-liter .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-world").click(function () {
// 			$(".select-class__block-class-world").slideToggle(500);
// 			$(".table__lesson-world .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-germany").click(function () {
// 			$(".select-class__block-class-germany").slideToggle(500);
// 			$(".table__lesson-germany .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-franch").click(function () {
// 			$(".select-class__block-class-franch").slideToggle(500);
// 			$(".table__lesson-franch .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-ecology").click(function () {
// 			$(".select-class__block-class-ecology").slideToggle(500);
// 			$(".table__lesson-ecology .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-obzh").click(function () {
// 			$(".select-class__block-class-obzh").slideToggle(500);
// 			$(".table__lesson-obzh .arrow-right").toggleClass('rotate-90');
// 		});

// 		$(".table__lesson-tehnology").click(function () {
// 			$(".select-class__block-class-tehnology").slideToggle(500);
// 			$(".table__lesson-tehnology .arrow-right").toggleClass('rotate-90');
// 		});
// 	}
// }

// $(window).on('load resize', windowSize);

// Если элемент не активный, то удаляется ссылка (Для мэйна)

$('a.table__lesson-class:not(.table__lesson-class--active)').removeAttr('href');
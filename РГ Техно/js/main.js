$(function () {

	// modal

	let btn = document.querySelector('.btn');
	let close = document.querySelector('.modal__close');
	let modal = document.querySelector('.modal');
	let overflow = document.querySelector('.overflow');

	btn.addEventListener('click', function () {
		overflow.style.display = 'block';
		modal.style.display = 'block';
	})

	close.addEventListener('click', function () {
		overflow.style.display = 'none';
		modal.style.display = 'none';
	})

});
// ========== HIDE/SHOW ==========
let str = document.querySelector('.advantages__change');
let block = document.querySelector('.advantages__list');

str.addEventListener('click', function toggle() {
	block.style.display = (block.style.display == 'block') ? 'none' : 'block'
});
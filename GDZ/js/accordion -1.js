// if according-two < 2

let accordionTwo = document.querySelectorAll('.accordion-two');
let accordionListOne = document.querySelector('.accordion-list-one');

let a = 0;

for (let elem of accordionTwo) {
	a++;
	console.log('a');
}

if (a == 0) {
	// document.querySelector('.accordion-two').classList.add('active-element-two-block');
	accordionListOne.style.display = 'block';
	$(".accordion-one").click(function () {
		$(".accordion-list-one").slideToggle(500);
	});
}
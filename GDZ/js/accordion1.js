let accordionTwo = document.querySelectorAll('.accordion-two');
let accordionListOne = document.querySelector('.accordion-list-one');

let a = 0;

for (let elem of accordionTwo) {
	a++;
}

if (a == 0) {
	accordionListOne.style.display = "block";
	$(".accordion-one-block").click(function () {
		$(".accordion-list-one").slideToggle(500);
		$(".accordion .accordion-one .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});
}
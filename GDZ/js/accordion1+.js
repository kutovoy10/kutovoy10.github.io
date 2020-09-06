$(document).ready(function () {
	$(".accordion-one").click(function () {
		$(".accordion-two").slideToggle(500);
		$(".accordion-list").slideUp(500);
		$(".accordion-three").slideUp(500);
		$(".accordion-list-three-1").slideUp(500);
		$(".accordion .accordion-one .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});

	$(".accordion-two-1").click(function () {
		$(".accordion-list-two-1").slideToggle(500);
		$(".accordion .accordion-two-1 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});

	$(".accordion-two-2").click(function () {
		$(".accordion-three-1").slideToggle(500);
		$(".accordion-list-three-1").slideUp(500);
		$(".accordion .accordion-two-2 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});

	$(".accordion-two-3").click(function () {
		$(".accordion-list-two-2").slideToggle(500);
		$(".accordion .accordion-two-3 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});

	$(".accordion-three-1").click(function () {
		$(".accordion-list-three-1").slideToggle(500);
		$(".accordion .accordion-three-1 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
	});
});
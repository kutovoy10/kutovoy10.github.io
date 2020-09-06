// subject active

// let subjectBtn = document.querySelector('.subject-search__btn');
// let subjectList = document.querySelector('.select-subject');
// let arrowDownPink = document.querySelector('.arrow-down--pink');

// subjectBtn.addEventListener('click', () => {
// 	subjectList.classList.toggle('active');
// 	arrowDownPink.classList.toggle('arrow-down--active');
// });

$(".subject-search__btn").click(function () {
	$(".list-subject-search").slideToggle(500);
	$(".arrow-down--pink").toggleClass('arrow-down--active');
});
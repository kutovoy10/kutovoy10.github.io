document.querySelector('#search-accordion-input').oninput = function () {
	
	let list = document.querySelectorAll('.accordion-list');
	
	
	
	// let val = this.value.trim();
	// let list1 = document.querySelectorAll('.accordion-list__element-list-two-1');
	// let list2 = document.querySelectorAll('.accordion-list__element-3');
	// let list3 = document.querySelectorAll('.accordion-list__element-2');

	// let accordingTwoBlock1 = document.querySelector('.accordion-two-block-1');
	// let accordingListTwo1 = document.querySelector('.accordion-list-two-1');
	// let accordingTwoBlock2 = document.querySelector('.accordion-two-block-2');
	// let accordingTwoBlock3 = document.querySelector('.accordion-two-3');
	// let accordingListTwo2 = document.querySelector('.accordion-list-two-2');

	// let accordingThreeBlock1 = document.querySelector('.accordion-three-1');
	// let accordingListThree1 = document.querySelector('.accordion-list-three-1');

	// let accordingOneBlock1Img = document.querySelector('.accordion-one-block .arrow-down--dark');
	// let accordingTwoBlock1Img = document.querySelector('.accordion-two-1 .arrow-down--dark');
	// let accordingTwoBlock2Img = document.querySelector('.accordion-two-block-2 .arrow-down--dark');
	// let accordingTwoBlock3Img = document.querySelector('.accordion-two-block-3 .arrow-down--dark');
	// let accordingThreeBlock1Img = document.querySelector('.accordion-three-block-1 .arrow-down--dark');

	// list1
	// if (val != '') {
	// 	list1.forEach(function (elem) {
	// 		if (elem.innerHTML.search(val) == -1) {
	// 			elem.classList.add('hide');
	// 		} else {
	// 			elem.classList.remove('hide');
	// 		}
	// 	});
	// } else {
	// 	list1.forEach(function (elem) {
	// 		elem.classList.remove('hide');
	// 	});
	// }

	// const arrList1 = Array.from(list1);
	// const lisWithClass1 = arrList1.filter(elem => elem.classList.contains('hide'));

	// if (lisWithClass1.length) {
	// 	accordingTwoBlock1.classList.add('display-block');
	// 	accordingListTwo1.classList.add('display-block');
	// 	accordingOneBlock1Img.classList.add('arrow-down--dark__rotate');
	// 	accordingTwoBlock1Img.classList.add('arrow-down--dark__rotate');
	// } else {
	// 	accordingTwoBlock1.classList.remove('display-block');
	// 	accordingListTwo1.classList.remove('display-block');
	// 	accordingOneBlock1Img.classList.remove('arrow-down--dark__rotate');
	// 	accordingTwoBlock1Img.classList.remove('arrow-down--dark__rotate');
	// }


	// list2
	// if (val != '') {
	// 	list2.forEach(function (elem) {
	// 		if (elem.innerHTML.search(val) == -1) {
	// 			elem.classList.add('hide');
	// 		} else {
	// 			elem.classList.remove('hide');
	// 		}
	// 	});
	// } else {
	// 	list2.forEach(function (elem) {
	// 		elem.classList.remove('hide');
	// 	});
	// }

	// const arrList2 = Array.from(list2);
	// const lisWithClass2 = arrList2.filter(elem => elem.classList.contains('hide'));

	// if (lisWithClass2.length) {
	// 	accordingTwoBlock2.classList.add('display-block');
	// 	accordingThreeBlock1.classList.add('display-block');
	// 	accordingListThree1.classList.add('display-block');
	// 	accordingTwoBlock2Img.classList.add('arrow-down--dark__rotate');
	// 	accordingThreeBlock1Img.classList.add('arrow-down--dark__rotate');
	// } else {
	// 	accordingTwoBlock2.classList.remove('display-block');
	// 	accordingThreeBlock1.classList.remove('display-block');
	// 	accordingListThree1.classList.remove('display-block');
	// 	accordingTwoBlock2Img.classList.remove('arrow-down--dark__rotate');
	// 	accordingThreeBlock1Img.classList.remove('arrow-down--dark__rotate');
	// }

	// list3
	// if (val != '') {
	// 	list3.forEach(function (elem) {
	// 		if (elem.innerHTML.search(val) == -1) {
	// 			elem.classList.add('hide');
	// 		} else {
	// 			elem.classList.remove('hide');
	// 		}
	// 	});
	// } else {
	// 	list3.forEach(function (elem) {
	// 		elem.classList.remove('hide');
	// 	});
	// }

	// const arrList3 = Array.from(list2);
	// const lisWithClass3 = arrList3.filter(elem => elem.classList.contains('hide'));

	// if (lisWithClass3.length) {
	// 	accordingTwoBlock3.classList.add('display-block');
	// 	accordingListTwo2.classList.add('display-block');
	// 	accordingTwoBlock3Img.classList.add('arrow-down--dark__rotate');
	// } else {
	// 	accordingTwoBlock3.classList.remove('display-block');
	// 	accordingListTwo2.classList.remove('display-block');
	// 	accordingTwoBlock3Img.classList.remove('arrow-down--dark__rotate');
	// }
};

// task show/down

// $(document).ready(function () {
// 	$(".accordion-one").click(function () {
// 		$(".accordion-two").slideToggle(500);
// 		$(".accordion-list").slideUp(500);
// 		$(".accordion-three").slideUp(500);
// 		$(".accordion-list-three-1").slideUp(500);
// 		$(".accordion .accordion-one .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
// 	});

// 	$(".accordion-two-1").click(function () {
// 		$(".accordion-list-two-1").slideToggle(500);
// 		$(".accordion .accordion-two-1 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
// 	});

// 	$(".accordion-two-2").click(function () {
// 		$(".accordion-three-1").slideToggle(500);
// 		$(".accordion-list-three-1").slideUp(500);
// 		$(".accordion .accordion-two-2 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
// 	});

// 	$(".accordion-two-3").click(function () {
// 		$(".accordion-list-two-2").slideToggle(500);
// 		$(".accordion .accordion-two-3 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
// 	});

// 	$(".accordion-three-1").click(function () {
// 		$(".accordion-list-three-1").slideToggle(500);
// 		$(".accordion .accordion-three-1 .arrow-down--dark").toggleClass('arrow-down--dark__rotate');
// 	});
// });

// vertical/gorizontal view when > 3

let listElement = document.querySelectorAll('.accordion-list__element');

for (let a of listElement) {
	if (a.innerHTML.length >= 5) {
		for (let b of listElement) {
			b.classList.add('active');
		}
	}
}

// if according-two < 2

// let accordionTwo = document.querySelectorAll('.accordion-two');
// let accordionListOne = document.querySelector('.accordion-list-one');

// let a = 0;

// for (let elem of accordionTwo) {
// 	a++;
// 	console.log('a');
// }

// if (a == 0) {
// 	accordionListOne.style.display = "block";
// 	$(".accordion-one-block").click(function () {
// 		$(".accordion-list-one").slideToggle(500);
// 	});
// }
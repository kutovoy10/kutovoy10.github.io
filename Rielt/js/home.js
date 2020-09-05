let navOpenBtn = document.querySelector('.index-header .account__nav-media');
let navMenu = document.querySelector('.nav-media');
let navOverflow = document.querySelector('.nav-media__overflow');
let navCloseBtn = document.querySelector('.nav-media__close-btn');

let accountOpenBtn = document.querySelector('.index-header .account__account-icon');
let accountMenu = document.querySelector('.index-header .account-media');
let accountOverflow = document.querySelector('.account-media__overflow');
let accountCloseBtn = document.querySelector('.account-media__close-btn');

let mainOverflow = document.querySelector('.wrapper-all');

let overflowSelect = document.querySelector('.overflow-hidden-for-filters');
let selectBlockHide = document.querySelectorAll('.select');

// фильтры
let select = function () {
  let optionsHeader = document.querySelectorAll('.options__header'),
    optionsItem = document.querySelectorAll('.options__item');

  let costHeader = document.querySelectorAll('.cost__header'),
    costItem = document.querySelectorAll('.cost__item');

  let sizeFiltersHeader = document.querySelectorAll('.size-filters__header'),
    sizeFiltersItem = document.querySelectorAll('.size-filters__item');

  let sizeKitchenFiltersHeader = document.querySelectorAll('.size-kitchen-filters__header'),
    sizeKitchenFiltersItem = document.querySelectorAll('.size-kitchen-filters__item');

  let priceFiltersHeader = document.querySelectorAll('.price-filters__header'),
    priceFiltersItem = document.querySelectorAll('.price-filters__item');

  let heightFiltersHeader = document.querySelectorAll('.height-filters__header'),
    heightFiltersItem = document.querySelectorAll('.height-filters__item');
  priceFiltersItem = document.querySelectorAll('.price-filters__item');

  let floorFiltersHeader = document.querySelectorAll('.floor-filters__header'),
    floorFiltersItem = document.querySelectorAll('.floor-filters__item');

  let yearFiltersHeader = document.querySelectorAll('.year-filters__header'),
    yearFiltersItem = document.querySelectorAll('.year-filters__item');

  let accountHeader = document.querySelectorAll('.account-block__header'),
    accountFiltersItem = document.querySelectorAll('.account-block__item');




  // При начатии выпадает список

  function dropList(elem) {
    elem.forEach(item => {
      item.addEventListener('click', function () {
        this.parentElement.classList.add('is-active');
        overflowSelect.style.display = 'block';
      })
    })
  }

  /* document.addEventListener('click', () => {
    let a = document.querySelector('.options.select');

    document.addEventListener('click', e => {
      const target = e.target;
      let b = document.querySelector('.options__header');

      if (target !== a) {
        // a.classList.remove('is-active');
        b.parentElement.classList.remove('is-active');
      }
    });
  }); */

  // При нажатии на элемент он заменяет текст в селекте

  function currentText(elem, elemen, element) {
    elem.forEach(item => {
      item.addEventListener('click', function () {
        let text = this.innerText,
          select = this.closest(elemen),
          currentText = this.closest(elemen).querySelector(element);
        currentText.innerText = text;
        select.classList.remove('is-active');
        overflowSelect.style.display = 'none';
        overflowBlockInFilters.style.display = 'none';
      })
    })
  }

  // currentText
  currentText(optionsItem, '.options', '.options__current');
  currentText(costItem, '.cost', '.cost__current');
  currentText(accountFiltersItem, '.account-block', '.account-block__current');

  currentText(sizeFiltersItem, '.size-filters', '.size-filters__current');
  currentText(sizeKitchenFiltersItem, '.size-kitchen-filters', '.size-kitchen-filters__current');
  currentText(priceFiltersItem, '.price-filters', '.price-filters__current');
  currentText(heightFiltersItem, '.height-filters', '.height-filters__current');
  currentText(floorFiltersItem, '.floor-filters', '.floor-filters__current');
  currentText(yearFiltersItem, '.year-filters', '.year-filters__current');

  // dropList
  dropList(optionsHeader);
  dropList(costHeader);
  dropList(accountHeader);

  dropList(sizeFiltersHeader);
  dropList(sizeKitchenFiltersHeader);
  dropList(priceFiltersHeader);
  dropList(heightFiltersHeader);
  dropList(floorFiltersHeader);
  dropList(yearFiltersHeader);


};

select();


// Чекбоксы и радио-кнопки

$(function () {

  $('input.wc').styler();
  $('input.new').styler();

});


// nav-media

navOpenBtn.addEventListener('click', () => {
  navMenu.classList.add('nav-active');
  navOverflow.classList.add('nav-active');
  mainOverflow.style.overflowY = 'hidden';
})

navCloseBtn.addEventListener('click', () => {
  navMenu.classList.remove('nav-active');
  navOverflow.classList.remove('nav-active');
  mainOverflow.style.overflowY = 'unset';
})

navOverflow.addEventListener('click', () => {
  navMenu.classList.remove('nav-active');
  navOverflow.classList.remove('nav-active');
  mainOverflow.style.overflowY = 'unset';
})

// nav account media

accountOpenBtn.addEventListener('click', () => {
  accountMenu.classList.add('account-active');
  accountOverflow.classList.add('account-active');
  mainOverflow.style.overflowY = 'hidden';
})

accountCloseBtn.addEventListener('click', () => {
  accountMenu.classList.remove('account-active');
  accountOverflow.classList.remove('account-active');
  mainOverflow.style.overflowY = 'unset';
})

accountOverflow.addEventListener('click', () => {
  accountMenu.classList.remove('account-active');
  accountOverflow.classList.remove('account-active');
  mainOverflow.style.overflowY = 'unset';
})

// скрытие фильтров

function hideSelect(elem) {
  elem.forEach(item => {
    overflowSelect.addEventListener('click', () => {
      item.classList.remove('is-active');
      overflowSelect.style.display = 'none';
    })
  })
}

hideSelect(selectBlockHide);
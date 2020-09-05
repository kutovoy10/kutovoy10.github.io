  let switchBtn = document.querySelector('.switch-btn');
  let a = document.querySelector('.information-block');
  let b = document.querySelector('.map-block');
  let c = document.querySelector('.main-apartment');
  let blockChange = document.querySelectorAll('.apartment__card-block.card');

  let modalFiltersBlock = document.querySelector('.more-filters__header'),
    modalFiltersBtnOpen = document.querySelector('.modal-filters'),
    modalFiltersBtnClose = document.querySelector('.modal-filters__btn'),
    modalFiltersModal = document.querySelector('.more-filters__modal.modal-filters');

  let overflowSelectMoreFilters = document.querySelector('.overflow-hidden-for-filters');

  let btnFilterMedia = document.querySelector('.media-btn-both__filters');
  let filterOne = document.querySelector('.other-header .filters .more-filters .modal-filters');
  let filterTwo = document.querySelector('.other-header .filters .cost.select');
  let filterThree = document.querySelector('.other-header .filters .city.select');
  let filterFor = document.querySelector('.other-header .filters .options.select');
  let btnCloseFilterMedia = document.querySelector('.btn-close-filter');
  let blockHide = document.querySelector('.main-apartment');

  // появления карты при нажатии на переключатель

  switchBtn.addEventListener('click', () => {
    a.classList.toggle('half');
    b.classList.toggle('map-block_active');
    c.classList.toggle('main-apartment_active');

    for (let elem of blockChange) {
      elem.classList.toggle('active-block-map');
    }
  })

  // Скрываем/показываем блок фильтров

  modalFiltersBlock.addEventListener('click', () => {
    modalFiltersBtnOpen.classList.add('active-filter');
    overflowSelectMoreFilters.style.display = 'block';
  })

  modalFiltersBtnClose.addEventListener('click', () => {
    modalFiltersBtnOpen.classList.remove('active-filter');
    overflowSelectMoreFilters.style.display = 'none';
  })

  overflowSelectMoreFilters.addEventListener('click', () => {
    modalFiltersModal.classList.remove('active-filter');
  })

  // Переключатель 

  $('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
  });

  btnFilterMedia.addEventListener('click', () => {
    filterOne.style.display = 'block';
    filterTwo.style.display = 'block';
    filterThree.style.display = 'block';
    filterFor.style.display = 'block';
    blockHide.style.display = 'none';
  })

  btnCloseFilterMedia.addEventListener('click', () => {
    filterOne.style.display = 'none';
    filterTwo.style.display = 'none';
    filterThree.style.display = 'none';
    filterFor.style.display = 'none';
    blockHide.style.display = 'block';
  })

  // скрытие фильтров при нажатии вне блока

  let sizeFilterHeader = document.querySelector('.size-filters__header');
  let sizeKitchenFilterHeader = document.querySelector('.size-kitchen-filters');
  let priceFilterHeader = document.querySelector('.price-filters');
  let heightFilterHeader = document.querySelector('.height-filters');
  let floorFilterHeader = document.querySelector('.floor-filters');
  let yearFilterHeader = document.querySelector('.year-filters');

  function hideSelectInMoreFilters(btn) {
    btn.addEventListener('click', () => {
      overflowBlockInFilters.style.display = 'block';
    })
  }

  hideSelectInMoreFilters(sizeFilterHeader);
  hideSelectInMoreFilters(sizeKitchenFilterHeader);
  hideSelectInMoreFilters(priceFilterHeader);
  hideSelectInMoreFilters(heightFilterHeader);
  hideSelectInMoreFilters(floorFilterHeader);
  hideSelectInMoreFilters(yearFilterHeader);


  let selectBlockForApps = document.querySelectorAll('.select');
  let overflowBlockInFilters = document.querySelector('.overflow-hidden-for-filters__in-more-filters');

  function hideSelectMoreFilters(elem) {
    elem.forEach(item => {
      overflowBlockInFilters.addEventListener('click', () => {
        item.classList.remove('is-active');
        overflowBlockInFilters.style.display = 'none';
      })
    })
  }

  hideSelectMoreFilters(selectBlockForApps);
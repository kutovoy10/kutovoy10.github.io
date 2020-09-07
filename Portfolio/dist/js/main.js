// $(function () {

// tab
let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  })

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');

    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }
};

tab();

// modal in portfolio

let modal = function () {
  let btnPortfolio = document.querySelectorAll('.btn-multipage'),
    closeBtnPortfolio = document.querySelectorAll('.close'),
    overflowPortfolio = document.querySelectorAll('.overflow');

  btnPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      item.nextElementSibling.classList.add('modal-active');
    })
  })

  closeBtnPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
      item.parentElement.parentElement.classList.remove('modal-active');
    })
  })

  overflowPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
      item.parentElement.classList.remove('modal-active');
    })
  })
}

modal();

// slide sections

let pageSlide = function () {
  let nav = document.querySelectorAll('.menu__list-item'),
    section = document.querySelectorAll('.section'),
    navName;

  nav.forEach(item => {
    item.addEventListener('click', selectSection);
  })

  function selectSection() {
    nav.forEach(item => {
      item.classList.remove('menu__list-item_active');
    });
    this.classList.add('menu__list-item_active');

    navName = this.getAttribute('data-nav-name');
    selectTabContent(navName);
  }

  function selectTabContent(navName) {
    section.forEach(item => {
      item.classList.contains(navName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }
};

pageSlide();

// });
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

// 

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

// });
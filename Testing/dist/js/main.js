new fullpage('#fullpage', {
  anchors: ['firstPage', 'lastPage'],
  menu: '.header__nav',
  responsiveWidth: 1025
});

let burgerBlock = document.querySelector('.make__burger-img');
let burgerBlockImg = document.querySelector('.make__burger-block');
let price = document.querySelector('.make__price .price');

let kcal = document.querySelector('.kcal span');
let time = document.querySelector('.time span');
let gramm = document.querySelector('.weight span');

let makeOffer = document.querySelector('.make__offer');
let bonus = document.querySelector('.bonus');

let parallaxBlock = document.querySelector('.discover__demo');

let zIndexValue = 1;

// object ingredients DATA
const infoIngredients = {
  'cutlet': {
    'price': 2,
    'calories': 12,
    'time': 6,
    'gramm': 7,
    'quantity': 0,
    'img': './img/burger-components/cutlet.png'
  },
  'sause': {
    'price': 0.2,
    'calories': 12,
    'time': 6,
    'gramm': 7,
    'quantity': 0,
    'img': './img/burger-components/sauce.png'
  },
  'onion': {
    'price': 0.2,
    'calories': 12,
    'time': 6,
    'gramm': 7,
    'quantity': 0,
    'img': './img/burger-components/onion.png'
  },
  'tomato': {
    'price': 0.2,
    'calories': 12,
    'time': 6,
    'gramm': 7,
    'quantity': 0,
    'img': './img/burger-components/tomatoes.png'
  },
  'cucumber': {
    'price': 0.2,
    'calories': 8,
    'time': 5,
    'gramm': 4,
    'quantity': 0,
    'img': './img/burger-components/cucumber.png'
  },
  'cheese': {
    'price': 1,
    'calories': 8,
    'time': 5,
    'gramm': 4,
    'quantity': 0,
    'img': './img/burger-components/cheese.png'
  },
  'salad': {
    'price': 1,
    'calories': 8,
    'time': 5,
    'gramm': 4,
    'quantity': 0,
    'img': './img/burger-components/salad.png'
  },
  'bunUp': {
    'price': 1,
    'calories': 8,
    'time': 5,
    'gramm': 4,
    'quantity': 0,
    'img': './img/burger-components/bun-up.png'
  },
}

// order data DATA
let orderData = {};

// create element 
const createElement = (ingredient, className) => {
  let img = document.createElement('img');
  img.className = className;
  img.src = infoIngredients[ingredient].img;
  img.style.marginBottom = '-50' + 'px';
  img.style.zIndex = zIndexValue;
  burgerBlockImg.prepend(img);

  zIndexValue += 1;
}

// delete element 
const deleteElement = (className) => {
  let elementDelete = document.querySelectorAll(className);
  elementDelete[0].remove();
}

// check burger height
const checkBurgerHeight = () => {
  let sure = document.querySelector('.sure');
  let widthDocument = document.documentElement.clientWidth;

  if (widthDocument > 650) {
    if (burgerBlockImg.clientHeight > 595) {
      sure.classList.add('sure-active');
    } else {
      sure.classList.remove('sure-active');
    }
  } else if (widthDocument < 650 || widthDocument > 475) {
    if (burgerBlockImg.clientHeight > 300) {
      sure.classList.add('sure-active');
    } else {
      sure.classList.remove('sure-active');
    }
  }
}

// check for quantity bun-up and >=2 - change on middle || change order btn color
const checkQuantityBunUp = () => {
  let blockChildren = burgerBlockImg.children;

  let arr = [];
  let arrLengthWithClass = [];

  let orderButton = document.querySelector('.order .order__btn');

  for (let i = 0; i < blockChildren.length; i++) {
    arr[i] = blockChildren[i].className;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'bun-up-img') {
      arrLengthWithClass.push(arr[i]);
    }
  }

  if (arrLengthWithClass.length >= 2) {
    let allImgBunUp = document.querySelectorAll('.make__burger-block > .bun-up-img');
    for (let elem of allImgBunUp) {
      elem.src = './img/burger-components/bun-middle.png';
    }

    if (blockChildren[0].className == 'bun-up-img') {
      blockChildren[0].src = './img/burger-components/bun-up.png';
    }
  }

  if (arr.length > 2) {
    orderButton.style.background = '#BE2B20';
    orderButton.classList.add('active-btn');
  } else if (arr.length <= 2) {
    orderButton.style.background = '#F5F5FF';
    orderButton.classList.remove('active-btn');
  }
}

// change priceBurger and other information
const priceBurger = () => {
  let btnPlus = document.querySelectorAll('.plus');
  let btnMinus = document.querySelectorAll('.minus');
  let priceCount = 0,
    kcalCount = 50,
    timeCount = 0,
    grammCount = 20;

  btnPlus.forEach(item => {
    item.addEventListener('click', e => {
      let target = e.target;
      let orderQuantity = target.previousElementSibling;

      // change info in blocks PLUS
      const btnPlusRenderInfo = (ingredient, classNameImg) => {
        priceCount += infoIngredients[ingredient].price;
        price.innerHTML = `$${priceCount.toFixed(2)}`; // округляем к формату "0.00"

        let orderQuantityCount = infoIngredients[ingredient].quantity += 1;
        orderQuantity.innerHTML = orderQuantityCount;

        // chek btn for quantity active/noactive
        if (orderQuantityCount > 0) {
          let targetBlock = e.target.closest('.order__product-quantity');
          targetBlock.children[0].classList.add('hide');
          targetBlock.children[1].classList.add('active');
        }

        kcalCount += infoIngredients[ingredient].calories;
        kcal.innerHTML = kcalCount + ' kcal';

        timeCount += infoIngredients[ingredient].time;
        time.innerHTML = timeCount + ' min';

        grammCount += infoIngredients[ingredient].gramm;
        gramm.innerHTML = grammCount + ' g';

        // write data in object for FORM
        orderData[ingredient] = {};
        orderData[ingredient].price = infoIngredients[ingredient].price;
        orderData[ingredient].quantity = orderQuantityCount;

        createElement(ingredient, classNameImg);
        checkBurgerHeight();
        checkQuantityBunUp();
      }

      if (target.classList.contains('cutlet')) {
        btnPlusRenderInfo('cutlet', 'cutlet-img');
      } else if (target.classList.contains('sause')) {
        btnPlusRenderInfo('sause', 'sause-img');
      } else if (target.classList.contains('onion')) {
        btnPlusRenderInfo('onion', 'onion-img');
      } else if (target.classList.contains('tomato')) {
        btnPlusRenderInfo('tomato', 'tomato-img');
      } else if (target.classList.contains('cucumber')) {
        btnPlusRenderInfo('cucumber', 'cucumber-img');
      } else if (target.classList.contains('cheese')) {
        btnPlusRenderInfo('cheese', 'cheese-img');
      } else if (target.classList.contains('salad')) {
        btnPlusRenderInfo('salad', 'salad-img');
      } else if (target.classList.contains('bun-up')) {
        btnPlusRenderInfo('bunUp', 'bun-up-img');
      }
      // if price > 5 => bonus
      if (priceCount > 5) {
        makeOffer.style.display = 'none';
        bonus.style.display = 'flex';
      }
    })
  })

  btnMinus.forEach(item => {
    item.addEventListener('click', e => {
      let target = e.target;
      let orderQuantity = target.nextElementSibling;

      // change info in blocks MINUS
      const btnMinusRenderInfo = (ingredient, classNameImg) => {

        priceCount -= infoIngredients[ingredient].price;
        price.innerHTML = `$${priceCount.toFixed(2)}`; // округляем к формату "0.00"

        let orderQuantityCount = infoIngredients[ingredient].quantity -= 1;
        orderQuantity.innerHTML = orderQuantityCount;

        // chek btn for quantity active/noactive
        if (orderQuantityCount <= 0) {
          let targetBlock = e.target.closest('.order__product-quantity');
          targetBlock.children[0].classList.remove('hide');
          targetBlock.children[1].classList.remove('active');
        }

        kcalCount -= infoIngredients[ingredient].calories;
        kcal.innerHTML = kcalCount + ' kcal';

        timeCount -= infoIngredients[ingredient].time;
        time.innerHTML = timeCount + ' min';

        grammCount -= infoIngredients[ingredient].gramm;
        gramm.innerHTML = grammCount + ' g';

        // write data in object for FORM
        orderData[ingredient] = {};
        orderData[ingredient].price = infoIngredients[ingredient].price;
        orderData[ingredient].quantity = orderQuantityCount;

        deleteElement(classNameImg);
        checkBurgerHeight();
        checkQuantityBunUp();
      }

      if (target.classList.contains('cutlet')) {
        btnMinusRenderInfo('cutlet', '.make__burger-img > .make__burger-block > .cutlet-img');
      } else if (target.classList.contains('sause')) {
        btnMinusRenderInfo('sause', '.make__burger-img > .make__burger-block > .sause-img')
      } else if (target.classList.contains('onion')) {
        btnMinusRenderInfo('onion', '.make__burger-img > .make__burger-block > .onion-img')
      } else if (target.classList.contains('tomato')) {
        btnMinusRenderInfo('tomato', '.make__burger-img > .make__burger-block > .tomato-img')
      } else if (target.classList.contains('cucumber')) {
        btnMinusRenderInfo('cucumber', '.make__burger-img > .make__burger-block > .cucumber-img')
      } else if (target.classList.contains('cheese')) {
        btnMinusRenderInfo('cheese', '.make__burger-img > .make__burger-block > .cheese-img')
      } else if (target.classList.contains('salad')) {
        btnMinusRenderInfo('salad', '.make__burger-img > .make__burger-block > .salad-img')
      } else if (target.classList.contains('bun-up')) {
        btnMinusRenderInfo('bunUp', '.make__burger-img > .make__burger-block > .bun-up-img')
      }

      // // if price < 5 => bonus hide
      if (priceCount < 5) {
        makeOffer.style.display = 'block';
        bonus.style.display = 'none';
      }
    })
  })
}

// modal order
const modalOrder = () => {
  let modal = document.querySelector('.orderPopUp');
  let btnOpen = document.querySelector('.order__btn');
  let btnClose = document.querySelector('.orderPopUp .close');
  let btnOrderSubmit = document.querySelector('.form button');

  btnOpen.addEventListener('click', () => modal.style.display = 'block')
  btnClose.addEventListener('click', () => modal.style.display = 'none')
  btnOrderSubmit.addEventListener('click', () => modal.style.display = 'none')
}

// parallax 
const parallax = (event) => {
  let bunDownParallax = document.querySelector('.container-parallax > .bun-down');
  let cutletParallax = document.querySelector('.container-parallax > .cutlet');
  let sauceParallax = document.querySelector('.container-parallax > .sauce');
  let saladParallax = document.querySelector('.container-parallax > .salad');
  let cheeseParallax = document.querySelector('.container-parallax > .cheese');
  let cucumberParallax = document.querySelector('.container-parallax > .cucumber');
  let bunUpParallax = document.querySelector('.container-parallax > .bun-up');

  const translateElem = (elem) => {
    elem.style.transform = `translateX(${event.clientX*elem.getAttribute('data-speed')/1000}px)`;
  }

  translateElem(bunDownParallax);
  translateElem(cutletParallax);
  translateElem(sauceParallax);
  translateElem(saladParallax);
  translateElem(cheeseParallax);
  translateElem(cucumberParallax);
  translateElem(bunUpParallax);
}

if (document.documentElement.clientWidth > 650) {
  parallaxBlock.addEventListener('mousemove', parallax);
}

// media-nav
const mediaNav = () => {
  let btnOpen = document.querySelector('.btn-media-nav .open');
  let btnClose = document.querySelector('.btn-media-nav .close');
  let modalNav = document.querySelector('.header-media .menu-block');
  let navBlock = document.querySelectorAll('.menu-block__nav > ul > li');

  navBlock.forEach(elem => {
    elem.addEventListener('click', () => {
      modalNav.style.marginTop = '-1366px';
      btnOpen.style.display = 'block';
      btnClose.style.display = 'none';
    })
  });

  btnOpen.addEventListener('click', () => {
    modalNav.style.marginTop = '0';
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
  })

  btnClose.addEventListener('click', () => {
    modalNav.style.marginTop = '-1366px';
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
  })
}

// POST
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  })

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
  }

  return await response.json()
}

const sendCart = () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    // formData.set('order', JSON.stringify(data));

    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }

    data.order = orderData;

    sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
      .then(() => {
        form.reset();
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

sendCart();
priceBurger();
modalOrder();
mediaNav();
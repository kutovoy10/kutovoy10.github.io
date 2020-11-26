const navMedia = () => {
  let btn = document.querySelector('.media-btn');
  let nav = document.querySelector('.header__right');

  btn.addEventListener('click', () => {
    btn.classList.toggle('media-btn__close');
    nav.classList.toggle('nav-active');
  });
};

navMedia();
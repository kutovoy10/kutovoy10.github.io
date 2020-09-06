// accordeon
(function () {
  let item = $('.js-accord-item'),
    head = $('.js-accord-head'),
    body = $('.js-accord-body');
  head.on('click', function () {
    let thisHead = $(this);
    thisHead.parent().toggleClass('active');
    thisHead.parent().find('> .js-accord-body').slideToggle();
  });
})();

// placeholder
$('input, textarea').each(function () {
  let placeholder = $(this).attr('placeholder');
  $(this).focus(function () {
    $(this).attr('placeholder', '');
  });
  $(this).focusout(function () {
    $(this).attr('placeholder', placeholder);
  });
});

$("[data-fancybox]").fancybox({
  clickContent: false
});

// global search
$('.header__search').on('submit', function (event) {
  var query = $.trim($('.header__input').val());

  if (query === '') {
    event.preventDefault();
  }
});

// search book
$('.search__input').on('input', function () {
  $('.js-accord-item').removeClass('active');
  $('.js-accord-body').removeAttr('style');
  $('.accord__list > li').css({
    display: 'list-item'
  });

  var query = $.trim($(this).val()).toLowerCase();

  if (query !== '') {
    $('.accord .accord__number').each(function () {
      var name = $.trim($(this).html()).toLowerCase();

      if (name.includes(query)) {
        $(this).parents('.js-accord-body').each(function () {
          $(this).css({
            display: 'block'
          });

          if (!$(this).closest('.js-accord-item').hasClass('active')) {
            $(this).closest('.js-accord-item').addClass('active');
          }
        });
        $(this).parent().css({
          display: 'list-item'
        });
      } else {
        $(this).parent().css({
          display: 'none'
        });
      }
    });
  }
});

// > 3 symbol
let listElement = document.querySelectorAll('.accord__number');

for (let a of listElement) {
  if (a.innerHTML.length >= 3) {
    for (let b of listElement) {
      b.classList.add('element-active');
    }
  }
}
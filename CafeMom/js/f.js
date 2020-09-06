$(document).ready(function(){   

	var mobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) mobile = true;
	if(mobile==true){$('html').addClass('js-mobile')}else{$('html').addClass('not-mobile')}			

  $('#nav-icon').click(function(){
    $('body').toggleClass('js-open');
  });

  $('.toggle').click(function(e){
    e.preventDefault();
    $(this).parent('.concurs-inner').find('.flex-box').toggleClass('js-expand');
    $(this).text($(this).text() == 'Показать' ? 'Скрыть' : 'Показать');
  });   

  $('.srch-btn').fancybox({            
    baseClass: "fancy-srch",
    btnTpl : {
      smallBtn : '<div data-fancybox-close class="fancybox-close-small modal-close">&times;</div>'
    }
  });

  if ($(window).width() > 991) {      
    $('.drop-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendArrows: '.drop-nav',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',    
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4        
        }
      },
      {
        breakpoint: 1024,
        settings: "unslick"
      }      
    ]
    });   
  }          

  window.addEventListener("orientationchange", function() {
      
      $('.drop-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendArrows: '.drop-nav',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',    
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4        
        }
      }      
    ]
    });   

  }, false);

  $('.main-nav .drop-box > a').click(function(e){
    e.preventDefault();
    $(this).parent('.drop-box').toggleClass('js-open');
    $('.drop-slider').slick("setPosition", 0);
  })

  if ($(window).width() > 767){
    /*$(".not-mobile .side-rht .banner").stick_in_parent();*/    
  }    

  $(".user-panel").stick_in_parent({
    offset_top: 175
  });



	$('.carousel > ul').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.carousel-nav',
     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
  });	


  $('.topic-carousel > ul').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.topic-nav',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
  }); 

  $('.modal').on('shown.bs.modal', function (e) {
    $('.topic-carousel > ul').slick("setPosition", 0);
  })

  $('.blogs-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          dots: true
        }
      }      
    ]
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
	
});

// Модальное окно

// открыть по кнопке
$('.js-button').on("click", (function() {

  $('.js-overlay').fadeIn();
  $('.js-overlay').addClass('disabled');
}));

// закрыть на крестик
$('.js-close').click(function() {
  $('.js-overlay').fadeOut();

});

// закрыть по клику вне окна
$(document).on("mouseup", (function (e) {
  var popup = $('.js-popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay').fadeOut();

  }
}));

// my-slaider

$(".my-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<img src="img/arrow-left-slider-photo.png" class="prev">',
  nextArrow: '<img src="img/arrow-right-slider-photo.png" class="next">',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: 'true'
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: 'true'
      }
    }
  ]

});

// gallery-slaider

$('.main-slaider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.main-slaider-nav',
  prevArrow: '<div class="top-slaider-prev"></div>',
  nextArrow: '<div class="top-slaider-next"></div>'
});

$('.main-slaider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.main-slaider',
  dots: false,
  focusOnSelect: true,
  variableWidth: true,
  centerMode: 'true',
  centerPadding: '130px',
  prevArrow: '<div class="main-slaider-prev"></div>',
  nextArrow: '<div class="main-slaider-next"></div>'
});



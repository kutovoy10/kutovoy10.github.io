// Для фиксированного меню

	$(document).scroll (function () {
		if ($(document).scrollTop () > $('header').height () + 35)
			$('nav').addClass ('fixed');
		else
			$('nav').removeClass ('fixed');
	});

// Якоря с плавным переходом

	$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top + -50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// Меню для адаптации

$('#showMenu').click (function () {
	if ($('#mobileMenu').is(':visible'))
		$('#mobileMenu').hide ();
	else
		$('#mobileMenu').show ();
});

window.onresize = function (event) {
	$('#mobileMenu').hide ();
}

// if ($(document).width()>768) $('#fullpage.fp-enabled').fullpage();
// });
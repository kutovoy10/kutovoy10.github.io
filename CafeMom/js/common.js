$(document).ready(function() {

	// color for service-sidebar
		var pos = $('.services_sidebar .list li');
		var length = pos.length;
		for (var i = 0; i < length; i++) {
			var color = pos.eq(i).attr('data-color');
			pos.eq(i).find('a i').css('background-color', color);
		}
	// --

	// ABOUT US SLIDER

	$('.about-us_content_slider_main_container').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: '.about-us_content_slider_main_arrows',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',    
		// responsive: [
		// 	{
		// 		breakpoint: 1199,
		// 		settings: {
		// 			slidesToShow: 4        
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 1024,
		// 		settings: "unslick"
		// 	}      
		// ]
	});   
	// --

	// ADVERT STATISTIC
	var pos = $('.advert-statistic_content .position');
	var length = pos.length;
	for (var i = 0; i < length; i++) {
		var subPos = pos.eq(i).find('li');
		var subPosLength = subPos.length;
		for (var x = 0; x < subPosLength; x++) {
			var percentVal = subPos.eq(x).find('.number').text();
			percentVal = percentVal.replace('%', '');
			// percentVal = percentVal.replace('.', ',');
			percentVal = percentVal.replace(' ', '');
			if (percentVal < 20) {
				subPos.eq(x).addClass('low-percent')
				subPos.eq(x).find('.number').css('left', percentVal+'%')
			};
			subPos.eq(x).find('.scale').animate({'width': percentVal+'%'}, 1500)
		}
	}

	// --

	// SITEMAP TOGGLE

	var btn = $('.about-us_content_main_list li.has-child .circle');
	btn.click(function() {
		$(this).parent().toggleClass('open')
	});

	var btn = $('.about-us_content_main_list li.has-child .sub-circle');
	btn.click(function() {
		$(this).parent().toggleClass('open')
	});

	var btn = $('.about-us_content_main_list li.has-child .sub-sub-circle');
	btn.click(function() {
		$(this).parent().toggleClass('open')
	});

	// --


	// HOSPITALS FILTER

	btn = $('.hospitals_content_filter_city_dropdown .input-text');
	btn.on('focusin', function() {
		$(this).parents('.hospitals_content_filter_city_dropdown').addClass('open')
	});
	btn.on('focusout', function() {
		$(this).parents('.hospitals_content_filter_city_dropdown').removeClass('open')
	});

	var input = $('.hospitals_content_filter_city_dropdown .input-text');
	input.on('change, keyup', function() {
		var val = $(this).val();
		var list = $(this).parent().next();
		if (val.length >= 1) {
			list.find('li:not(:contains(' + val + '))').hide();
			list.find('li:contains(' + val + ')').show();
			if (list.find('li:contains(' + val + ')').length < 1) {
				list.find('li.empty').show();
			} else {
				list.find('li.empty').hide();
			}
		} else {
			list.find('li').show();
			list.find('li.empty').hide();
		}
	});

	btn = $('.hospitals_content_filter_city_dropdown .list li:not(.empty)');
	btn.click(function() {
		var val = $(this).text();
		$('.hospitals_content_filter_city_dropdown .input-text').val(val)
		$(this).parents('.hospitals_content_filter_city_dropdown').removeClass('open')
	});


	btn = $('.hospitals_content_filter_city_btn .btn_show-map');
	btn.click(function() {
		if ($(this).hasClass('closed')) {
			$(this).removeClass('closed').html('Показать карту <span class="arrow"></span>')
			$('.hospitals_content_filter_map_map').removeClass('close')
		} else {
			$(this).addClass('closed').html('Скрыть карту <span class="arrow"></span>')
			$('.hospitals_content_filter_map_map').addClass('close')
		}
	})

	// --

	// HOSP SLIDERS
	var slide = $('.hospitals_content_main .position'),
		length = slide.length;
	for (var i = 0; i < length; i++) {
		slide.eq(i).find('.position_img-big').addClass('slider-'+i);
		slide.eq(i).find('.position_img-sm').addClass('slider-'+i);
		slide.eq(i).addClass('slider-'+i);
		$('.hospitals_content_main .position_img-big.slider-'+i).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.hospitals_content_main .position_img-sm.slider-'+i
		});
		$('.hospitals_content_main .position_img-sm.slider-'+i).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.hospitals_content_main .position_img-big.slider-'+i,
			dots: false,
			arrows: true,
			focusOnSelect: true,
			appendArrows: $('.hospitals_content_main .position.slider-'+i+' .arrows'),
			prevArrow: '<button type="button" class="slick-prev"><i class="icon-keyboard_arrow_left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="icon-keyboard_arrow_right"></i></button>', 
		});
		// $('.hospitals_content_main position.slider-'+i+' .arrows').addClass('test')
	}
	// --
	// HOSP SCALE
	$('.hospitals_content_main .position_info_load .scale').each(function() {
		var per = $(this).find('.width').attr('data-width');
		$(this).find('.width').css({'width': per+'%'});
		if (per < 25) {
			$(this).find('.width').addClass('blue')
		} else if (per >= 25 && per < 75) {
			$(this).find('.width').addClass('green')
		} else if (per >= 75) {
			$(this).find('.width').addClass('red')
		}
	});
	// --

	// SHOW VIDEO INFORMERS
	// btn = $('.informers_content_usage');
	// btn.click(function() {
	// 	if ($('.informers_content_usage_main_preload').hasClass('close')) {
	// 		$(this).parent().removeClass('close');
	// 		$('.informers_content_usage_main_video').removeClass('open')
	// 	}
	// });
	btn = $('.informers_content_usage_main_preload img');
	btn.click(function() {
		$(this).parent().addClass('close');
		$('.informers_content_usage_main_video').addClass('open')
	});
	
	// --

	// SHOW VIDEO IN ALL VIDEOS
	btn = $('.video-modal .video-modal_close .close_btn');
	btn.click(function() {
		$(this).parents('.video-modal').removeClass('open')
	});

	btn = $('.video-modal .modal_overlay');
	btn.click(function() {
		$(this).parent().removeClass('open')
	});

	btn = $('.videos_content_main .position');
	btn.click(function() {
		$('#js_video-modal').addClass('open')
	});
	// --

	// ADD VIDEO MODAL OPEN CLOSE
	btn = $('.video-add-modal .video-add-modal_close .close_btn');
	btn.click(function() {
		$(this).parents('.video-add-modal').removeClass('open')
	});

	btn = $('.video-add-modal .modal_overlay');
	btn.click(function() {
		$(this).parent().removeClass('open')
	});

	btn = $('.videos_content_adv_col .position.full .link');
	btn.click(function() {
		event.preventDefault();
		$('.video-add-modal').addClass('open')
	});
	// --

	// ADD VIDEO MODAL ADD POSITION
	btn = $('.video-add-modal .video-add-modal_form .files-container .position-add .add-position');
	btn.click(function() {
		var length = $('.video-add-modal .video-add-modal_form .files-container .position').length;
		if (length <= 3) {
			var html = $('.video-add-modal .video-add-modal_form .files-container .position:not(.added)').html();
			$(this).parent().before('<div class="position">'+html+'</div>');
		} else {
			var html = $('.video-add-modal .video-add-modal_form .files-container .position:not(.added)').html();
			$(this).parent().before('<div class="position">'+html+'</div>');
			btn.parent().addClass('hide')
		}
	});
	// --

	// open btn chose type of pregnant

	btn = $('.pens-calc_content_steps .step_info_type .__dropdown .btn_dropdown');
	btn.click(function() {
		$(this).parent().toggleClass('open')
	});

	btn = $('.pens-calc_content_steps .step_info_type .__dropdown .list li');
	btn.click(function() {
		var data = $(this).text();
		$(this).parents('.__dropdown').removeClass('open').find('.btn_dropdown').text(data)
	});

	// --



});
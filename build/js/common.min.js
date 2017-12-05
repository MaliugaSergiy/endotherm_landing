$(document).ready(function () {
	$('.slider_reviews .reviews').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});

$(".nano").nanoScroller({ 
	//scroll: 'bottom', //??? 
	//scrollTop: 50,
	//flash: true
	//sliderMinHeight: 100
});



$("#sharePopup").jsSocials({
	url: "http://endotherm.com.ua/",
	text: "Добавка в систему отопления",
	howLabel: true,
	shareIn: "popup",
	shares: [ "facebook", "twitter", "googleplus"],
	showCount: true,
	//showCount: "inside",
});



$(document).ready(function () {

//parallax tests

	$(window).on("scroll", function () {

		//background parallax  of section #start
		var sstart = $("#start"),
			overlay = $(".overlay1"),
			sheight = sstart.height(),
			winST = $(this).scrollTop();
		//sstart.css("background-position", " 50% " + (-winST / 20 + 50) + "%");
		overlay.css("opacity", winST / sheight + 0.08);

	});

	//behaviour of header by scrolling
	function headerBehaviour1() {

		$.scrollDetection = function (options) {
			var settings = $.extend({
				scrollDown: function () {
				},
				scrollUp: function () {
				}
			}, options);

			var scrollPosition = 0;
			$(window).scroll(function () {
				var cursorPosition = $(this).scrollTop();
				if (cursorPosition > scrollPosition) {
					settings.scrollDown();
				} else if (cursorPosition < scrollPosition) {
					settings.scrollUp();
				}
				scrollPosition = cursorPosition;
			});
		};

		var $header = $("header");
		$.scrollDetection({
			scrollDown: function () {
				$header.addClass("header_hidden");
			},
			scrollUp: function () {
				$header.removeClass("header_hidden");
			}
		});
	}

	headerBehaviour1();

	//WOW init
	new WOW().init();

	// slide and swipe menu init
	$('nav').slideAndSwipe();

	$(".ssm-toggle-nav").on("click", function () {
		$("body").toggleClass("body_OH");
	});

	//Form VAlidation

	$("#js_register_form").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlenhth: 10,
				digits: true
			},
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});
	$("#js_register_form2").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlenhth: 10,
				digits: true
			},
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});

	//phone input mask
	$("#form_phone, #form_phone2").mask("(999) 999-99-99");

	//add preloader of scrolling
	$("<div id='contPreloader'><div id='scrollPreload'></div></div>").prependTo($("body"));
	$(window).scroll(function () {
		var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
		$("#scrollPreload").width(ratio + "%");
	});

	// inner anchor-links
	$('a[data-target^="anchor"], [data-target^="anchor"] ').on("click.smoothscroll", function () {
		var target = $(this).attr("href"),
			bl_top = $(target).offset().top - 56;
		$('body, html').animate({
			scrollTop: bl_top
		}, 700);
		return false;
	});

	// button arrow to UP

	$("body").append("<button class='btn_up'/>");

	$(window).scroll(function () {
		var windscroll = $(window).scrollTop();
		if ($(window).scrollTop() > 50) {
			$(".btn_up").addClass("activeB");
		} else {
			$(".btn_up").removeClass("activeB");
		}

	});

	$(".btn_up").on("click", function (e) {
		e.preventDefault();
		$(this).removeClass("activeB");
		$("body").animate({
			'scrollTop': 0
		}, 800);
		$("html").animate({
			'scrollTop': 0
		}, 800);

	});


	// heightlite nav links by scrolling

	var $dataPos = $("[data-pos]").length;
	$(document).scroll(function () {

		for (let i=1; i < $dataPos; i++) {
			navigationAnchors(i);
		}
		function navigationAnchors(n) {
			if (($(`[data-pos='pos-${n}']`).offset().top - $(window).scrollTop()) - 300 < 0) {
				if (!$(`[data-pos='pos-${n}']`).next().offset().top - $(window).scrollTop() - 300 < 0) {
					$(`.main-navigation a.link-${n}`).parent().siblings().children().removeClass('activeNavLink');
					$(`.main-navigation a.link-${n}`).addClass('activeNavLink');
				} else {
					$(`.main-navigation a.link-${n}`).removeClass('activeNavLink');
				}
			} else {
				$(`.main-navigation a.link-${n}`).removeClass('activeNavLink');
			}
		}
	});
});

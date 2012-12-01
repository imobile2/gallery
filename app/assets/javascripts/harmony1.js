//= require jquery

$(window).load(function() {
	console.log($(".inpage-nav1-wrapper").offset().top);
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var pnav = $(".inpage-nav1-wrapper");
		var pnavTop = pnav.offset().top;
		var animT = 500;
		if (scrollTop > 514) {
			if (pnav.hasClass('fixed')) {
				pnav.removeClass("fixed").addClass('dock');
				$(".inpage-nav1-outter").removeClass('short-gray-bar').addClass('long-gray-bar');
				$(".main-nav").slideDown(animT);
			}
		} else {
			if (pnav.hasClass('dock')) {
				pnav.removeClass('dock').addClass('fixed');
				$(".inpage-nav1-outter").removeClass('long-gray-bar').addClass('short-gray-bar');
				$(".main-nav").slideUp(animT);
			}
		}
	});
});
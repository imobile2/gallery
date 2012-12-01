//= require jquery

$(window).load(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var pnav = $(".inpage-nav1-wrapper");
		var pnavTop = pnav.offset().top;
		var animT = 800;
		if (scrollTop > 514) {
			if (pnav.hasClass('fixed')) {
				pnav.removeClass("fixed").addClass('dock');
				$(".inpage-nav1-outter").removeClass('short-gray-bar').addClass('long-gray-bar');
				$('.cta1-outter').slideDown(animT);
			}
		} else {
			if (pnav.hasClass('dock')) {
				pnav.removeClass('dock').addClass('fixed');
				$(".inpage-nav1-outter").removeClass('long-gray-bar').addClass('short-gray-bar');
				$('.cta1-outter').slideUp(animT);
			}
		}
	});
	$(".inpage-nav1").on('click', '.nav-item', function(e) {
		e.preventDefault();
		var to = $("#" + $(this).attr('id').substr(3)).offset().top - 120;
		$('html,body').animate({scrollTop: to}, 800);
	})
});
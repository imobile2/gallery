//= require jquery

$(window).load(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var pnav = $("#pnav-wrapper");
	
		if (scrollTop > 570) {
			if (!pnav.hasClass('fixed'))	
				pnav.addClass('fixed');
		} else {
			if (pnav.hasClass('fixed'))
				pnav.removeClass('fixed');
		}
	});
	// scrolling to section
	$("#pnav").on('click', 'a', function(e) {
		e.preventDefault();
		var to = $($(this).attr('href')).offset().top - 100;
		$('body').animate({scrollTop: to}, 800);
	})
});
//= require jquery

$(window).load(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var navbar4 = $("#navbar4");
	
		if (scrollTop > $("#features").offset().top - 40) {
			if (!navbar4.hasClass('fixed1'))	
				navbar4.addClass('fixed1');
		} else {
			if (navbar4.hasClass('fixed1'))
				navbar4.removeClass('fixed1');
		}
	});
	// scrolling to section
	$("#navbar4").on('click', 'a', function(e) {
		e.preventDefault();
		var to = $($(this).attr('href')).offset().top - 80;
		$('body').animate({scrollTop: to}, 1000);
	})
});
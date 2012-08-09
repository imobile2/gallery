jQuery(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		
		var navbar1 = $("#navbar1");
		var navbar4 = $("#navbar4");
		// if (!navbar1.hasClass('navbar-fixed-top') && (scrollTop > navbar1.offset().top + parseInt(navbar1.css('height')))) {		
		if (scrollTop > 135) {	
			if (!navbar1.hasClass('navbar-fixed-top'))	
				navbar1.addClass('navbar-fixed-top');
		} else {
			if (navbar1.hasClass('navbar-fixed-top'))
				navbar1.removeClass('navbar-fixed-top');
		}

		if (scrollTop > 605) {
			if (!navbar4.hasClass('fixed2'))	
				navbar4.addClass('fixed2');
		} else {
			if (navbar4.hasClass('fixed2'))
				navbar4.removeClass('fixed2');
		}
		
		var dock = $("#dock");
		if (scrollTop > 880) {
			navbar1.fadeOut(500);
			navbar4.fadeOut(500);
			if (dock.hasClass('hide')) {
				// console.log($(window).scrollTop());
				dock.removeClass("hide");
				dock.addClass('show');
			}	
		} else {
			navbar1.fadeIn(500);
			navbar4.fadeIn(500);			
			if (dock.hasClass('show')) {
				dock.removeClass('show');
				dock.addClass('hide');
			}
		}
		
	});
	$("#dock").hover(function() {
		var dock = $(this);
		if (!dock.hasClass("expand")) {
			dock.addClass("expand");
		}
	}, 
	function() {
		$(this).removeClass("expand");
	});
});
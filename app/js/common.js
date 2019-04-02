$(function () {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function (event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	close.on('click', function (event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	$(".owl-one").owlCarousel({
		items: 4,
		nav: true,
		navText: "",
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 4
			}
		}
	});
	
});
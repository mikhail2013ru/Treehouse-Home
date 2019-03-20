/* $(function() {

	$('header').after('<div class="mobile-menu d-md-none">');
	$('.navigation-holder').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});

}); */

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
});

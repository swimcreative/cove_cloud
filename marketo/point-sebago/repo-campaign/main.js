(function () {
  // body of the function
	$(document).ready(function() {
	//	$('iframe').parent().fitVids();
	$('.menu-toggle').on('click', function() {
		if($(this).attr('aria-expanded') == 'true') {
			$('nav').css('display','none');
			$(this).attr('aria-expanded','false');
		} else {


			$('nav').css('display','flex');
			$(this).attr('aria-expanded','true');
		}
//		console.log('yep');
	});
	});
	$(window).resize(function() {
		//$('iframe').parent().fitVids();
	});

	//console.log('yep');
// END RESIZE VIDEOS
}());

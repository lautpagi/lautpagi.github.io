$('.hamburger-menu').click(function() {
	$('span').toggleClass("close");
	$('ul').toggleClass("slide-menu");
});
$(document).scroll(function(){
  let pixels = $(window).scrollTop();
  let pageHeight = $(document).height() - $(window).height();
  let progress = 100 * pixels / pageHeight;
  
  $(".progressbar").css('top', progress + '%');
});

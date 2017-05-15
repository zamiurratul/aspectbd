// JavaScript Document
$(document).ready(function(){
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
		else{
			$(this).removeClass("slide");
		}
	});
});
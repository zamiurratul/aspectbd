/*!
 * Scroll smooth.
 *
 * Copyright (c) 2017 Nisar Soft (http://nisarsoft.com)
 * 2017/01/01
 **/
$.scrollTo = $.fn.scrollTo = function(x, y, options){
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

    options = $.extend({}, {
        gap: {
            x: 0,
            y: 0
        },
        animation: {
            easing: 'swing',
            duration: 600,
            complete: $.noop,
            step: $.noop
        }
    }, options);

    return this.each(function(){
        var elem = $(this);
        elem.stop().animate({
            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
        }, options.animation);
    });
};

$(window).scroll(function(){
  var header = $('body');
	  var scroll_val = $(window).scrollTop();		
  if (scroll_val >= 50) header.addClass('fixd');
  else header.removeClass('fixd');
  
});
$('.active').hover(
   function(){ $(this).removeClass('active') }/*,
   function(){ $(this).addClass('active') }*/
)

$(document).ready(function(){
			
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
		var div_top = $('#nav-anchor').offset().top;
			if (window_top > div_top) {
				$('nav').addClass('stick');
			} else {
				$('nav').removeClass('stick');
			}
	});
	/*======For Removing the menu name at scrolling time=======*/
	$("nav a").click(function(evn){
		evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash); 
	});
	
	var aChildren = $("nav li").children(); // find the a children of the list items
	var aArray = []; // create the empty aArray
	for (var i=0; i < aChildren.length; i++) {    
		var aChild = aChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	} // this for loop fills the aArray with attribute href values
	
	$(window).scroll(function(){
	var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	var windowHeight = $(window).height(); // get the height of the window
	var docHeight = $(document).height();
	
	for (var i=0; i < aArray.length; i++) {
		var theID = aArray[i];
		var divPos = $(theID).offset().top; // get the offset of the div from the top of page
		var divHeight = $(theID).height(); // get the height of the div in question
		if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
			$("a[href='" + theID + "']").addClass("nav-active");
		} else {
			$("a[href='" + theID + "']").removeClass("nav-active");
		}
	}
	
	if(windowPos + windowHeight == docHeight) {
		if (!$("nav li:last-child a").hasClass("nav-active")) {
			var navActiveCurrent = $(".nav-active").attr("href");
			$("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
			$("nav li:last-child a").addClass("nav-active");
		}
	}
	});
	
});
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

var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
		$('.typewriter').text(type);
		$('.typewriter').slideDown();
		setTimeout(function() {		
			typeWriter();
		}, 100);

        if (character == length) {
			var delay=3000;
			setTimeout(function() {
				character = 0;
			}, delay);
			//clearTimeout(timeOut);
        }

    }, 150);
}());


function formcheck(){
	var oField = document.customer_form.name;
	var oElement = document.getElementById('errmsg_name');
	oElement.innerHTML = "";
	if(oField.value == ""){
		oElement.innerHTML = 'You are missing Name';
		oField.focus();
		return(false);
	}
	else if(oField.value.length < 3){
		oElement.innerHTML = 'Name should be more then 2 character';
		oField.focus();
		return(false);
	}
	
	var oField = document.customer_form.email;
	var oElement = document.getElementById('errmsg_email');				
	oElement.innerHTML = "";
	if(oField.value == ""){
		oElement.innerHTML = 'You are missing The email ID';
		oField.focus();
		return(false);
	}
	
	else if(oField.value.length < 4){
		oElement.innerHTML = 'Email should be more then 3 characters';
		oField.focus();
		return(false);
	}
	else if(emailcheck(oField.value)==false) {
		oElement.innerHTML = "You given email id is invalid";
		oField.focus();
		return(false);
	}
	
	function emailcheck(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
	
	var oField = document.customer_form.subject
	var oElement = document.getElementById('errmsg_subject');				
	oElement.innerHTML = "";
	if(oField.value == ""){
		oElement.innerHTML = 'You are missing The Subject';
		oField.focus();
		return(false);
	}
	
	var oField = document.customer_form.message;
	var oElement = document.getElementById('errmsg_message');				
	oElement.innerHTML = "";
	if(oField.value == ""){
		oElement.innerHTML = 'Please Type The Message';
		oField.focus();
		return(false);
	}
}

/*for slideing*/
$(window).scroll(function() {
	$(".slideanim").each(function(){
	  var pos = $(this).offset().top;
	
	  var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
		  $(this).addClass("slide");
		}
	});
});	/*for slideing*/

$(document).ready(function(){
	var facebook = $(".footer_menu ul li .fa-facebook");
	var linkedin = $(".footer_menu ul li .fa-linkedin");
	var youtube = $(".footer_menu ul li .fa-youtube");
    $(facebook).parent().hover(
		function(){
			facebook.parent().css({"color":"#4267b2"});
		},
		function() {
			$(".footer_menu ul li a").css({"color":""});
		}
	);
	$(linkedin).parent().hover(
		function(){
			linkedin.parent().css({"color":"#0077b5"});
		},
		function() {
			$(".footer_menu ul li a").css({"color":""});
		}
	);
	$(youtube).parent().hover(
		function(){
			youtube.parent().css({"color":"#cc181e"});
		},
		function() {
			$(".footer_menu ul li a").css({"color":""});
		}
	);
});

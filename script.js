var counter = 0;

function showImages(el) {
	var windowHeight = jQuery(window).height();
	$(el).each(function() {
		var thisPos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
		if (topOfWindow + windowHeight - 200 > thisPos ) {
			$(this).addClass("fadeIn");
		}
	});
}

$(document).ready(function() {
    $("#header-title ").fadeIn(2000);
    $("#header-title").click(function() {
        counter++;
        if(counter == 5) {
            $("#header-title").fadeOut("slow");
        }
    });
	showImages('.star');
});

var navbar = document.getElementById("navbarContainer"),
    about_area = document.getElementById("about");

var mainbottom = $('.jumbotron').offset().top + $('.jumbotron').height();

// Detect on scroll when the navbar is passed the header container div
window.onscroll = function(e){
	showImages('.star');
    var startPos = ((e.pageY||document.body.scrollTop) + navbar.offsetHeight);
    var endPos = about_area.offsetTop + about_area.offsetHeight;
	//
    if(about_area.offsetTop <= startPos){
        navbar.style.backgroundColor = "rgba(0,0,0,1)";
    }
	else{
        navbar.style.backgroundColor = "rgba(0,0,0,.70)";
    }
};




var counter = 0;

$(document).ready(function() {
    $("#header-title ").fadeIn(2000);
    $("#header-title").click(function() {
        counter++;
        if(counter == 5) {
            $("#header-title").fadeOut("slow");
        }
    });
});

var navbar = document.getElementById("navbarContainer"),
    about_area = document.getElementById("about");

var mainbottom = $('.jumbotron').offset().top + $('.jumbotron').height();

// Detect on scroll
window.onscroll = function(e){
// window.onscroll = function(){
	// we round here to reduce a little workload
	// var stop = Math.round($(window).scrollTop());
	//
	// if (stop > mainbottom) {
	// 	console.log("I went passed the header!");
	// 	$('#navbarContainer').addClass('past-main');
	// } else {
	// 	$('#navbarContainer').removeClass('past-main');
	// }

	// console.log(navbar.offsetHeight);
    var startPos = ((e.pageY||document.body.scrollTop) + navbar.offsetHeight);
    var endPos = about_area.offsetTop + about_area.offsetHeight;
	//
    if(about_area.offsetTop <= startPos){
        console.log("Should turn a darker color");
        navbar.style.backgroundColor = "rgba(0,0,0,1)";
    }
	else{
        console.log("Should be a lighter color");
        navbar.style.backgroundColor = "rgba(0,0,0,.70)";
    }
};



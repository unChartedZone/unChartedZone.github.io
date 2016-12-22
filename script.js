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

var header_links = document.getElementById("navbarContainer"),
    blue_area = document.getElementById("about");

// Detect on scroll
window.onscroll = function(e){
    var startPos = ((e.pageY||document.body.scrollTop) + header_links.offsetHeight);
    var endPos = blue_area.offsetTop + blue_area.offsetHeight;

    if(blue_area.offsetTop <= startPos && startPos <= endPos){
        console.log("Should turn a darker color");
        header_links.style.backgroundColor = "rgba(0,0,0,1)";
    }
	else{
        console.log("Should be a lighter color");
        header_links.style.backgroundColor = "rgba(0,0,0,.70)";
    }
};



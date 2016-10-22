var counter = 0;

$(document).ready(function() {
    $("#header h1").fadeIn(2000);
    $("#header h1").click(function() {
        counter++;
        if(counter == 5) {
            $("#header h1").fadeOut("slow");
        }
    });
});

var header_links = document.getElementById("navbarheader"),
    blue_area = document.getElementById("about");

// Detect on scroll
window.onscroll = function(e){
    var startPos = ((e.pageY||document.body.scrollTop) + header_links.offsetHeight);
    var endPos = blue_area.offsetTop + blue_area.offsetHeight;

    if(blue_area.offsetTop <= startPos && startPos <= endPos){
        console.log("Should turn a darker color");
        header_links.style.backgroundColor = "rgba(0,0,0,1)";
    }else{
        console.log("Should be a lighter color");
        header_links.style.backgroundColor = "rgba(0,0,0,.40)";
    }
};

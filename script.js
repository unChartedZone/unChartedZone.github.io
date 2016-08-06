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

console.log("boots".length);
var temp = "christian valdez";

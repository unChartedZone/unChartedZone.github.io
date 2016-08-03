var counter = 0;

$(document).ready(function() {
    $("#header h1").click(function() {
        counter++;
        if(counter == 5) {
            $("#header h1").fadeOut("slow");
        }
    });
});

function getContactInfo() {
    var header = document.getElementById("contactInfo");
    var info = header.textContent;
    console.log(info);
}

getContactInfo();
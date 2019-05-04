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
	var counter = 0;

    $("#header-title ").fadeIn(2000);
    $("#header-title").click(function() {
        counter++;
        if(counter == 50) {
            $("#header-title").fadeOut("slow");
        }
    });
	showImages('#myself');
});


$(document).on('scroll', function() {
	var navbar = document.getElementById('navbar-container');

	if($(this).scrollTop() >= ($('#about').position().top - 250)) {
		navbar.setAttribute("style","background-color: rgba(0,0,0,1) !important");
		showImages('#myself');
	}
	else {
		navbar.setAttribute("style","background-color: rgba(0,0,0,.70) !important");
	}
});

function subHeadTypeWriter() {
	var subHeader = document.createElement('span');
	var subHeaderContainer = document.getElementsByClassName('typewriter')[0];

	subHeader.classList.add('sub-header');
	subHeader.innerHTML = "C";
	var fullString = 'ALIFORNIA BASED DEVELOPER'

	subHeaderContainer.insertBefore(subHeader,subHeaderContainer.childNodes[0]);

	var counter = 0;

	function timeout() {
		if(counter == fullString.length) {
			return;
		}
		subHeader.innerHTML = subHeader.innerHTML + fullString.charAt(counter);
		counter++;
		setTimeout(timeout,150);
	}

	timeout();
}

subHeadTypeWriter();



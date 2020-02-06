<template>
	<div class="jumbotron">
		<div class="container-fluid">
			<div id="header" class="container-fluid col-md-12">
				<div class="row">
					<div class="col">
						<h1 id="header-title" class="display-1">{{name}}</h1>
					</div>
				</div>
				<!-- <div class="typewriter">
					<span class="sub-header">{{typewriter}}</span>
				</div> -->
				<h2>{{typewriter}}</h2>
			</div>
		</div>
	</div>
</template>

<script>
// function showImages(el) {
// 	var windowHeight = jQuery(window).height();
// 	$(el).each(function() {
// 		var thisPos = $(this).offset().top;
		
// 		var topOfWindow = $(window).scrollTop();
// 		if (topOfWindow + windowHeight - 200 > thisPos ) {
// 			$(this).addClass("fadeIn");
// 		}
// 	});
// }

// $(document).ready(function() {
// 	var counter = 0;

//     $("#header-title ").fadeIn(2000);
//     $("#header-title").click(function() {
//         counter++;
//         if(counter == 50) {
//             $("#header-title").fadeOut("slow");
//         }
//     });
// 	showImages('#myself');
// });


$(document).on('scroll', function() {
	var navbar = document.getElementById('navbar-container');

	if($(this).scrollTop() >= ($('#about').position().top - 250)) {
		navbar.setAttribute("style","background-color: rgba(0,0,0,1) !important");
		// showImages('#myself');
	}
	else {
		navbar.setAttribute("style","background-color: rgba(0,0,0,.70) !important");
	}
});


export default {
    data() {
        return {
            name: 'Christian Valdez',
            typewriter: 'California Based Developer',
        }
    },
    methods: {
        temp() {
            console.log('hell world')
        }
    },
    created() {
        window.addEventListener('scroll', this.temp)
    }
}
</script>

<style lang="scss" scoped>
#header-title {
	font-size: 6.25em;
	padding: 1rem;
	animation: slideDown .5s ease-out;

	span {
	background: linear-gradient(110deg, #f93d66, #6d47d9);
	padding: 5px;
	border-radius: 10px;

	}

	@media (max-width: 575.98px) {
		font-size: 2.4rem;
		color: white;
	}
}

.jumbotron {
	font-family: 'Google Sans';
	color: white;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	width: 100%;
	height: 100vh;
    background: url("/images/desk-bg.jpg") no-repeat top;
	background-size: cover;
	position: fixed;
	top: 0;

	&>.container-fluid {
		height: inherit;
	}
}
</style>
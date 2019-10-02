<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <About></About>
    <!-- <Showcase></Showcase> -->
    <Footer></Footer>
  </div>
  <!--<div id="footer"> <h3> <i> The End </i> </h3> </div>-->
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Showcase from './components/Showcase.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    About,
    Showcase,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

@font-face {
	font-family: Google Sans;
	src: url(/fonts/GoogleSans-Regular.ttf);
}

html, body {
  background-color: white;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

hr {
	padding: 0 0 1.5em 0;
}

.fab {
	font-size: 23px !important; /* Default size for font awesome icons*/
}

.grid {
	display: grid;
	grid-template-columns: auto auto auto auto;
	justify-content: space-around;
	height: 80%;
	width: 100%;
}

.grid-item {
	width: 200px;
	text-align: center;
	min-height: 100px;
}

.sub-header {
	background-color: black;
	padding: 5px;
	font-family: 'Montserrat', sans-serif;
	font-size: 30px;
	font-weight: 300;
	border-right: .15em solid orange; /* The typwriter cursor */
	animation: blink-caret .75s step-end infinite;
}

.section-header {
	font-family: 'Montserrat';
	font-size: 4em;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
	.sub-header {
		font-size: 1.13rem;
	}

	.contact-item {
		font-size: 1.50rem;
	}

	.grid {
		grid-template-columns: auto auto;
		width: 90%;
	}

	#operating-systems h2 {
		font-size: 2.23em;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
	#header-title {
		font-size: 4.0rem;
	}

	.sub-header {
		font-size: 1.25rem;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
	#header-title {
		font-size: 7.5rem;
	}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 

}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

.fadeIn {
	-webkit-animation: animat_show 0.8s;
	animation: animat_show 0.8s;
	visibility: visible !important;
}

@keyframes animat_show {
	0%{opacity: 0}
	100%{opacity: 1}
}

/*##############################################################

				Media Queries 

##############################################################*/


@keyframes slideDown {
	0% {
		opacity: 0;
		transform: translateY(-50px);
	}

	80% {
		transform: translateY(10px);
	}

	100% {
		opacity: 1;
		transform: translate(0);
	}
}

@keyframes slideUp {
	0% {
		opacity: 0;
		transform: translateY(30px);
	}

	80% {
		transform: translateY(-10px);
	}

	100% {
		opacity: 1;
		transform: translate(0);
	}
}
</style>
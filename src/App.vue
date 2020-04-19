<template>
  <div>
	  <Header />
	  <Home />
	  <About />
	  <!-- <Portfolio /> -->
	  <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Footer from './components/Footer.vue'

// import Showcase from './components/Showcase.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    About,
	Portfolio,
    Footer
    // Showcase,
  }
}
</script>

<style lang="scss">
// @import './scss/_variables.scss';
// @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,700;1,100&display=swap');

@font-face {
	font-family: Google Sans;
	src: url(/fonts/GoogleSans-Regular.ttf);
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box; 
}

html {
	font-size: 62.5%;
}

</style>
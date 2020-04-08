<template>
  <div>
	  <Header />
	  <Home />
	  <About />
  </div>
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

.header {
	&-primary {
		font-family: 'Google Sans', sans-serif;
		font-size: 6.5rem;
		letter-spacing: 0.1rem;
	}

	&-secondary {
		font-family: $primary-default-font;
		font-size: 3.5rem;
		font-weight: 400;
	}
}

.subtitle {
	font-family: $primary-default-font;
	font-size: 2.5rem;
	font-weight: 400;
}

.paragraph {
	font-family: $primary-default-font;
	font-size: 1.75rem;
}

.btn {
	cursor: pointer;

	&-primary {
		// background-color: $color-primary;
		background-image: linear-gradient(to right, $color-primary, $color-primary-light);
		border: transparent;
		border-radius: 7px;
		color: white;
		font-size: 1.75rem;
		font-family: $primary-default-font;
		padding: 10px;
		transition: all .2s;
		box-shadow: 0 8px 15px rgba(0, 0, 0, .2);

		&:hover {
			background-color: darken($color-primary, 10);
			transform: translateY(-0.2rem);
		}
	}
}

</style>
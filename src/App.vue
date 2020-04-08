<template>
  <div>
	  <Home />
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

.container {
	width: 80%; 
	margin: 0 auto;
}

.d-flex {
	display: flex;
}

.col {
	flex-direction: column;
}

.align {
	&-center {
		align-items: center;
	}
}

.justify {
	&-center {
		justify-content: center;
	}
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
	font-size: 2rem;
}

.btn {
	cursor: pointer;

	&-primary {
		background-color: $color-primary;
		border: transparent;
		border-radius: 7px;
		color: white;
		font-size: 1.75rem;
		padding: 10px;
		transition: all .2s;

		&:hover {
			background-color: darken($color-primary, 10);
		}
	}
}

</style>
<template>
  <div id="app">
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

#app {
	background-color: white;
}

</style>
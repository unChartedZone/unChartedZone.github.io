<template>
  <div>
    <Header />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

// import Showcase from './components/Showcase.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    About,
    Portfolio,
    Contact,
    // Showcase,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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

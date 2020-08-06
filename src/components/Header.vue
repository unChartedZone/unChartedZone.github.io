<template>
  <nav class="nav d-flex align-center w-full">
    <div class="nav__main container mx-auto d-flex align-center">
      <div class="nav-item nav-logo">CV</div>

      <div class="nav__toggle">
        &nbsp;
      </div>

      <div class="nav-item nav-links">
        <div class="nav-link" @click="scrollJumper({ id: 'about' })">
          <a>About Me</a>
        </div>
        <div class="nav-link" @click="scrollJumper({ id: 'portfolio' })">
          <a>Portfolio</a>
        </div>
        <div class="nav-link" @click="scrollJumper({ id: 'contact' })">
          <a>Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['scrollJumper']),
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: white;
  height: 7rem;
  position: fixed;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(#000000, 0.2);
  animation: slide-in-down 0.7s ease-in-out;
  z-index: 10;

  &__main {
    justify-content: space-between;
    padding: 0 2rem;

    @include respond(xl) {
      padding: 0;
    }
  }

  &-logo {
    font-family: 'Google Sans';
    font-size: 3rem;
  }

  &-item {
    // padding: 0 6rem;

    // @include respond(sm) {
    //   padding: 0 2.25rem;
    // }
  }

  &__toggle {
    background-color: black;
    position: relative;
    height: 3px;
    width: 3rem;
    display: inline-block;

    @include respond(sm) {
      display: none;
    }

    &::before,
    &:after {
      background-color: black;
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
    }

    &:before {
      top: -1rem;
    }

    &:after {
      top: 1rem;
    }
  }

  &-links {
    display: none;

    @include respond(sm) {
      display: inline;
    }
  }

  &-link {
    cursor: pointer;
    display: inline-block;
    color: black;
    font-size: 1.65rem;
    font-family: $primary-default-font;
    padding: 0 1rem;
    transition: all 0.2s;
    user-select: none;

    a {
      text-decoration: none;
    }

    &:hover {
      color: $color-primary;
      transform: translateY(-0.2rem) scale(1.02);
    }
  }
}
</style>

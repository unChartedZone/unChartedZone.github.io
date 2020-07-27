<template>
  <section id="contact" class="contact my-4">
    <div class="container d-flex align-center justify-center column">
      <div class="contact-body">
        <h1 class="header-secondary">Contact Me!</h1>
        <p class="paragraph">If you want to talk, you can find me at</p>
        <a href="mailto:me@chrisvaldez.dev" class="email my-2"
          >me@chrisvaldez.dev</a
        >

        <div class="contact-links my-1 d-flex justify-center">
          <a href="https://github.com/unChartedZone" class="btn-fab mr-1">
            <i class="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/christianbvaldez/"
            class="btn-fab mr-1"
          >
            <i class="fab fa-linkedin-in" />
          </a>

          <a href="https://twitter.com/unchartedzones" class="btn-fab">
            <i class="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- <h1 class="footer-header">Christian Valdez</h1> -->
      <h1 class="footer-header mt-1">CV</h1>
      <h2 class="footer-subheader">Full Stack Developer</h2>
      <p class="footer-copyright mb-4">Copyright &copy; 2020, CV</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  position: relative;

  &-body {
    text-align: center;
  }
}

.paragraph {
  @include respond(sm) {
    display: inline-block;
    width: 80%;
    margin: 0 auto;
  }
}

.email {
  &,
  &:link,
  &:visited {
    color: $color-primary;
    display: inline-block;
    font-size: 2rem;
    padding: 0.8rem 0.8rem;
    text-decoration: none;
    transition: all 0.2s;
  }

  &:hover {
    background-color: $color-primary;
    color: #ffffff;
    transform: skewY(-5deg);
  }
}

.footer {
  text-align: center;
  width: 100%;

  & > * {
    padding: 0.2rem 0;
  }

  &-header {
    font-family: 'Google Sans', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  &-subheader {
    font-weight: 200;
  }
}
</style>

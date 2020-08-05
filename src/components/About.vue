<template>
  <section id="about" class="about container">
    <h1 class="header-secondary mb-1">About Me</h1>
    <div class="about-text">
      <p class="paragraph">
        I am a full stack developer from San Diego, California. I earned my
        Bachelor's Degree in
        <span class="highlight">Computer Science</span> from SDSU in 2018. There
        I learned important skills such as data structures, dynamic algorithms,
        and the complexities of operating systems. I also learned the
        fundamentals of Object-oriented programming languages such as
        <span class="highlight">Java</span> and
        <span class="highlight">C++.</span>
      </p>

      <p class="paragraph">
        Meanwhile in school, I wanted to learn about web and mobile development
        however, there were no classes offered at my school. So I decided to
        teach myself. Starting with the basics of HTML, CSS, and Javascript, I
        later moved onto other UI frameworks such as Jquery and Bootstrap.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin: 0 auto 20rem;

  &-text {
    width: 45%;

    p:not(:last-child) {
      margin: 0 0 2rem 0;
    }

    @include respond(sm) {
      width: 100%;
    }
  }
}
</style>

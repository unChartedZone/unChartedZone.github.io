<template>
  <section id="portfolio" class="portfolio-section my-4">
    <div class="container d-flex col justify-center">
      <h2 class="header-secondary text-center">Portfolio</h2>
      <div
        class="portfolio__item"
        v-for="project in projects"
        :key="project.title"
      >
        <div class="portfolio__header">
          <h1>
            <span class="portfolio__title">{{ project.title }}</span>
          </h1>
        </div>
        <div class="portfolio__content">
          <div class="portfolio__image">
            <img :src="`${project.imgSrc}`" alt="" />
          </div>
          <!-- <img
              src="@/assets/images/portfolioScreenshot.png"
              alt="Screenshot of Portfolio"
            /> -->
          <div class="portfolio__body">
            <p class="portfolio__copy">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'My Portfolio!',
          description: `
            This very website you're on right now! I made this website with VueJS and have it hosted on Github Pages.
          `,
          imgSrc: require('@/assets/images/portfolioScreenshot.png')
        },
        {
          title: 'Ice Cream Buisness Management System',
          description: 'More details coming soon!',
          imgSrc: require('@/assets/images/portfolioScreenshot.png')
        }
      ]
    }
  }
}
</script>

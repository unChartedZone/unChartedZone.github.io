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
          <div class="portfolio__body">
            <p class="portfolio__copy">{{ project.description }}</p>
            <div>
              <z-link class="mr-1" url="https://chrisvaldez.dev">
                <i class="fas fa-paper-plane"></i>
                Visit
              </z-link>
              <z-link
                url="https://github.com/unChartedZone/unChartedZone.github.io"
                outlined
              >
                <i class="fab fa-github"></i>
                Source
              </z-link>
            </div>
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
            This very website you're on right now! I made this website with
            VueJS and have it hosted on Github Pages. Orginally my portfolio
            was built with only with vanilla HTML and CSS but over time it
            became hard to manage and update, with Vue I can easily swap out
            components and keep my portfolio up to date.
          `,
          imgSrc: require('@/assets/images/portfolioScreenshot.png'),
        },
        // {
        //   title: 'Ice Cream Buisness Management System',
        //   description: 'More details coming soon!',
        //   imgSrc: require('@/assets/images/iceCreamScreenshot.png'),
        // },
        // {
        //   title: 'Weather App',
        //   description: '',
        //   imgSrc: require('@/assets/images/iceCreamScreenshot.png'),
        // },
        // {
        //   title: 'Todo App',
        //   description: '',
        //   imgSrc: require('@/assets/images/iceCreamScreenshot.png'),
        // },
      ],
    }
  },
}
</script>

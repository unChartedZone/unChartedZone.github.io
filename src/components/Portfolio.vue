<template>
  <section id="portfolio" class="portfolio-section my-4">
    <div class="container mx-auto d-flex col justify-center">
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
              <z-link class="mr-1" :url="project.siteLink">
                <i class="fas fa-paper-plane"></i>
                Visit
              </z-link>
              <z-link :url="project.githubLink" outlined>
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
          siteLink: 'https://chrisvaldez.dev',
          githubLink:
            'https://github.com/unChartedZone/unChartedZone.github.io',
        },
        {
          title: 'Ice Cream Buisness Management System',
          description: `
            This buisness management website was created as part of a school
            project. It was first built with Bootstrap, PHP, and MySQL, it
            featured crud operations on various tables and custom validation.
            It was hosted on a DigitalOcean droplet using Nginx as it's web
            server. Recently I converted it over to be a React app using
            firebase as it's backend and hosted on Netlify.
          `,
          imgSrc: require('@/assets/images/iceCreamScreenshot.png'),
          siteLink: 'https://icecream.chrisvaldez.dev',
          githubLink: 'https://github.com/unChartedZone/IceCreamIMS',
        },
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

<style lang="scss">
.portfolio {
  &__item {
    margin: 7rem 0;
    width: 100%;
  }

  &__header {
    text-align: center;
    margin: 0 0 3rem;
  }

  &__title {
    display: inline-block;
    background-color: $color-primary;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 400;
    padding: 0.8rem;
    transform: skewY(-5deg);
    backface-visibility: hidden;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__image {
    padding: 0 2rem;

    img {
      border-radius: 7px;
      height: 100%;
      width: 100%;
      box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.5);
    }
  }

  &__body {
    font-size: 1.5rem;
    padding: 0 2rem;
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
  }

  &__copy {
    line-height: 1.7;
  }
}
</style>

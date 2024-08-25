import React from 'react';
import Img from 'gatsby-image';
import { FaPaperPlane, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Twitter Clone',
    description: `
          A feature rich twitter clone built with Vue.js on the frontend and
          Ruby on Rails for the backend. It has the ability to sign up and login
          users, tweet posting, follow and unfollowing of users, likes,
          retweets, and profile editing.
    `,
    image: 'twitterCloneScreenshot',
    siteLink: 'https://twitter.chrisvaldez.dev',
    githubLink: 'https://github.com/unChartedZone/twitter-clone',
  },
  {
    title: 'My Portfolio!',
    description: `
            This very website you're on right now! Oringinally I built it with
            just HTML, CSS, and some Javascript, but later I converted it over
            to a Vue.js project. However I wanted to benefit from SEO and have
            faster static rendering, so I decided to convert it to a Gatsby site
            instead. I also setup a Github Action that builds and deploys my
            portfolio when I push changes to my main branch.
          `,
    image: 'portfolioScreenshot',
    siteLink: 'https://chrisvaldez.dev',
    githubLink: 'https://github.com/unChartedZone/unChartedZone.github.io',
  },
  {
    title: 'Coffee Tracker',
    description: `
            A Coffee Tracker app made with React that utilizes the Yelp API
            to fetch coffee places based on a given location and help you
            find the best coffe shop near you. The user can see their rating,
            and address to the restaurant/cafe. It utilizes Netlify
            serverless functions in order to talk to the Yelp API.
          `,
    image: 'coffeeScreenshot',
    siteLink: 'https://coffee.chrisvaldez.dev',
    githubLink: 'https://github.com/unChartedZone/coffee-tracker',
  },
  {
    title: 'Ice Cream BMS',
    description: `
            This buisness management website was created as part of a school
            project. It was first built with Bootstrap, PHP, and MySQL, it
            featured crud operations on various tables and custom validation.
            It was hosted on a DigitalOcean droplet using Nginx as it's web
            server. Recently I converted it over to be a React app using
            firebase as it's backend and hosted on Netlify.
          `,
    image: 'iceCreamScreenshot',
    siteLink: 'https://icecream.chrisvaldez.dev',
    githubLink: 'https://github.com/unChartedZone/IceCreamIMS',
  },
  {
    title: 'Todo App',
    description: `
            This Todo App features the ability to create collections of todos.
            Within each collection, a user can create, delete, and edit todos.
            This App also features user authentication using Firebase  and form
            validation using Vee Validate.
          `,
    image: 'todosScreenshot',
    siteLink: 'https://todos.chrisvaldez.dev',
    githubLink: 'https://github.com/unChartedZone/todo-app',
  },
];

const Project = ({ title, description, siteLink, githubLink, fluid }) => (
  <div className="portfolio__item">
    <div className="portfolio__header">
      <h1>
        <span className="portfolio__title">{title}</span>
      </h1>
    </div>
    <div className="portfolio__content">
      <div className="portfolio__image">
        <Img fluid={fluid} />
      </div>
      <div className="portfolio__body">
        <p className="portfolio__copy">{description}</p>
        <div>
          <a className="portfolio__link mr-1" href={siteLink} target="_blank">
            <span>
              <FaPaperPlane />
              Visit
            </span>
          </a>
          <a
            className="portfolio__link portfolio__link--outlined"
            href={githubLink}
            target="_blank"
          >
            <span>
              <FaGithub />
              Source
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = ({ images }) => {
  return (
    <section id="portfolio" className="portfolio-section my-4">
      <div className="container mx-auto d-flex col justify-center">
        <h2 className="header-secondary text-center">Portfolio</h2>
        <>
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                siteLink={project.siteLink}
                githubLink={project.githubLink}
                fluid={images[project.image].fluid}
              />
            );
          })}
        </>
      </div>
    </section>
  );
};

export default Portfolio;

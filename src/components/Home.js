import React from 'react';
import { scrollJumper } from '../helpers';

const Home = () => {
  return (
    <section className="home-page container mx-auto d-flex align-start justify-center col">
      <h1 className="header-primary">
        <span>Hello</span>
        <span
          className="hand-emoji"
          role="img"
          aria-label="Apple Waving Hand Emoji"
        >
          👋
        </span>
        ,
      </h1>
      <h1 className="header-primary">
        I'm <span className="name">Christian Valdez</span>
      </h1>
      <h2 className="subtitle">California Based Developer</h2>
      <button
        onClick={() => scrollJumper('about')}
        className="home-btn btn-primary my-1"
      >
        About Me
      </button>
    </section>
  );
};

export default Home;

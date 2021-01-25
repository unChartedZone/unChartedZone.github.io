import React from 'react';

const Home = () => {
  return (
    <section className="home-page container mx-auto d-flex align-start justify-center col">
      <h1 className="header-primary">
        Hello{' '}
        <span
          className="hand-emoji"
          role="img"
          aria-label="Apple Waving Hand Emoji"
        >
          👋
        </span>
        ,<br />
        I'm <span className="name">Christian Valdez</span>
      </h1>
      <h2 className="subtitle">California Based Developer</h2>
      <button className="home-btn btn-primary my-1">About Me</button>
    </section>
  );
};

export default Home;

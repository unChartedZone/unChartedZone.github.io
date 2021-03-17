import React from 'react';

const About = () => {
  return (
    <section id="about" className="about container">
      <h1 className="header-secondary mb-1">About Me</h1>
      <div className="about-text">
        <p className="paragraph">
          I am a full stack developer from San Diego, California. I earned my
          Bachelor's Degree in <span className="mark">Computer Science</span>{' '}
          from SDSU in 2018. There I learned core skills such as data
          structures, dynamic algorithms, and the complexities of operating
          systems. I learned the fundamentals of Object-oriented programming
          languages such as <span className="mark">Java</span>
          and <span className="mark">C++.</span>
        </p>

        <p className="paragraph">
          Meanwhile in school, I wanted to learn about web and mobile
          development however, there were no classes on those topics offered at
          my school. So I decided to teach myself. Starting with the basics of
          HTML, CSS, and Javascript, I quickly moved to Jquery and Bootstrap.
          For the backend, I initially started learning PHP and MySQL.
        </p>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="contact my-4">
      <div className="container mx-auto d-flex align-center justify-center column">
        <div className="contact-body">
          <h1 className="header-secondary">Contact Me!</h1>
          <p className="paragraph">If you want to talk, you can find me at</p>
          <a href="mailto:me@chrisvaldez.dev" className="email my-2">
            me@chrisvaldez.dev
          </a>

          <div className="contact-links my-1 d-flex justify-center">
            <a
              href="https://github.com/unChartedZone"
              className="btn-fab mr-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/christianbvaldez/"
              className="btn-fab mr-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/unchartedzones"
              className="btn-fab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <h1 className="footer-header">Christian Valdez</h1> */}
        <h1 className="footer-header mt-1">CV</h1>
        <h2 className="footer-subheader">Full Stack Developer</h2>
        <p className="footer-copyright mb-4">Copyright &copy; {year}, CV</p>
      </div>
    </section>
  );
};

export default Contact;

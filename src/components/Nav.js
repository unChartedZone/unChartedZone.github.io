import React from 'react';

const Nav = ({ scrollJumper }) => (
  <nav className="nav d-flex align-center w-full">
    <div className="nav__main container mx-auto d-flex align-center">
      <div className="nav-item nav-logo">CV</div>

      <div className="nav__toggle">&nbsp;</div>

      <ul className="nav-item nav-links">
        <li className="nav-link" onClick={() => scrollJumper('about')}>
          <a>About Me</a>
        </li>
        <li className="nav-link" onClick={() => scrollJumper('portfolio')}>
          <a>Portfolio</a>
        </li>
        <li className="nav-link" onClick={() => scrollJumper('contact')}>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

import React from 'react';

const Nav = () => (
  <nav className="nav d-flex align-center w-full">
    <div className="nav__main container mx-auto d-flex align-center">
      <div className="nav-item nav-logo">CV</div>

      <div className="nav__toggle">&nbsp;</div>

      <ul className="nav-item nav-links">
        <li className="nav-link">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-link">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

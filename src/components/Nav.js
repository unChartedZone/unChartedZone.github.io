import React, { useState } from 'react';

const Nav = ({ scrollJumper }) => {
  let [navToggle, setNavToggle] = useState(false);

  const toggleNavMenu = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className="nav d-flex align-center w-full">
      <div className="nav__main container mx-auto d-flex align-center">
        <div className="nav-item nav-logo">CV</div>

        <div
          onClick={toggleNavMenu}
          className={`nav__toggle ${navToggle ? 'nav__toggle--close' : ''}`}
        >
          &nbsp;
        </div>

        <ul
          className={`nav-item nav-links ${navToggle ? 'nav-links--show' : ''}`}
        >
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
};

export default Nav;

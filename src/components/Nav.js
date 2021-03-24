import React, { useState } from 'react';
import { scrollJumper } from '../helpers';

const Nav = () => {
  let [navToggle, setNavToggle] = useState(false);

  const toggleNavMenu = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className="nav d-flex align-center w-full">
      <div className="nav__main container mx-auto align-center">
        <div className="nav__section">
          <h1 className="nav__logo">CV</h1>
        </div>
        <div className="nav__section">
          <ul className={`nav__list ${navToggle ? 'nav__list--show' : ''}`}>
            <li className={`nav__link ${navToggle ? 'nav__link--1' : ''}`}>
              <button
                onClick={() => {
                  setNavToggle(false);
                  scrollJumper('about');
                }}
              >
                About Me
              </button>
            </li>
            <li className={`nav__link ${navToggle ? 'nav__link--2' : ''}`}>
              <button
                onClick={() => {
                  setNavToggle(false);
                  scrollJumper('portfolio');
                }}
              >
                Portfolio
              </button>
            </li>
            <li className={`nav__link ${navToggle ? 'nav__link--3' : ''}`}>
              <button
                onClick={() => {
                  setNavToggle(false);
                  scrollJumper('contact');
                }}
              >
                Contact
              </button>
            </li>
          </ul>

          <div
            role="button"
            className="nav__toggle"
            onClick={toggleNavMenu}
            onKeyDown={toggleNavMenu}
            tabIndex="0"
          >
            <span
              className={`nav__burger ${
                navToggle ? 'nav__burger--checked' : ''
              }`}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

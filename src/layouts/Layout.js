import React from 'react';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chris Valdez - Full Stack Developer</title>
      </Helmet>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
};

export default Layout;

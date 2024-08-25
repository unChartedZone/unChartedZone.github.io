import React from 'react';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chris Valdez - Full Stack Developer</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
};

export default Layout;

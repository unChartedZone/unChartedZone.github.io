import React from 'react';
import Nav from '../components/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
};

export default Layout;

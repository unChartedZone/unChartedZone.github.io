import React from 'react';
import { graphql } from 'gatsby';

import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

const IndexPage = ({ data }) => {
  //
  const scrollJumper = id => {
    let offset = 90; // Size of navbar + 20 pixels for a little padding
    let section = document.getElementById(id);
    window.scrollTo(0, section.offsetTop - offset);
  };

  const images = {};

  data.allFile.edges.forEach(({ node }) => {
    images[node.name] = {
      name: node.name,
      url: node.publicURL,
    };
  });

  return (
    <>
      <Nav scrollJumper={scrollJumper} />
      <Home scrollJumper={scrollJumper} />
      <About />
      <Portfolio images={images} />
      <Contact />
    </>
  );
};

export const query = graphql`
  query ProjectImageQuery {
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;

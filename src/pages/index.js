import React from 'react';
import { graphql } from 'gatsby';

// import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

const IndexPage = ({ data }) => {
  const images = {};

  data.images.edges.forEach(({ node }) => {
    images[node.name] = {
      name: node.name,
      fluid: node.childImageSharp.fluid,
    };
  });

  return (
    <>
      {/* <Nav scrollJumper={scrollJumper} /> */}
      <Home />
      <About />
      <Portfolio images={images} />
      <Contact />
    </>
  );
};

export const query = graphql`
  query ProjectImageQuery {
    images: allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

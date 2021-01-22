import React from 'react';
import Layout from './src/layouts/Layout';
import './src/styles/main.scss';

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export { wrapPageElement };

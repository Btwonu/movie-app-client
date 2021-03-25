import React from 'react';

import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <Container className="container-sm">{props.children}</Container>
    </>
  );
};

export default Layout;

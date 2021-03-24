import React from 'react';

import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation/Navigation';

function Layout(props) {
  return (
    <>
      <Navigation />
      <Container fluid>{props.children}</Container>
    </>
  );
}

export default Layout;

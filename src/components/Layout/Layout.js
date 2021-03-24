import React from 'react';

import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation/Navigation';

function Layout(props) {
  return (
    <Container fluid>
      <Navigation />
      {props.children}
    </Container>
  );
}

export default Layout;

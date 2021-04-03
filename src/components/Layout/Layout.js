import Container from 'react-bootstrap/Container';

import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <Container fluid="sm">{props.children}</Container>
    </>
  );
};

export default Layout;

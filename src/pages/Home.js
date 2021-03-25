import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledSection = styled.section``;

const Home = (props) => {
  console.log('Home props:', props);
  return (
    <StyledSection className="pt-4 d-flex">
      <Row></Row>
    </StyledSection>
  );
};

export default Home;

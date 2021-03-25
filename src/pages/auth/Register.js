import React from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Components
import RegisterForm from '../../components/Auth/RegisterForm';

const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default Register;

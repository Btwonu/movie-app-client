import React from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const RegisterForm = () => {
  return (
    <Form className="border p-4 mt-4">
      <Form.Group className="pt-2" as={Row}>
        <Form.Label column xs={6} sm={4} md={6}>
          Username
        </Form.Label>
        <Col xs={6} sm={8} md={6}>
          <Form.Control readOnly defaultValue="User" />
        </Col>
      </Form.Group>
      <Form.Group id="register-email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group id="register-password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group id="register-confirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;

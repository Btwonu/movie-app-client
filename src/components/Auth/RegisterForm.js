import { Component } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="border shadow-sm p-4 mt-4">
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
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group id="register-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group id="register-confirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Register
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;

import { Component } from 'react';
import axios from 'axios';

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
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { username, email, password, confirmPassword } = this.state;

    axios({
      method: 'post',
      url:
        'http://localhost:5001/movie-find-dev/europe-west1/api/auth/register',
      data: {
        username,
        email,
        password,
        confirmPassword,
      },
    })
      .then((res) => {
        localStorage.setItem('AuthToken', `Bearer ${res.data.JWT}`);
        console.log('Registration done!');
      })
      .catch((err) => {
        console.log('Registration error:', err);
        // handle error
        // this.setState({
        //   errors: err.response.data,
        //   loading: false,
        // });
      });
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
            <Form.Control
              type="text"
              name="username"
              placeholder="Your visible nickname"
              value={this.state.username}
              onChange={this.handleChange}
            />
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

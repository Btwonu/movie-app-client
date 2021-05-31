import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { validateSignupData } from '../../utils/validators';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} });

    let { username, email, password, confirmPassword } = this.state;

    let { errors, valid } = validateSignupData(
      username,
      email,
      password,
      confirmPassword
    );

    if (!valid) {
      this.setState({ errors });
      return;
    }

    axios({
      method: 'post',
      url: 'http://localhost:5001/movie-find-dev/europe-west1/api/auth/register',
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
            <div className="error">
              {this.state.errors.username && this.state.errors.username}
            </div>
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
          <div className="error">
            {this.state.errors.email && this.state.errors.email}
          </div>
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
          <div className="error">
            {this.state.errors.password && this.state.errors.password}
          </div>
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
          <div className="error">
            {this.state.errors.confirmPassword &&
              this.state.errors.confirmPassword}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Register
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;

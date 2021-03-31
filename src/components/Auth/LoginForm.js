import { Component, useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password).then(() => {
      console.log('User from login form', user);
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name == 'email') {
      setEmail(value);
    }

    if (name == 'password') {
      setPassword(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="border shadow-sm mt-4 p-4">
      <Form.Group id="login-email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group id="login-password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};

// class LoginForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     let { email, password } = this.state;

//     axios({
//       method: 'post',
//       url: '/auth/login',
//       data: {
//         email,
//         password,
//       },
//     })
//       .then((res) => {
//         localStorage.setItem('AuthToken', `Bearer ${res.data.JWT}`);
//         console.log('Login done!');
//       })
//       .catch((err) => {
//         console.log('Login error:', err);
//         // handle error
//         // this.setState({
//         //   errors: err.response.data,
//         //   loading: false,
//         // });
//       });
//   };

//   handleChange = (e) => {
//     let { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit} className="border shadow-sm mt-4 p-4">
//         <Form.Group id="login-email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//         </Form.Group>

//         <Form.Group id="login-password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" block>
//           Login
//         </Button>
//       </Form>
//     );
//   }
// }

export default LoginForm;

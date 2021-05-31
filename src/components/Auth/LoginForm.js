import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { validateLoginData } from '../../utils/validators';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../../contexts/AuthContext';

// Components
import ErrorNotification from '../Utility/ErrorNotification';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationError, setNotificationError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({});

    let { errors, valid } = validateLoginData(email, password);

    if (!valid) {
      setValidationErrors(errors);
      return;
    }

    login(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        let { general } = err.response.data;

        if (general) {
          setNotificationError(general);
        }

        console.dir(err);
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
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
          <div className="error">
            {validationErrors.email && validationErrors.email}
          </div>
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
          <div className="error">
            {validationErrors.password && validationErrors.password}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Login
        </Button>
      </Form>

      {notificationError && (
        <ErrorNotification
          message={notificationError}
          setNotificationError={setNotificationError}
        />
      )}
    </>
  );
};

export default withRouter(LoginForm);

import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { validateSignupData } from '../../utils/validators';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterForm = ({history}) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState({});
	const { updateUser } = useAuth();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({ errors: {} });

		const { errors, valid } = validateSignupData(
			formData.username,
			formData.email,
			formData.password,
			formData.confirmPassword
		);

		if (!valid) {
			setErrors({ errors });
			return;
		}

		axios({
			method: 'post',
			url: '/auth/register',
			data: formData,
		  })
			.then((res) => {
			  localStorage.setItem('AuthToken', `Bearer ${res.data.JWT}`);
			  history.push('/');
			  updateUser();
			})
			.catch((err) => {
			  console.log('Registration error:', err);
			});
	};

	return (
		<Form onSubmit={handleSubmit} className="border shadow-sm p-4 mt-4">
			<Form.Group className="pt-2" as={Row}>
			<Form.Label column xs={6} sm={4} md={6}>
				Username
			</Form.Label>
			<Col xs={6} sm={8} md={6}>
				<Form.Control
				type="text"
				name="username"
				placeholder="Your visible nickname"
				value={formData.username}
				onChange={handleChange}
				/>
				<div className="error">
					{errors.username && errors.username}
				</div>
			</Col>
			</Form.Group>

			<Form.Group id="register-email">
			<Form.Label>Email</Form.Label>
			<Form.Control
				type="email"
				name="email"
				placeholder="Enter email"
				value={formData.email}
				onChange={handleChange}
			/>
			<div className="error">
				{errors.email && errors.email}
			</div>
			</Form.Group>

			<Form.Group id="register-password">
			<Form.Label>Password</Form.Label>
			<Form.Control
				type="password"
				name="password"
				placeholder="Enter password"
				value={formData.password}
				onChange={handleChange}
			/>
			<div className="error">
				{errors.password && errors.password}
			</div>
			</Form.Group>

			<Form.Group id="register-confirm">
			<Form.Label>Confirm Password</Form.Label>
			<Form.Control
				type="password"
				name="confirmPassword"
				placeholder="Confirm password"
				value={formData.confirmPassword}
				onChange={handleChange}
			/>
			<div className="error">
				{errors.confirmPassword && errors.confirmPassword}
			</div>
			</Form.Group>

			<Button variant="primary" type="submit" block>
			Register
			</Button>
		</Form>
	);
};

export default withRouter(RegisterForm);
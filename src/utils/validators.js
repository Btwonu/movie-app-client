const isValidUsername = (username) => {
  return username.trim().length > 2 && username.trim().length < 33;
};

const isValidPassword = (password) => {
  return password.trim().length > 5;
};

const isEmail = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (!string || string.trim() === '') return true;
  else return false;
};

export const validateLoginData = (email, password) => {
  const errors = {};

  if (isEmpty(email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(email)) {
    errors.email = 'Must be a valid email address';
  }

  if (isEmpty(password)) {
    errors.password = 'Must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export const validateSignupData = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};

  if (isEmpty(email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(email)) {
    errors.email = 'Must be a valid email address';
  }

  if (!isValidUsername(username)) {
    errors.username = 'Username must contain between 3 and 32 characters';
  }

  if (!isValidPassword(password)) {
    errors.password = 'Password must be longer than 5 characters.';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  console.log(errors);

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

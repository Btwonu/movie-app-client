import React, { useState, useEffect, createContext, useContext } from 'react';

// import authService from '../services/authService';
import axios from 'axios';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    console.log('Went through to login!', { email, password });

    return axios({
      method: 'post',
      url: 'http://localhost:5001/movie-find-dev/europe-west1/api/auth/login',
      data: {
        email,
        password,
      },
    }).then((res) => {
      let token = `Bearer ${res.data.JWT}`;

      localStorage.setItem('AuthToken', token);

      axios.defaults.headers.common['Authorization'] = token;
    });

    // .catch((err) => {
    //   console.log('Login error:', err);
    //   // handle error
    //   // this.setState({
    //   //   errors: err.response.data,
    //   //   loading: false,
    //   // });
    // });
  };

  useEffect(() => {
    // sign up/login
    // set user
  }, []);

  const authContextValue = {
    user,
    loading,
    login,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);

// export default { AuthProvider, useAuth };

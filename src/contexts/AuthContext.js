import React, { useState, useEffect, createContext, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    return axios({
      method: 'post',
      url: '/auth/login',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem('AuthToken', `Bearer ${res.data.JWT}`);
        console.log('Login done!!!');
        setUser(res.data.userInfo);
      })
      .catch((err) => {
        console.log('Login error:', err);
        // handle error
        // this.setState({
        //   errors: err.response.data,
        //   loading: false,
        // });
      });
  };

  useEffect(() => {
    console.log('Context useEffect called');
    const token = localStorage.getItem('AuthToken');

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        console.log('Token has expired');
        // token expired
      } else {
        axios.defaults.headers.common['Authorization'] = token;

        axios({
          method: 'get',
          url: `/users/profile`,
        }).then((user) => {
          console.log('FROM AUTH CONTEXT:', user.data);
          setUser(user.data);
        });
      }
    }
  }, []);

  const logout = () => {
    setUser(null);
  };

  // useEffect(() => {
  //   // sign up/login
  //   // set user
  // }, []);

  const authContextValue = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

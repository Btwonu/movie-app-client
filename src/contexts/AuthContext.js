import React, { useState, useEffect, createContext, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Context useEffect called');
    updateUser();
  }, []);

  const updateUser = () => {
    setLoading(true);
    const token = localStorage.getItem('AuthToken');

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        console.log('Token has expired');
      } else {
        console.log('Token is OK');
        axios.defaults.headers.common['Authorization'] = token;

        axios({
          method: 'get',
          url: `/users/profile`,
        })
          .then((user) => {
            setUser(user.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log({ err });
          });
      }
    }
  };

  const login = (email, password) => {
    const data = { email, password };

    return axios({
      method: 'post',
      url: '/auth/login',
      data,
    }).then((res) => {
      localStorage.setItem('AuthToken', `Bearer ${res.data.JWT}`);
    });
  };

  const logout = () => {
    setUser(null);
  };

  // useEffect(() => {
  //   // sign up/login
  //   // set user
  // }, []);

  const authContextValue = {
    user,
    updateUser,
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

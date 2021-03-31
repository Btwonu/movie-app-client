import React, { useState, useEffect, createContext, useContext } from 'react';

// import authService from '../services/authService';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setUser({ name: 'Fake', surname: 'Faker' });
  };

  const logout = () => {
    setUser({});
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

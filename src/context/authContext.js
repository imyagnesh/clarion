import React, { createContext, useCallback, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json);

      sessionStorage.setItem('user', JSON.stringify(json));
      setUser(json);
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json);

      sessionStorage.setItem('user', JSON.stringify(json));
      setUser(json);
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

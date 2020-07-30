import React, { createContext, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext({
  isLoggedIn: false,
  onSignIn: () => {},
  onSignOut: () => {}
});

const AuthProvider = (props) => {
  const [cookies, setCookies, removeCookies] = useCookies(['tokenCookie']);
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.tokenCookie !== undefined);

  const onSignIn = (userId) => {
    setCookies('tokenCookie', userId, { path: '/' });
    setIsLoggedIn(true);
  };

  const onSignOut = () => {
    setIsLoggedIn(false);
    removeCookies('tokenCookie');
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onSignIn, onSignOut }}
      {...props}
    />
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

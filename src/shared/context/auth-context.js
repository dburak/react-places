import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  auth: null,
  login: () => {},
  logout: () => {},
});

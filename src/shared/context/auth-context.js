import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  auth: null,
  token: null,
  login: () => {},
  logout: () => {},
});

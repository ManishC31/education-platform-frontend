import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // functions to handle login and logout
  const login = (userData) => {
    console.log("inside login function :", userData);
    setUser(userData);
  };

  const register = (userData) => {
    console.log("inside register function :", userData);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

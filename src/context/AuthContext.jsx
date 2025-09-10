import { createContext, useContext, useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || "thisismytopsecretkey";

const encryptData = (dataToEncrypt) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), SECRET_KEY).toString();
  return ciphertext;
};

const decryptData = (encryptedData) => {
  if (!encryptedData) {
    console.warn("No data to decrypt");
    return null;
  }

  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        const decryptedUser = decryptData(savedUser);
        console.log("dec:", decryptedUser);

        if (decryptedUser) {
          setUser(decryptedUser);
        }
      } catch (error) {
        console.error("Error decrypting or parsing saved user data:", error);
        localStorage.removeItem("user");
      }
    }

    setIsLoadingUser(false);
  }, []);

  // functions to handle login and logout
  const login = (userData) => {
    console.log("inside login function :", userData);
    setUser(userData);

    const encryptedData = encryptData(userData);
    localStorage.setItem("user", encryptedData);
  };

  const register = (userData) => {
    console.log("inside register function :", userData);
    setUser(userData);

    const encryptedData = encryptData(userData);
    localStorage.setItem("user", encryptedData);
  };

  const logout = () => {
    console.log("inside logout function");
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ user, isLoadingUser, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

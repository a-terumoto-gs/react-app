import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [LoggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
  }

  return (
    <LoginContext.Provider value={{ LoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(LoginContext);
};

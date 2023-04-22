import { useApolloClient } from "@apollo/client";
import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const client = useApolloClient();

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  const removeAuth = () => {
    setIsAuth(false);
    window.sessionStorage.removeItem('token');
    client.resetStore();
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  );
};
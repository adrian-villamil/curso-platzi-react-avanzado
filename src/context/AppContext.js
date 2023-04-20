import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {children}
    </AppContext.Provider>
  );
};
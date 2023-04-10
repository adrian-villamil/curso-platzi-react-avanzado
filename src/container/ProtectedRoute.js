import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NoRegisteredUser } from "../pages/NoRegisteredUser";

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);

  if (!isAuth) {
    return <NoRegisteredUser />
  }
  
  return children;
};
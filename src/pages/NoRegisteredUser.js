import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <UserForm onSubmit={activateAuth} />
  );
};
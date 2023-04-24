import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SubmitButton } from "../components/SubmitButton";
import { Helmet } from "react-helmet-async";

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>Petgram - User Page</title>
        <meta name="description" content="Página de la cuenta del usuario" />
      </Helmet>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};
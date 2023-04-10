import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <form onSubmit={activateAuth}>
      <label htmlFor="">Iniciar sesión</label>
      <input type="submit" value='Iniciar Sesión' />
    </form>
  );
};
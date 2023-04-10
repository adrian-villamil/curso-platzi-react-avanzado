import React from "react";
import { useInputs } from "../../hooks/useInputs";

export const UserForm = ({ onSubmit }) => {
  const email = useInputs('');
  const password = useInputs('');

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        {...email}
      />
      <input
        type="password"
        placeholder="Password"
        {...password}
      />
      <input type="submit" id="submit" value='Iniciar Sesión' />
    </form>
  );
};
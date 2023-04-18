import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";
import { gql } from "@apollo/client";

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
      signup(input: $input)
    }
  `;

  const LOGIN = gql`
    mutation login($input: UserCredentials!) {
      login(input: $input)
    }
  `;

  return (
    <>
      <UserForm onSubmit={activateAuth} title={'Registrarse'} queryMutation={REGISTER} />
      <UserForm onSubmit={activateAuth} title={'Iniciar Sesión'} queryMutation={LOGIN} />
    </>
  );
};
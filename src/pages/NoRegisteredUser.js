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

  const submitRegister = (email, password, mutationFunction) => {
    mutationFunction({
      variables: {
        input: {
          email: email.value,
          password: password.value
        }
      }
    }).then((response) => {
      const { signup } = response.data;
      activateAuth(signup);
    });
  };

  const submitLogin = (email, password, mutationFunction) => {
    mutationFunction({
      variables: {
        input: {
          email: email.value,
          password: password.value
        }
      }
    }).then((response) => {
      const { login } = response.data;
      activateAuth(login);
    });
  };

  return (
    <>
      <UserForm onSubmit={submitRegister} title={'Registrarse'} queryMutation={REGISTER} />
      <UserForm onSubmit={submitLogin} title={'Iniciar Sesión'} queryMutation={LOGIN} />
    </>
  );
};
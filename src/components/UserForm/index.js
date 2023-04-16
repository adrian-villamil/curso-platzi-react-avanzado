import React from "react";
import { useInputs } from "../../hooks/useInputs";
import { Button, Form, Input, Title } from "./styles";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const UserForm = ({ onSubmit, title }) => {
  const [registerUser, { data, loading, error }] = useMutation(REGISTER);
  const email = useInputs('');
  const password = useInputs('');

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error: {error.message}</p>

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser({
      variables: {
        input: {
          email: email.value,
          password: password.value
        }
      }
    }).then(onSubmit);
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          {...email}
        />
        <Input
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};
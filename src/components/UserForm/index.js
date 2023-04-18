import React from "react";
import { useInputs } from "../../hooks/useInputs";
import { Alert, Button, Form, Input, Title } from "./styles";
import { useMutation } from "@apollo/client";

export const UserForm = ({ onSubmit, title, queryMutation }) => {
  const [mutationFunction, { data, loading, error }] = useMutation(queryMutation);
  const email = useInputs('');
  const password = useInputs('');

  if (loading) return <p>Submitting...</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    mutationFunction({
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
      {!!error && <Alert>Submission error: {error.message}</Alert>}
    </>
  );
};
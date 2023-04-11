import React from "react";
import { useInputs } from "../../hooks/useInputs";
import { Button, Form, Input, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputs('');
  const password = useInputs('');

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
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
        <Button>{title}</Button>
      </Form>
    </>
  );
};
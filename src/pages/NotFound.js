import React from "react";
import { FaDog } from 'react-icons/fa';
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: blue; */
  width: 500px;
  height: 400px;
`;

const IconWrapper = styled.div`
  height: 300px;
  position: relative;
  /* background-color: red; */
`;

const DogIcon = styled(FaDog)`
  position: absolute;
  left: 100px;
  bottom: 10px;
  font-size: 6em;
  color: #181818;
`;

const Icon404 = styled.span`
  position: absolute;
  top: 20px;
  right: 70px;
  font-size: 6em;
  font-family: fantasy;
  border: 12px solid #181818;
  border-radius: 50%;
  padding: 20px;
  color: #181818;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50px;
    border-color: transparent;
    border-right: #181818;
    border-style: solid;
    border-width: 16px 40px;
    transform: rotate(-38deg) translate(-10px, 20px);
  }
`;

const Title = styled.h3`
  text-align: center;
  color: #181818;
  font-size: 1.5em;
`;

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <IconWrapper>
        <DogIcon />
        <Icon404>404</Icon404>
      </IconWrapper>
      <Title>There is nothing here: Page Not Found!</Title>
    </NotFoundWrapper>
  );
};
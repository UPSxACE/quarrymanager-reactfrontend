import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
export { PrimaryButton, ButtonSubmit, LoginButtonSubmit };

// BOTÃO DO LOGIN NAVBAR
function PrimaryButtonBase(props) {
  return (
    <Button className={props.className} variant="light">
      {props.children}
    </Button>
  );
}
const PrimaryButton = styled(PrimaryButtonBase)`
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  border: 0;
  font-size: 1.25rem;

  &:active {
    color: black;
    background-color: #dae0e5;
    border: 0;
  }

  &:hover {
    color: black;
    background-color: #dae0e5;
    border: 0;
  }

  &:focus {
    color: black;
    background-color: #dae0e5;
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }
`;

// BOTÃO SUBMIT (ENVIAR)
function ButtonSubmitBase(props) {
  return <Button className={props.className}>{props.children}</Button>;
}
const ButtonSubmit = styled(ButtonSubmitBase)`
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (props.black ? "white" : "black")};
  border: 0;
  border-radius: 0;

  &:active {
    color: #fff;
    background-color: black;
    border: 0;
  }

  &:hover {
    color: #fff;
    background-color: black;
    border: 0;
  }

  &:focus {
    color: #fff;
    background-color: black;
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }
`;

//BOTÃO ENTER LOGIN

function LoginButton(props) {
  return (
    <Button className={props.className} variant="light">
      {props.children}
    </Button>
  );
}
const LoginButtonSubmit = styled(LoginButton)`
  background-color: #30373e;
  color: white;
  border-radius: 17px;
  border: 0;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));

  &:active {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
  }

  &:hover {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
  }

  &:focus {
    color: #fff;
    background-color: #4c4f52;
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }
`;

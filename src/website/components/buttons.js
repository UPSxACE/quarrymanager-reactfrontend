import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
export { PrimaryButton, ButtonSubmit };

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
`;

// BOTÃO SUBMIT (ENVIAR)
function ButtonSubmitBase(props) {
  return <Button className={props.className}>{props.children}</Button>;
}
const ButtonSubmit = styled(ButtonSubmitBase)`
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (props.black ? "white" : "black")};
  border: 0;

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

//BOTÃO DO LOGIN

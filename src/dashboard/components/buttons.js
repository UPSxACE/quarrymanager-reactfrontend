import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
export { PrimaryButtonSave, SecundaryButtonCancel };

//BOTÃO ENVIAR/DASHBOARD
function PrimaryButtonSave(props) {
  return (
    <SaveButton
      onClick={props.onClick}
      className={props.className}
      variant="light"
    >
      {props.children}
    </SaveButton>
  );
}
const SaveButton = styled(Button)`
  color: white;
  background-color: #004b5b;
  border: 1px solid #004b5b;
  font-size: 1.25rem;

  &:active {
    color: black;
    background-color: #dae0e5;
    border: 1px solid #dae0e5;
  }

  &:hover {
    color: white;
    background-color: #009a78;
    border: 1px solid #009a78;
  }

  &:focus {
    color: black;
    background-color: #dae0e5;
    border: 1px solid #004b5b;
    box-shadow: 0 0 0 0rem rgb(0 0 0 / 0%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0rem rgb(0 0 0 / 0%);
  }
`;

//BOTÃO CANCELAR/DASHBOARD
function SecundaryButtonCancel(props) {
  return (
    <CancelButton className={props.className}>{props.children}</CancelButton>
  );
}

const CancelButton = styled(Button)`
  color: #004b5b;
  background-color: transparent;
  border-color: #004b5b;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  border: 2;
  font-size: 1.25rem;

  &:active {
    color: #004b5b;
    border: 1px solid #009a78;
  }

  &:hover {
    color: #004b5b;
    border: 1px solid #004b5b;
    background-color: #057a81;
  }

  &:focus {
    color: #004b5b;
    border: 0;
    box-shadow: 0 0 0 0rem rgb(0 0 0 / 0%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0rem rgb(0 0 0 / 0%);
  }

  &.btn-primary:hover {
    background-color: transparent !important;
    border: 1px solid #004b5b;
  }

  &.btn-primary:active {
    background-color: transparent !important;
    border: 1px solid #004b5b;
  }

  &.btn-primary:focus {
    background-color: transparent !important;
    border: 1px solid #004b5b;
  }
`;

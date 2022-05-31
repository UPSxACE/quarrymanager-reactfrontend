import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export { ColoredContainer, ColoredRow, ColoredCol };

const ColoredContainer = styled(Container)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      case 2:
        return "#30373E";
      case 3:
        return "#5e666d";
      default:
        return "#394a58";
    }
  }};

  &.dropShadow25 {
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  }
  &.borderBlack {
    border: 1px solid black;
  }
`;

const ColoredRow = styled(Row)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      case 2:
        return "#30373E";
      case 3:
        return "#5e666d";
      default:
        return "#394a58";
    }
  }};

  &.dropShadow25 {
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  }
  &.borderBlack {
    border: 1px solid black;
  }
`;

const ColoredCol = styled(Col)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      case 2:
        return "#30373E";
      case 3:
        return "#5e666d";
      default:
        return "#394a58";
    }
  }};

  &.dropShadow25 {
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
  }
  &.borderBlack {
    border: 1px solid black;
  }
`;

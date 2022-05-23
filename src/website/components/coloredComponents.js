import { Container } from "react-bootstrap";
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
      default:
        return "#394a58";
    }
  }};
`;

const ColoredRow = styled(Container)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      default:
        return "#394a58";
    }
  }};
`;

const ColoredCol = styled(Container)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      default:
        return "#394a58";
    }
  }};
`;

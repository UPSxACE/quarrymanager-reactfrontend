import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export { ColoredContainer, ColoredRow, ColoredCol };

const ColoredContainer = styled(Container)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      case 3:
        return "#5e666d";
      default:
        return "#394a58";
    }
  }};
`;

const ColoredRow = styled(Row)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      default:
        return "#394a58";
    }
  }};
`;

const ColoredCol = styled(Col)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      default:
        return "#394a58";
    }
  }};
`;

import { Container } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export { ColoredContainer };

const ColoredContainer = styled(Container)`
  background-color: ${(props) => {
    switch (props.variant) {
      case 1:
        return "#394a58";
      default:
        return "#394a58";
    }
  }};
`;

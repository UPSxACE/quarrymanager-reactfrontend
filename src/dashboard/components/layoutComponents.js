import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export { DashboardContainer, DashboardRow, DashboardCol };

const DashboardContainer = styled(Container)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DashboardRow = styled(Row)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DashboardCol = styled(Col)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

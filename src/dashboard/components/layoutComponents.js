import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export {};

const DashboardContainer = styled(Container)`
  background-color: ${(props) => (props.dark ? "grey" : "white")};
`;

const DashboardRow = styled(Row)`
  background-color: ${(props) => (props.dark ? "grey" : "white")};
`;

const DashboardCol = styled(Col)`
  background-color: ${(props) => (props.dark ? "grey" : "white")};
`;

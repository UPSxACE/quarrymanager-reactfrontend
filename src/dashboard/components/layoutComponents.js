import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export {
  DashboardContainer,
  DashboardRow,
  DashboardCol,
  H1,
  H2,
  H3,
  H5,
  Paragraph,
};

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

const textColor1 = "#004B5B"; // verde escuro

const H1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "40px",
  textAlign: props.textAlign,
}));

const H2 = styled.h2((props) => ({
  color: textColor1,
  fontSize: "32px",
  textAlign: props.textAlign,
}));

const Paragraph = styled.p((props) => ({
  color: textColor1,
  fontSize: "19px",
  textAlign: "justify",
  fontWeight: props.fontWeight,
  fontStyle: props.fontStyle,
}));

const H3 = styled.h3((props) => ({
  color: textColor1,
  fontSize: "28px",
}));

const H5 = styled.h5((props) => ({
  color: props.orange ? "#d69b7f" : "white",

  fontSize: "20px",
  fontWeight: "normal",
  textAlign: props.textAlign,
}));

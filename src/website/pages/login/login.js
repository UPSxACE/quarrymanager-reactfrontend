import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";
export { Login };

function Login() {
  return (
    <Container fluid>
      <StyledRowLight>
        <CardBodyRow>
          <Col xs={12} className={"g-0 pb-5 pt-3 ps-5 pe-5"}>
            <H1 textAlign={"center"}>LOGIN</H1>
            <br></br>
          </Col>
        </CardBodyRow>
      </StyledRowLight>
    </Container>
  );
}

const StyledRowLight = styled(Row)`
  background-color: #394a58;
`;

const CardBodyRow = styled(Row)`
  background-color: #5e666d;
`;

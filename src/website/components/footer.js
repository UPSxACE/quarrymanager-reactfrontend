import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
export { Footer };

function Footer() {
  return (
    <FooterBase>
      <Container fluid>
        <Row>
          <Col xs={3}>a</Col>
          <Col xs={9}>v</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <HorizontalUl>
              <ClickableLi href="#">
                <Li>Termos & Condições</Li>
              </ClickableLi>
              <ClickableLi href="#">
                <Li>Politica & Privacidade</Li>
              </ClickableLi>
            </HorizontalUl>
          </Col>
        </Row>
      </Container>
    </FooterBase>
  );
  /*return (
    <footer className="container-fluid">
      AAAA
    </footer>
  );*/
}

const FooterBase = styled.footer`
  background-color: #30373e;
`;

const HorizontalUl = styled.ul`
  display: flex;
  padding: 0;
  justify-content: end;
  list-style: none;
`;

const Li = styled.li`
  color: white;
  font-size: 16px;
`;

const ClickableLi = styled.a`
  text-decoration: none;

  &: not(: first-child) {
    padding-left: 15px;
  } ;
`;

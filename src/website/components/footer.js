import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import wRLogo from "../../img/website/wR.png";
import { Paragraph } from "./text";

export { Footer };

function Footer() {
  return (
    <FooterBase>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <div>
              <WRLogo src={wRLogo} />
              <Paragraph>
                Orientados por um obetivo comum, e partilhado com alegria
                entusiasmo e paixão pelo que fazemos
              </Paragraph>
            </div>
          </Col>
          <Col xs={9}>
            <Container fluid>
              <Row>
                <Col xs={3}>
                  <TightList></TightList>
                </Col>
                <Col xs={3}></Col>
                <Col xs={3}></Col>
                <Col xs={3}></Col>
              </Row>
            </Container>
          </Col>
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
  margin-bottom: 8px;
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

const WRLogo = styled.img`
  height: 90px;
`;

const TightList = styled.div``;

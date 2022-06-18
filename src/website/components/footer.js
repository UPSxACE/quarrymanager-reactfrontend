import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import wRLogo from "../../img/website/wR.png";
import { Paragraph } from "./text";
import { H1 } from "./text";
import { Link } from "react-router-dom";

export { Footer };

function Footer() {
  return (
    <FooterBase>
      <Container fluid>
        <Row className="pt-5 pb-5">
          <Col xs={3}>
            <div className="ps-4 pe-4">
              <WRLogo src={wRLogo} />
              <LogoText>
                Orientados por um obetivo comum, e partilhado com alegria
                entusiasmo e paixão pelo que fazemos
              </LogoText>
            </div>
          </Col>
          <Col xs={9}>
            <Container fluid>
              <Row>
                <Col xs={3} className="d-flex justify-content-center">
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Serviços</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable to="/parceiros">
                          <FooterListItem>Parceiros</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="#">
                          <FooterListItem>Loja</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Acerca de</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable to="/equipa">
                          <FooterListItem>Equipa</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="/criadores">
                          <FooterListItem>Criadores</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="/pedreiras">
                          <FooterListItem>Pedreiras</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Segue-nos</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable to="#">
                          <FooterListItem>Facebook</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="#">
                          <FooterListItem>Instagram</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="#">
                          <FooterListItem>Twitter</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Ajuda</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable to="/contactos">
                          <FooterListItem>Contacte-nos</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable to="/faq">
                          <FooterListItem>FAQ</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <HorizontalUl>
              <ClickableLi to="#">
                <Li>Termos & Condições</Li>
              </ClickableLi>
              <ClickableLi to="#">
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

const ClickableLi = styled(Link)`
  text-decoration: none;

  &: not(: first-child) {
    padding-left: 15px;
  } ;
`;

const WRLogo = styled.img`
  height: 90px;
`;

const TightList = styled.div`
  width: max-content;
`;

const ListHeader = styled.div``;

const WhiteLine = styled.span`
  font-size: 2px;
  padding-left: 100%;
  background-color: white;
`;

const ListHeaderTitle = styled(H1)`
  line-height: 16px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0px;
`;

const FooterListClickable = styled(Link)`
  text-decoration: none;
`;

const FooterListItem = styled.li`
  color: white;
`;

const LogoText = styled.p`
  color: white;
  font-size: 20px;
  line-height: 19px !important;
`;

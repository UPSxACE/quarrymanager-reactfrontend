import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import wRLogo from "../../img/website/wR.png";
import { Paragraph } from "./text";
import { H1 } from "./text";

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
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Serviços</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable href="#">
                          <FooterListItem>Parceiros</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
                          <FooterListItem>Loja</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3}>
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Acerca de</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable href="#">
                          <FooterListItem>Equipa</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
                          <FooterListItem>Criadores</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
                          <FooterListItem>Pedreiras</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3}>
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Segue-nos</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable href="#">
                          <FooterListItem>Facebook</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
                          <FooterListItem>Instagram</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
                          <FooterListItem>Twitter</FooterListItem>
                        </FooterListClickable>
                      </FooterList>
                    </ListHeader>
                  </TightList>
                </Col>
                <Col xs={3}>
                  <TightList>
                    <ListHeader>
                      <ListHeaderTitle>Ajuda</ListHeaderTitle>
                      <WhiteLine />
                      <FooterList>
                        <FooterListClickable href="#">
                          <FooterListItem>Contacte-nos</FooterListItem>
                        </FooterListClickable>
                        <FooterListClickable href="#">
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

const TightList = styled.div`
  width: max-content;
g`;

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

const FooterListClickable = styled.a`
  text-decoration: none;
`;

const FooterListItem = styled.li`
  color: white;
`;

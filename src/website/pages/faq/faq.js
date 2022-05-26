import React, { useState } from "react";
import { Accordion, Row, Col, AccordionButton } from "react-bootstrap";
import { DisplayH1, Paragraph, H2, H1 } from "../../components/text";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import faqPicture from "../../../images/website/faqPicture.jpg";
import transferirPic from "../../../images/website/seta.png";

export { Faq };

function Faq() {
  return (
    <ColoredContainer fluid>
      <Row>
        <Col xs={12} className="g-0">
          <FaqPicture src={faqPicture}></FaqPicture>
        </Col>
        <Col xs={12} className="ps-5 pt-4 pb-3">
          <DisplayH1>Questões Frequentes</DisplayH1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="ps-5 pb-5 pe-5">
          <Accordion defaultActiveKey="0">
            <AccordionItem eventKey="0">
              <AccordionHeader>Sobre o Ambiente</AccordionHeader>
              <AccordionBody>
                <H2>1. A pedra é ecossustentável?</H2>
                <Paragraph>
                  A pedra é extraída e processada de forma ecossustentável
                  porque não são utilizados aditivos ou substâncias não
                  naturais. Além disso todos os materiais são testados e
                  submetidos a inúmeros controles a fim de garantir que como
                  produto natural seja 100% green. Porque escolher a pedra
                  natural? Como todos os produtos naturais, a pedra tem a grande
                  qualidade de ser única. Cada bloco tem um seu desenho natural
                  e irrepetível que permite dar a cada ambiente uma sua
                  aparência única. Os veios, os claro-escuros, os movimentos
                  naturais das tonalidades que irão escolher para o próprio
                  projeto o vestirão de forma exclusiva, como uma roupa que não
                  teme as modas ou os estilos. Escolher a pedra natural
                  significa escolher a elegância e o requinte de um material
                  único fazendo com que cada projeto seja excepcional. Porque
                  escolher a pedra natural? <br></br>
                </Paragraph>
                <H2>2. Porque escolher a pedra natural?</H2>
                <Paragraph>
                  Como todos os produtos naturais, a pedra tem a grande
                  qualidade de ser única. Cada bloco tem um seu desenho natural
                  e irrepetível que permite dar a cada ambiente uma sua
                  aparência única. Os veios, os claro-escuros, os movimentos
                  naturais das tonalidades que irão escolher para o próprio
                  projeto o vestirão de forma exclusiva, como uma roupa que não
                  teme as modas ou os estilos. Escolher a pedra natural
                  significa escolher a elegância e o requinte de um material
                  único fazendo com que cada projeto seja excepcional.
                </Paragraph>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader>Sobre a Pedra</AccordionHeader>
              <AccordionBody>
                <H2>1. Sobre a Pedra</H2>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. >
                </Paragraph>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="2">
              <AccordionHeader>Sobre Nós</AccordionHeader>
              <AccordionBody>
                <H2>1. Sobre Nós</H2>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Paragraph>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
      </Row>
    </ColoredContainer>
  );
}

const FaqPicture = styled.img`
  max-width: 100%;
`;

const AccordionBody = styled(Accordion.Body)`
  background-color: #5e666d;
`;

const AccordionHeader = styled(Accordion.Header)`
  background-color: #30373e;
`;

const AccordionItem = styled(Accordion.Item)`
  Button {
    background-color: #30373e;
    color: white;
  }

  Button[aria-expanded="true"] {
    background-color: #30373e;
    color: white;
  }

  Button:not(.collapsed)::after {
    background-image: url(${transferirPic});
  }

  Button::after {
    background-image: url(${transferirPic});
  }
  Button:focus {
    box-shadow: 0 0 0 0.25rem rgb(208 128 21 / 4%);
  }
`;

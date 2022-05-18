import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H3 } from "../../components/text";
import styled from "styled-components";
import mainPicture from "../../../images/website/mainPicture.jpg";
import indexPic1 from "../../../images/website/indexPic1.png";
import indexPic2 from "../../../images/website/indexPic2.png";
export { Home };

function Home() {
  return (
    <Container fluid className="main">
      <Row>
        <Col xs={12}>
          <MainPicture src={mainPicture}></MainPicture>
        </Col>
      </Row>
      <SloganRow></SloganRow>
      <TextImageRow></TextImageRow>
      <TextImageRow2></TextImageRow2>
    </Container>
  );
}

const MainPicture = styled.img`
  height: calc((100vh - 80px) * 0.85);
  width: 100%;
  object-fit: cover;
`;

const SloganRow = styled(SloganContainer)`
  background-color: #394a58;
`;

function SloganContainer(props) {
  return (
    <Row className={props.className}>
      <Col xs={6}>
        <DisplayH1>
          <strong>weDELIVER</strong>
          <H1>Somos nós que entregamos</H1>
        </DisplayH1>
      </Col>
      <Col xs={6}>
        <DisplayH1>
          <strong>weDELIVER</strong>
          <H1>Garantimos a qualidade do serviço</H1>
        </DisplayH1>
      </Col>
    </Row>
  );
}

const TextImageRow = styled(TextImageRowContainer)`
  background-color: #30373e;
  height: 425px;
`;

function TextImageRowContainer(props) {
  return (
    <Row className={props.className}>
      <Col xs={4}>
        <H2>PRODUTO SEMPRE COM A MELHOR QUALIDADE!</H2>
        <Paragraph>
          A extracção de pedra natural é o que a weROCK faz há mais de 50 anos,
          com diversas pedreiras a nivél nacional. Fazemos de tudo para oferecer
          sempre aos nossos clientes rochas ornamentais de reconhecida qualidade
          e uma elevada capacidade de produção para grandes projectos.
        </Paragraph>
      </Col>
      <Col xs={8}>
        <IndexPic1 src={indexPic1}></IndexPic1>
      </Col>
    </Row>
  );
}

const IndexPic1 = styled.img`
  height: 425px;
  width: 100%;
  object-fit: cover;
`;

const TextImageRow2 = styled(TextImageRowContainer2)`
  background-color: #30373e;
  height: 425px;
`;

function TextImageRowContainer2(props) {
  return (
    <Row className={props.className}>
      <Col xs={8}>
        <IndexPic2 src={indexPic2}></IndexPic2>
      </Col>
      <Col xs={4}>
        <H2>RESPONSABILIDADE E DETERMINAÇÃO</H2>
        <Paragraph>
          Dominamos a arte de arrancar pedra, acumulamos uma experiência
          inestimável e temos sempre a mesma energia e a motivação, desde o dia
          em que a empresa abriu , para trazermos aos nossos clientes as
          melhores extrações que pode encontrar em Portugal.
        </Paragraph>
      </Col>
    </Row>
  );
}

const IndexPic2 = styled.img`
  height: 425px;
  width: 100%;
  object-fit: cover;
`;

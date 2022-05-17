import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H3 } from "../../components/text";
import styled from "styled-components";
import mainPicture from "../../../images/website/mainPicture.jpg";
import indexPic1 from "../../../images/website/indexPic1.png";
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

      <Row>
        <TextImageRow>
          <Col xs={4}>
            <H2>PRODUTO SEMPRE COM A MELHOR QUALIDADE!</H2>
            <Paragraph>
              A extracção de pedra natural é o que a weROCK faz há mais de 50
              anos, com diversas pedreiras a nivél nacional. Fazemos de tudo
              para oferecer sempre aos nossos clientes rochas ornamentais de
              reconhecida qualidade e uma elevada capacidade de produção para
              grandes projectos.
            </Paragraph>
          </Col>
          <Col xs={6}>
            <IndexPic1 src={indexPic1}></IndexPic1>
          </Col>
        </TextImageRow>
      </Row>
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

const TextImageRow = styled.div`
  background-color: #30373e;
`;

const IndexPic1 = styled.img`
  height: inherit;
  width: 100%;
  object-fit: cover;
`;

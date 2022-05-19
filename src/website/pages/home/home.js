import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H3 } from "../../components/text";
import styled from "styled-components";
import mainPicture from "../../../images/website/mainPicture.jpg";
import indexPic1 from "../../../images/website/indexPic1.png";
import indexPic2 from "../../../images/website/indexPic2.png";
import parceriaPic from "../../../images/website/parcerias.png";
import rapidezPic from "../../../images/website/rapidez.png";
import segurancaPic from "../../../images/website/seguranca.png";
import {
  ButtonSubmit,
  LoginButtonSubmit,
  PrimaryButton,
} from "../../components/buttons";
export { Home };

function Home() {
  return (
    <Container fluid className="main">
      <Row>
        <Col xs={12} className={"g-0"}>
          <MainPicture src={mainPicture}></MainPicture>
        </Col>
      </Row>
      <StyledRowSlogan>
        <Col xs={6} className={"pb-4 pt-4"}>
          <DisplayH1 textAlign={"center"}>
            <strong>weDELIVER</strong>
          </DisplayH1>
          <H1 textAlign={"center"}>Somos nós que entregamos</H1>
        </Col>
        <Col xs={6} className={"pb-4 pt-4"}>
          <DisplayH1 textAlign={"center"}>
            <strong>weDELIVER</strong>
          </DisplayH1>
          <H1 textAlign={"center"}>Garantimos a qualidade do serviço</H1>
        </Col>
      </StyledRowSlogan>
      <StyledRowText1>
        <Col
          xs={4}
          className="d-flex flex-column justify-content-center pe-5 ps-5"
        >
          <H2 textAlign={"center"}>PRODUTO SEMPRE COM A MELHOR QUALIDADE!</H2>
          <Paragraph>
            A extracção de pedra natural é o que a weROCK faz há mais de 50
            anos, com diversas pedreiras a nivél nacional. Fazemos de tudo para
            oferecer sempre aos nossos clientes rochas ornamentais de
            reconhecida qualidade e uma elevada capacidade de produção para
            grandes projectos.
          </Paragraph>
        </Col>
        <Col xs={8} className={"g-0"}>
          <IndexPic1 src={indexPic2}></IndexPic1>
        </Col>
      </StyledRowText1>
      <StyledRowText2>
        <Col xs={8} className={"g-0"}>
          <IndexPic2 src={indexPic1}></IndexPic2>
        </Col>
        <Col
          xs={4}
          className="d-flex flex-column justify-content-center pe-5 ps-5"
        >
          <H2 textAlign={"center"}>RESPONSABILIDADE E DETERMINAÇÃO</H2>
          <Paragraph>
            Dominamos a arte de arrancar pedra, acumulamos uma experiência
            inestimável e temos sempre a mesma energia e a motivação, desde o
            dia em que a empresa abriu, para trazermos aos nossos clientes as
            melhores extrações que pode encontrar em Portugal.
          </Paragraph>
        </Col>
      </StyledRowText2>
      <StyledRowMessages>
        <Col xs={4} className="pe-5 ps-5">
          <div className="d-flex justify-content-center pt-5 pb-3">
            <ParceriaPic src={parceriaPic}></ParceriaPic>
          </div>
          <H1>Parcerias sem igual:</H1>
          <Paragraph>
            A união traz a força e hoje podemos afirmar que temos do nosso lado
            o melhor grupo de aliados, todos com um mesmo objetivo em comum:
            Eficácia.
          </Paragraph>
        </Col>
        <Col xs={4} className="pe-5">
          <div className="d-flex justify-content-center pt-5 pb-3">
            <RapidezPic src={rapidezPic}></RapidezPic>
          </div>
          <H1>Rapidez na Entrega:</H1>
          <Paragraph>
            Entregamos para toda a Europa, de Norte a Sul, sempre cumprindo os
            prazos acordados com o cliente.
          </Paragraph>
        </Col>
        <Col xs={4} className="pe-5">
          <div className="d-flex justify-content-center pt-5 pb-3">
            <SegurancaPic src={segurancaPic}></SegurancaPic>
          </div>
          <H1>Segurança no Trabalho:</H1>
          <Paragraph>
            Asseguramos as condições necessárias, desenvolvemos condições
            técnicas e formamos os trabalhadores no domínio da segurança e saúde
            no trabalho.
          </Paragraph>
        </Col>
      </StyledRowMessages>
    </Container>
  );
}

const MainPicture = styled.img`
  height: calc((100vh - 175px) * 0.85);
  width: 100%;
  object-fit: cover;
`;

const StyledRowSlogan = styled(Row)`
  background-color: #394a58;
`;

const StyledRowText1 = styled(Row)`
  background-color: #30373e;
  height: 350px;
`;

const IndexPic1 = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const StyledRowText2 = styled(Row)`
  background-color: #30373e;
  height: 350px;
`;

const IndexPic2 = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const StyledRowMessages = styled(Row)`
  background-color: #394a58;
`;

const ParceriaPic = styled.img`
  width: ;
  height: 100px;
`;

const RapidezPic = styled.img`
  width: ;
  height: 100px;
`;

const SegurancaPic = styled.img`
  width: ;
  height: 100px;
`;

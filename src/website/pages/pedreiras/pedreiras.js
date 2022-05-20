import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import pedreiraMoca from "../../../images/website/pedreiraMoca.PNG";
import pedreiraMoleanos from "../../../images/website/pedreiraMoleanos.PNG";
import pedreiraAtaija from "../../../images/website/pedreiraAtaija.PNG";
import pedreiraSalgueira from "../../../images/website/pedreiraSalgueira.PNG";

import styled from "styled-components";
export { Pedreiras };

function Pedreiras() {
  return (
    <Container fluid>
      <StyledRowLight>
        <Col xs={12} className={"g-0 pb-5 pt-3 ps-5 pe-5"}>
          <DisplayH1 textAlign={"center"}>As nossas Pedreiras</DisplayH1>
          <br></br>
          <H5 textAlign={"center"}>
            A extracção de pedra natural é o que a WeRock faz desde há mais de
            50 anos, com diversas pedreiras no Maciço Calcário Estremenho.
            Sempre primámos por oferecer aos nossos clientes rochas ornamentais
            de reconhecida qualidade e uma elevada capacidade de produção para
            grandes projectos.
          </H5>
        </Col>
      </StyledRowLight>

      <StyledRowDark>
        <Col xs={6} className={"g-0"}>
          <PedreiraPicture src={pedreiraMoleanos}></PedreiraPicture>
        </Col>
        <Col xs={6} className={"pe-3 pt-3 ps-3"}>
          <H3>Pedreira de Moleanos</H3>
          <Paragraph fontWeight="Lighter">
            Esta é a pedreira do verdadeiro calcário Moleanos Gascogne, nas suas
            tonalidades azul e beige, que deram projecção mundial à Farpedra.
            Actualmente desta pedreira, que já atinge mais de 40 m de
            profundidade, já se extraem mais de doze massas distintas de
            calcários.
          </Paragraph>
        </Col>
      </StyledRowDark>

      <StyledRowLight>
        <Col xs={6} className={"g-0"}>
          <PedreiraPicture src={pedreiraAtaija}></PedreiraPicture>
        </Col>
        <Col xs={6} className={"pe-3 pt-3 ps-3"}>
          <H3>Pedreira de Ataija</H3>
          <Paragraph fontWeight="Lighter">
            Na Ataíja temos a pedreira com a maior capacidade de produção desta
            pedra, de onde extraímos as pedras Ataíja Creme e Ataíja Azul, bem
            como o Ataíja bicolor que vem cativando cada vez os nossos clientes.
          </Paragraph>
        </Col>
      </StyledRowLight>

      <StyledRowDark>
        <Col xs={6} className={"g-0"}>
          <PedreiraPicture src={pedreiraMoca}></PedreiraPicture>
        </Col>
        <Col xs={6} className={"pe-3 pt-3 ps-3"}>
          <H3>Pedreira de Moca</H3>
          <Paragraph fontWeight="Lighter">
            No núcleo da Moca possuímos pedreira desta pedra natural, de onde
            arrancamos a variedade Moca de grão médio.
          </Paragraph>
        </Col>
      </StyledRowDark>

      <StyledRowLight>
        <Col xs={6} className={"g-0"}>
          <PedreiraPicture src={pedreiraSalgueira}></PedreiraPicture>
        </Col>
        <Col xs={6} className={"pe-3 pt-3 ps-3"}>
          <H3>Pedreira de Salgueira</H3>
          <Paragraph fontWeight="Lighter">
            No alto da Serra dos Candeeiros, possuímos pedreira de semi-rijo
            Branco do Mar na Salgueira, que se distingue pela sua qualidade.
          </Paragraph>
        </Col>
      </StyledRowLight>
    </Container>
  );
}

const StyledRowLight = styled(Row)`
  background-color: #394a58;
`;

const StyledRowDark = styled(Row)`
  background-color: #30373e;
`;

const PedreiraPicture = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

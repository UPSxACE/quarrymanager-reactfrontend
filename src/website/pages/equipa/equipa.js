import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";
import wRLogo from "../../../images/website/wR.png";
export { Equipa };

function Equipa() {
  return (
    <Container fluid>
      <StyledRowLight className="stretch">
        <Col xs={12} className={"g-0 pb-5 pt-3 ps-5 pe-5"}>
          <DisplayH1 textAlign={"center"}>A Nossa Equipa</DisplayH1>
          <br></br>
          <WRLogo src={wRLogo} className={"pe-3"} />
          <Paragraph textAlign={"justify"}>
            Na WeRock caminhamos todos na mesma direção, orientados por um
            objetivo comum e partilhado, com alegria, entusiamo e paixão pelo
            que fazemos, criando a força necessária para o nosso crescimento.
            Saber trabalhar em equipa é garantir simultaneamente o sucesso
            coletivo, mas também o individual. <br />
            <br /> A força e querer das nossas individualidades ao serviço da
            equipa, é um fator diferenciador que distingue a nossa empresa.
            Prestar o melhor serviço ao cliente, significa não só apresentar as
            melhores soluções, oferecer preços competitivos, dispor das melhores
            ferramentas, mas além de tudo, ter uma equipa qualificada e motivada
            para sentir as suas necessidades. <br />
            <br /> Uma equipa motivada não só produz mais, produz de forma
            eficiente, objetiva e orientada. Avaliamos as necessidades dos
            clientes e arquitetamos as soluções que melhor se adequam aos
            desafios que nos colocam. Para isso, é preciso escutar e sentir o
            cliente, desenhando em parceria soluções alternativas. <br />
            <br /> Na WeRock não pretendemos, nem oferecemos, um fato igual para
            todas as medidas. Acreditamos na diferenciação, adequando a nossa
            oferta a cada tipo de desafio apresentado. <br />
            <br />
            Só conseguimos atingir este nível de qualidade de serviço com
            colaboradores diariamente motivados, com um gosto especial pelo que
            fazem e com um espírito e atitude positiva perante os obstáculos com
            que se deparam. <br />
            <br /> A porta do gabinete está sempre aberta e estamos disponíveis
            para falar sobre qualquer assunto.
          </Paragraph>
        </Col>
      </StyledRowLight>
    </Container>
  );
}

const StyledRowLight = styled(Row)`
  background-color: #394a58;
`;

const WRLogo = styled.img`
  height: 60px;
  float: left;
`;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, Paragraph, H5, H3, H1, H2 } from "../../components/text";
import styled from "styled-components";
import moniquePic from "../../../images/website/monique.jpg";
import eduardoPic from "../../../images/website/eduardo.jpg";
import diogoPic from "../../../images/website/ceo1.jpg";
import miguelPic from "../../../images/website/ceo2.jpg";
import { ColoredContainer } from "../../components/coloredComponents";
export { Criadores };

function Criadores() {
  return (
    <ColoredContainer fluid className={"stretch"}>
      <StyledRow>
        <Col xs={12} className={"pb-4 pt-4 ps-5 pe-5"}>
          <DisplayH1 textAlign={"left"}>NOSSA EQUIPA</DisplayH1>

          <H5 textAlign={"left"}>
            Nossa equipe é formada por profissionais comprometidos com
            excelência nas realizações de suas atividades e focados nas
            necessidades de nossos clientes.
          </H5>
          <br></br>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={2} className={"ps-5 pb-5"}>
          <CeoPicture src={eduardoPic}></CeoPicture>
        </Col>
        <Col xs={4}>
          <H2>Eduardo Botelho</H2>
          <H5 orange>Sócio-fundador da WeRock</H5>
          <Paragraph fontWeight="Lighter" fontStyle="italic">
            “Devemos sonhar os nossos próprios sonhos”
          </Paragraph>
        </Col>
        <Col xs={2} className={"ps-5"}>
          <CeoPicture src={moniquePic}></CeoPicture>
        </Col>
        <Col xs={4}>
          <H2>Monique Santos</H2>
          <H5 orange>Sócia-fundadora da WeRock</H5>
          <Paragraph fontWeight="Lighter" fontStyle="italic">
            “Juntos vamos mais longe”
          </Paragraph>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={2} className={"ps-5"}>
          <CeoPicture src={diogoPic}></CeoPicture>
        </Col>
        <Col xs={4}>
          <H2>Diogo Branquinho</H2>
          <H5 orange>Sócio-fundador da WeRock</H5>
          <Paragraph fontWeight="Lighter" fontStyle="italic">
            “Comece acreditando que é possível”
          </Paragraph>
        </Col>
        <Col xs={2} className={"ps-5 pb-5"}>
          <CeoPicture src={miguelPic}></CeoPicture>
        </Col>
        <Col xs={4}>
          <H2>Miguel Rocha</H2>
          <H5 orange>Sócio-fundador da WeRock</H5>
          <Paragraph fontWeight="Lighter" fontStyle="italic">
            “Na dificuldade encontra-se a oportunidade”
          </Paragraph>
        </Col>
      </StyledRow>
    </ColoredContainer>
  );
}

const StyledRow = styled(Row)`
  background-color: #394a58;
`;

const CeoPicture = styled.img`
  border-radius: 150px;
  height: 190px;
`;

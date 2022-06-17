import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";
import produtoPic from "../../../images/website/marmore.png";
import { useEffect, useState } from "react";
import axios from "axios";

export { ProdutoLoja };

function ProdutoLoja() {
  return (
    <Background fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={12}>
          <Image src={produtoPic} />
        </Col>
        <Col xs={6} className="ps-5 pt-3 pb-3">
          <H1>Branco Carraca</H1>
        </Col>
        <Col xs={6} className="pt-3 pb-3">
          <H1>Preço</H1>
        </Col>
        <Col xs={6} className="ps-5 pe-5">
          <Descricao>
            Descrição: É um mármore de Itália. Pode ser aplicado no interior e
            exterior em paredes e pavimentos bem como em soluções de banho.
          </Descricao>
        </Col>
        <Col xs={6}>
          <ul>
            <li>Resistência à Compressão:</li>
            <li>Resistência à Flexão:</li>
            <li>Massa Volùmica Aparente:</li>
            <li>Massa Absorção de Água:</li>
          </ul>
        </Col>
      </Row>
    </Background>
  );
}

const Background = styled(Container)`
  background-color: #394a58;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Descricao = styled.p`
  font-size: "19px";
  text-align: "left";
  color: white;
`;

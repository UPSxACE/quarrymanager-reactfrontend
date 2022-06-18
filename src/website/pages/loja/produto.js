import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H5, H3 } from "../../components/text";
import styled from "styled-components";
import produtoPic from "../../../images/website/marmore.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export { ProdutoLoja };

function ProdutoLoja() {
  const [find, findStats] = useState({});
  const { id } = useParams("id");

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/find?id=" +
            id +
            "&fields=tituloArtigo,preco,Res_Compressao,Res_Flexao,Massa_Vol_Aparente,Absorcao_Agua,descricaoProduto",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        findStats(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  return (
    <Card className="d-flex flex-column">
      <BackgroundLight fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} className="g-0">
            <Image src={produtoPic} />
          </Col>

          <Col xs={6} className="paddLeft pt-3 pb-3">
            <H1> {find.tituloArtigo ? find.tituloArtigo : ""}</H1>
          </Col>

          <Col xs={6} className="paddRight pt-3 pb-3">
            <H1 className="text-end">{find.preco ? find.preco : ""} €/m²</H1>
          </Col>
          <Col xs={6} className="paddLeft">
            <Descricao>
              {" "}
              {find.descricaoProduto ? find.descricaoProduto : ""}
            </Descricao>
          </Col>
          <Col xs={6} className="paddRight text-end li-flex">
            <ul className="list-unstyled">
              <li>
                <Descricao className="me-auto">
                  Resistência à Compressão:{" "}
                </Descricao>
                <Descricao>
                  {find.Res_Compressao ? find.Res_Compressao : ""} MPa
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Resistência à Flexão:{" "}
                </Descricao>{" "}
                <Descricao>
                  {find.Res_Flexao ? find.Res_Flexao : ""} MPa
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Massa Volúmica Aparente:{" "}
                </Descricao>
                <Descricao>
                  {find.Massa_Vol_Aparente ? find.Massa_Vol_Aparente : ""} Kg/m²
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Massa Absorção de Água:{" "}
                </Descricao>
                <Descricao>
                  {find.Absorcao_Agua ? find.Absorcao_Agua : ""} %
                </Descricao>
              </li>
            </ul>
          </Col>
        </Row>
      </BackgroundLight>
      <BackgroundDark className="" fluid>
        <Row className="dark pt-3 pe-5 ps-5 pb-5">
          <Col xs={12}>
            <H1 className="text-center pb-3">Orçamento</H1>

            <H5 className="pb-2">
              Para efetuar um pedido de orçamento, por favor registe-se ou
              efetue login.
            </H5>
          </Col>

          <Col xs={6}>
            <H5>Quantidade(m²):</H5>
            <Form>
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Introduza uma quantia em m²"
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={6}>
            <H5>Estimativa de Preço:</H5>
            <H3>0€</H3>
          </Col>
        </Row>
      </BackgroundDark>
    </Card>
  );
}

const Card = styled.div`
  background-color: #394a58;
`;

const BackgroundLight = styled(Container)`
  background-color: #394a58;

  .li-flex li {
    display: flex;
  }

  .paddLeft {
    padding-left: 190px;
  }

  .paddRight {
    padding-right: 190px;
  }
`;

const BackgroundDark = styled(Container)`
  background-color: #394a58;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 40px;
  padding-bottom: 70px;

  .dark {
    background-color: #30373e;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Descricao = styled.span`
  font-size: 20px;

  color: white;
`;

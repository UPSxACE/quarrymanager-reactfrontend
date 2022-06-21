import React, { useRef } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export { DashboardNovoProduto };

function DashboardNovoProduto() {
  const idMaterial = useRef("");
  const idCor = useRef("");
  const Res_Compressao = useRef("");
  const Res_Flexao = useRef("");
  const Massa_Vol_Aparente = useRef("");
  const Absorcao_Agua = useRef("");
  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/produto/add",
          {
            idMaterial: idMaterial.current.value,
            idCor: idCor.current.value,
            Res_Compressao: Res_Compressao.current.value,
            Res_Flexao: Res_Flexao.current.value,
            Massa_Vol_Aparente: Massa_Vol_Aparente.current.value,
            Absorcao_Agua: Absorcao_Agua.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/stock", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4">
          <Col xs={12}>
            <Container fluid>
              <Row className="g-0 ">
                <Col xs={6} className="pe-2 ps-5 pb-4">
                  <FormColor>Material</FormColor>
                  <Form.Select ref={idMaterial}>
                    <option>Selecionar</option>
                  </Form.Select>
                </Col>
                <Col xs={6} className="pe-5 ps-2 ">
                  <FormColor>Cor</FormColor>
                  <Form.Select ref={idCor}>
                    <option>Selecionar</option>
                  </Form.Select>
                </Col>

                <Col xs={6}>
                  <Container fluid>
                    <Row className="g-0 ">
                      <Col xs={6} className="pe-3 ps-5">
                        <FormColor>Res. Compressão</FormColor>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicIdLote"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            ref={Res_Compressao}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={6} className="pe-2">
                        <FormColor>Res. Flexão</FormColor>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicIdLote"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            ref={Res_Flexao}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col xs={6}>
                  <Container fluid>
                    <Row className="g-0 ">
                      <Col xs={6} className="pe-3 ps-2">
                        <FormColor>Massa Vol. Aparente</FormColor>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicIdLote"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            ref={Massa_Vol_Aparente}
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={6} className="pe-5">
                        <FormColor>Absorção Água</FormColor>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicIdLote"
                        >
                          <Form.Control
                            type="text"
                            placeholder=""
                            ref={Absorcao_Agua}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col xs={12} className="pt-3 ps-5">
                  <PrimaryButtonSave onClick={submit} className="me-2">
                    Enviar
                  </PrimaryButtonSave>
                  <Link to={"/dashboard/stock"}>
                    <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export { EditarProduto };

function EditarProduto() {
  const [produto, getProduto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/find?id=" + id,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        getProduto(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [id]);
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4">
            <Col xs={12}>
              <Container fluid>
                <Row className="g-0 ">
                  <Col xs={6} className="pe-2 ps-5 pb-4">
                    <FormColor>Material</FormColor>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} className="pe-5 ps-2 ">
                    <FormColor>Cor</FormColor>
                    <Form.Select>
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
                              defaultValue={
                                produto.Res_Compressao
                                  ? produto.Res_Compressao
                                  : ""
                              }
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
                              defaultValue={
                                produto.Res_Flexao ? produto.Res_Flexao : ""
                              }
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
                              defaultValue={
                                produto.Massa_Vol_Aparente
                                  ? produto.Massa_Vol_Aparente
                                  : ""
                              }
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
                              defaultValue={
                                produto.Absorcao_Agua
                                  ? produto.Absorcao_Agua
                                  : ""
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Col>

                  <Col xs={12} className="pt-3 ps-5">
                    <PrimaryButtonSave className="me-2">
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
    </DashboardLayout>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

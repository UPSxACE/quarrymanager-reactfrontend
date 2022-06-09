import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
export { DashboardNovoProduto };

function DashboardNovoProduto() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4">
            <Col xs={12}>
              <Container fluid>
                <Row className="g-0 ">
                  <Col xs={6} className="pe-4 ps-4">
                    <FormColor>Material</FormColor>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} className="pe-5 ps-4 ">
                    <FormColor>Cor</FormColor>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>

                  <Col xs={6}>
                    <Container fluid>
                      <Row className="g-0 ">
                        <Col xs={6} className="pe-3">
                          <FormColor>Res. Compressão</FormColor>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicIdLote"
                          >
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                        <Col xs={6} className="pe-3">
                          <FormColor>Res. Flexão</FormColor>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicIdLote"
                          >
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Col>

                  <Col xs={6}>
                    <Container fluid>
                      <Row className="g-0 ">
                        <Col xs={6} className="pe-3">
                          <FormColor>Massa Vol. Aparente</FormColor>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicIdLote"
                          >
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                        <Col xs={6} className="pe-3">
                          <FormColor>Absorção Água</FormColor>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicIdLote"
                          >
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
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

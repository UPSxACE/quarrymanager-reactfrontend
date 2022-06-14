import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardContainer,
  DashboardRow,
} from "../../components/layoutComponents";
import uploadBackgroundImg from "../../../images/dashboard/uploadImagem20opacity.png";
import { H1, H2 } from "../../components/layoutComponents";
export { DashboardNovoLote };

//teste
function DashboardNovoLote() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4">
            <Col xs={12}>
              <Container fluid>
                <Row className="g-0 ">
                  <Col xs={3} className="pe-4 ps-4">
                    <H2>Material</H2>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={3} className="pe-5 ps-4 ">
                    <H2>Cor</H2>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} className="ps-5 pe-4">
                    <H2>ID Lote</H2>
                    <Form.Group className="mb-3" controlId="formBasicIdLote">
                      <Form.Control type="text" placeholder="ID" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="g-0 ">
                  <Col xs={6} className="pe-5 ps-4">
                    <H2>Local de Retirada</H2>
                    <Form.Select>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} className="ps-5 pe-4">
                    <H2>Data/Hora</H2>
                    <Form.Group className="mb-3" controlId="formBasicDateTime">
                      <Form.Control
                        type="datetime-local"
                        placeholder="00/00/0000 00:00 AM"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="g-0">
                  <Col xs={6} className="pe-5 ps-4">
                    <H2>Quantidade</H2>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicQuantidadeMaterial"
                    >
                      <Form.Control type="text" placeholder="0" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} className="ps-5">
                    <Container fluid>
                      <Row className="g-0">
                        <H2>Cordenadas GPS</H2>
                        <Col xs={3} className="pe-4">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCordenadaX"
                          >
                            <Form.Control type="number" placeholder="000.000" />
                          </Form.Group>
                        </Col>
                        <Col xs={3} className="ps-4">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCordenadaY"
                          >
                            <Form.Control type="number" placeholder="000.000" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </DashboardRow>

          <DashboardRow className="mt-4 d-flex g-0">
            <Col xs={12} className="d-flex p-4 ">
              <H2>Imagens</H2>

              <UploadButton className="ms-auto ">Upload Imagem</UploadButton>
            </Col>
            <UploadDiv>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </UploadDiv>
          </DashboardRow>

          <DashboardRow className="mt-4 g-0">
            <Col xs={12}>
              <a href="#">
                <SubmitButton>
                  <H1>Submeter</H1>
                </SubmitButton>
              </a>
            </Col>
          </DashboardRow>
        </Form>
      </Container>
    </DashboardLayout>
  );
}

const SubmitButton = styled.button`
  background-color: rgba(0, 75, 91, 0.04);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  border: 0;
`;

const UploadButton = styled(H2)`
  color: #004b5b;
  text-decoration: underline;
`;

const UploadDiv = styled.div`
  background-image: url(${uploadBackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 224px 224px;
  min-height: 250px;
`;

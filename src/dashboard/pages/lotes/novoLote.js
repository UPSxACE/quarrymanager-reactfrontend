import React, { useRef } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import uploadBackgroundImg from "../../../images/dashboard/uploadImagem20opacity.png";
import { H1, H2 } from "../../components/layoutComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export { DashboardNovoLote };

//teste
function DashboardNovoLote() {
  const idProduto = useRef("");
  const idLocalArmazem = useRef("");
  const idLocalExtracao = useRef("");
  const dataHora = useRef("");
  const quantidade = useRef("");
  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/produto/add",
          {
            idProduto: idProduto.current.value,
            idLocalArmazem: idLocalArmazem.current.value,
            idLocalExtracao: idLocalExtracao.current.value,
            dataHora: dataHora.current.value,
            quantidade: quantidade.current.value,
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
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4">
            <Col xs={12}>
              <Container fluid>
                <Row className="g-0 ">
                  <Col xs={6} className="pe-4 ps-4">
                    <H2>Produto</H2>
                    <Form.Select ref={idProduto}>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>

                  <Col xs={6} className="pe-4 ps-4">
                    <H2>Data/Hora</H2>
                    <Form.Group className="mb-3" controlId="formBasicDateTime">
                      <Form.Control
                        type="datetime-local"
                        placeholder="00/00/0000 00:00 AM"
                        ref={dataHora}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="g-0 ">
                  <Col xs={6} className="pe-4 ps-4">
                    <H2>Local de Armazém</H2>
                    <Form.Select ref={idLocalArmazem}>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} className="pe-4 ps-4">
                    <H2>Local de Extração</H2>
                    <Form.Select ref={idLocalExtracao}>
                      <option>Selecionar</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="g-0">
                  <Col xs={6} className="pe-4 ps-4">
                    <H2>Quantidade</H2>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicQuantidadeMaterial"
                    >
                      <Form.Control
                        type="text"
                        placeholder="0"
                        ref={quantidade}
                      />
                    </Form.Group>
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
                <SubmitButton onClick={submit}>
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

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
import { Link, useNavigate } from "react-router-dom";
export { DashboardNovaTransportadora };

//teste
function DashboardNovaTransportadora() {
  const nome = useRef("");

  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/transportadora/add",
          {
            nome: nome.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/loja", { replace: true });
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
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
            <Col xs={12}>
              <H2 className="pb-3">Nova Transportadora</H2>
            </Col>
            <Col xs={6} className="pe-3">
              <FormColor>Nome</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" ref={nome} />
              </Form.Group>
            </Col>

            <Col xs={12} className="pt-3">
              <PrimaryButtonSave onClick={submit} className="me-2">
                Enviar
              </PrimaryButtonSave>
              <Link to={"/dashboard/loja"}>
                <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
              </Link>
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

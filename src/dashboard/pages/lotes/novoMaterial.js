import React, { useRef, useState } from "react";
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
export { DashboardNovoMaterial };

//teste
function DashboardNovoMaterial() {
  const nome = useRef("");
  const prefixo = useRef("");
  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/material/add",
          {
            nome: nome.current.value,
            prefixo: prefixo.current.value,
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
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
            <Col xs={12}>
              <H2 className="pb-3">Novo Material</H2>
            </Col>
            <Col xs={6} className="pe-3">
              <FormColor>Nome</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" ref={nome} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <FormColor>Prefixo</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" ref={prefixo} />
              </Form.Group>
            </Col>
            <Col xs={12} className="pt-3">
              <PrimaryButtonSave onClick={submit} className="me-2">
                Enviar
              </PrimaryButtonSave>

              <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
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

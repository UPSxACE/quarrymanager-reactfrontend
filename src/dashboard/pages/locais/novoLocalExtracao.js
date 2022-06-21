import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardContainer,
  DashboardRow,
} from "../../components/layoutComponents";

import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export { DashboardNovoLocalExtracao };

//teste
function DashboardNovoLocalExtracao() {
  const nome = useRef("");
  const coordenadasGPS_X = useRef("");
  const coordenadasGPS_Y = useRef("");
  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/local-extracao/add",
          {
            coordenadasGPS_X: coordenadasGPS_X.current.value,
            coordenadasGPS_Y: coordenadasGPS_Y.current.value,
            nome: nome.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/locais", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest(); //TERMINAR AQUI
  }

  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <H2 className="pb-3">Novo Local de Extração</H2>
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" ref={nome} />
            </Form.Group>
          </Col>
          <Col xs={6} className="pe-3">
            <FormColor>Coordenadas GPS X</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" ref={coordenadasGPS_X} />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <FormColor>Coordenadas GPS Y</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" ref={coordenadasGPS_Y} />
            </Form.Group>
          </Col>
          <Col xs={12} className="pt-3">
            <PrimaryButtonSave onClick={submit} className="me-2">
              Enviar
            </PrimaryButtonSave>
            <Link to={"/dashboard/locais"}>
              <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
            </Link>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

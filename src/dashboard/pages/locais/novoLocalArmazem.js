import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardContainer,
  DashboardRow,
} from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";

import { H1, H2 } from "../../components/layoutComponents";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export { DashboardNovoLocalArmazem };

//teste
function DashboardNovoLocalArmazem() {
  const nome = useRef("");
  let navigate = useNavigate();

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/local-armazem/add",
          {
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

    sendPostRequest();
  }

  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4">
          <Col xs={6} className="ps-5 pe-4">
            <H2>Novo Local de Armazém</H2>
            <Form.Label>Nome</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" ref={nome} />
            </Form.Group>
            <PrimaryButtonSave onClick={submit} className="me-2">
              Guardar
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

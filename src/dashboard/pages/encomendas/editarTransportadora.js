import React, { useState, useEffect } from "react";
import { Col, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { DashboardLayout } from "../../components/layout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export { EditarTransportadora };

function EditarTransportadora() {
  const [dados, atualizarDados] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/transportadora/editar" + id,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        atualizarDados(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [id]);

  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <FormColor>Nome Transportadora</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={dados.nome ? dados.nome : ""}
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Guardar</PrimaryButtonSave>
            <Link to={"/dashboard/loja"}>
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

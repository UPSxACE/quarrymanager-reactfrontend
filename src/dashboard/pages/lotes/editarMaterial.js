import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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

export { EditarMaterial };

function EditarMaterial() {
  const [material, atualizarMaterial] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/material/find?id=" + id,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        atualizarMaterial(resp.data);
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
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
            <Col xs={6} className="pe-3">
              <FormColor>Nome</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue={material.nome ? material.nome : ""}
                />
              </Form.Group>
            </Col>

            <Col xs={6} className="pe-3">
              <FormColor>Perfixo</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue={material.prefixo ? material.prefixo : ""}
                />
              </Form.Group>
            </Col>

            <Col xs={12} className="pt-3">
              <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>

              <Link to={"/dashboard/stock"}>
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

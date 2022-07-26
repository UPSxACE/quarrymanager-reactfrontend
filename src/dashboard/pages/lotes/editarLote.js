import React, { useEffect, useState } from "react";
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

export { EditarLote };

function EditarLote() {
  const [lote, atualizarLote] = useState({});
  const { codigo_lote } = useParams();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/lote/find?codigo_lote=" + codigo_lote,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        atualizarLote(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [codigo_lote]);
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <H2 className="pb-3">Editar Lote</H2>
          </Col>
          <Col xs={6} className="pe-4">
            <FormColor>Código do Lote</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={lote.codigo_lote ? lote.codigo_lote : ""}
                readOnly
              />
            </Form.Group>
          </Col>

          <Col xs={6}>
            <FormColor>Data/Hora de Extração</FormColor>
            <Form.Group controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={lote.dataHora ? lote.dataHora : ""}
                readOnly
              />
            </Form.Group>
          </Col>
          <Col xs={6} className="pe-4">
            <FormColor>Produto</FormColor>
            <Form.Select>
              <option>Selecionar</option>
            </Form.Select>
          </Col>

          <Col xs={6}>
            <FormColor>Quantidade</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={lote.quantidade ? lote.quantidade : ""}
              />
            </Form.Group>
          </Col>
          <Col xs={6} className="pe-4">
            <FormColor>Local de Extração</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <FormColor>Local de Armazém</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Guardar</PrimaryButtonSave>

            <Link to={"/dashboard/stock"}>
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

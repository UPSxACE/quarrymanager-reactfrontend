import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";

export { EditarLocalArmazem };
export { EditarLocalExtracao };

function EditarLocalExtracao() {
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <H2 className="pb-3">Editar Local de Extração</H2>
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={6} className="pe-3">
            <FormColor>Coordenadas GPS X</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <FormColor>Coordenadas GPS Y</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Guardar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

function EditarLocalArmazem() {
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <H2 className="pb-3">Editar Armazem</H2>
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Guardar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";

export { EditarCliente };
export { EditarOperario };
export { EditarGestor };
export { EditarAdmin };

function EditarCliente() {
  return (
    <Container fluid>
      <Form>
        <Row className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <H2 className="pb-3">Editar cliente</H2>
          <Col xs={6} className="pe-3">
            <FormColor>Cargo</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={6} className="pe-3">
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

function EditarOperario() {
  return (
    <Container fluid>
      <Form>
        <Row className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <H2 className="pb-3">Editar Operário</H2>
          <Col xs={6} className="pe-3">
            <FormColor>Cargo</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={6} className="pe-3">
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

function EditarGestor() {
  return (
    <Container fluid>
      <Form>
        <Row className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <H2 className="pb-3">Editar Gestor</H2>
          <Col xs={6} className="pe-3">
            <FormColor>Cargo</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={6} className="pe-3">
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

function EditarAdmin() {
  return (
    <Container fluid>
      <Form>
        <Row className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <H2 className="pb-3">Editar Administrador</H2>
          <Col xs={6} className="pe-3">
            <FormColor>Cargo</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={6} className="pe-3">
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

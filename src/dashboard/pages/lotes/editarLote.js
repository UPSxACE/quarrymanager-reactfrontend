import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { DashboardLayout } from "../../components/layout";

export { EditarLote };

function EditarLote() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
            <Col xs={12}>
              <H2 className="pb-3">Editar Lote</H2>
              <FormColor>Código do Lote</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" readOnly />
              </Form.Group>
            </Col>
            <Col xs={6} className="pe-3">
              <FormColor>Material</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <FormColor>Cor</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col xs={6} className="pe-3">
              <FormColor>Quantidade</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <FormColor>Local de Extração</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col xs={6} className="pe-3">
              <FormColor>Local de Armazém</FormColor>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <FormColor>Data/Hora de Extração</FormColor>
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
    </DashboardLayout>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { DashboardLayout } from "../../components/layout";

export { EditarUtilizador };

function EditarUtilizador() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
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
          </DashboardRow>
        </Form>
      </Container>
    </DashboardLayout>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

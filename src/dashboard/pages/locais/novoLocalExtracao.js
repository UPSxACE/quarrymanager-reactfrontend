import React, { useEffect, useState } from "react";
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
export { DashboardNovoLocalExtracao };

//teste
function DashboardNovoLocalExtracao() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
            <Col xs={12}>
              <H2 className="pb-3">Novo Local de Extração</H2>
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

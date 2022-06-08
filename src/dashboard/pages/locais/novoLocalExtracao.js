import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardContainer,
  DashboardRow,
} from "../../components/layoutComponents";

import { H1, H2 } from "../../components/layoutComponents";
export { DashboardNovoLocalExtracao };

//teste
function DashboardNovoLocalExtracao() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Form>
          <DashboardRow className="g-0 pt-4 pb-4">
            <Col xs={6} className="ps-5 pe-4">
              <H2>Novo Local de Extração</H2>
              <Form.Label>Nome</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Label>coordenadas GPS X</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Label>coordenadas GPS Y</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicIdLote">
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Button variant="success">Enviar</Button>

              <Button variant="danger">Cancelar</Button>
            </Col>
          </DashboardRow>
        </Form>
      </Container>
    </DashboardLayout>
  );
}

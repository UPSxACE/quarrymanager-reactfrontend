import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";

export { EditarProduto };

function EditarProduto() {
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12} className="pb-3">
            <H2 className="pb-3">Editar Produto</H2>
            <H2>Local de Retirada</H2>
            <Form.Select>
              <option>Selecionar</option>
            </Form.Select>
          </Col>
          <Col xs={6} className="pe-3">
            <FormColor>Título do Artigo</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <FormColor>Preço</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <FormColor>Descrição do Produto</FormColor>
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

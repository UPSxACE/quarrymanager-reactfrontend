import React, { useState } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Col, Container, Form, Row } from "react-bootstrap";
import { H1 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit } from "../../components/buttons";

export { DefinicoesPerfil };

function DefinicoesPerfil() {
  return (
    <ColoredContainer variant={1} fluid>
      <Row className="p-5">
        <Col xs={3}>
          <Container fluid className="block-example border border-dark">
            <Row>
              <Col xs={12}>
                <li>
                  <a href="#">Meu Perfil</a>
                </li>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <a href="#">
                  <li>Definições da Conta</li>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <a href="#">
                  <li>Histórico de Encomendas</li>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <a href="#">
                  <li>Terminar Sessão</li>
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={9}>
          <ColoredContainer
            variant={2}
            fluid
            className="block-example border border-dark"
          >
            <Form>
              <Row className="pe-3 ps-3">
                <Col xs={12} className="mt-5 d-flex justify-content-start">
                  <H1>Definições da Conta</H1>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <StyledFormLabel>Nome</StyledFormLabel>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <StyledFormLabel>E-mail</StyledFormLabel>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <StyledFormLabel>Palavra-Passe</StyledFormLabel>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <StyledFormLabel>Confirmar Palavra-Passe</StyledFormLabel>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12} className="pb-5 mt-4">
                  <a href="#">
                    <ButtonSubmit black className="w-100">
                      ENVIAR
                    </ButtonSubmit>
                  </a>
                </Col>
              </Row>
            </Form>
          </ColoredContainer>
        </Col>
      </Row>
    </ColoredContainer>
  );
}

const StyledFormLabel = styled(Form.Label)`
  color: #fff;
`;

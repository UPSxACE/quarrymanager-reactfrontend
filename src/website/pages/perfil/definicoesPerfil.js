import React, { useState } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Col, Container, Form, Row } from "react-bootstrap";
import { DisplayH1, H1, H3, H5 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit } from "../../components/buttons";

export { DefinicoesPerfil };

function DefinicoesPerfil() {
  return (
    <ColoredContainer variant={1} fluid>
      <Row className="p-5">
        <Col xs={3}>
          <Container fluid>
            <ul className="list-unstyled">
              <StyledLi className="p-2">
                <WhiteLink href="#">
                  <H5>Meu Perfil</H5>
                </WhiteLink>
              </StyledLi>

              <StyledLiSelect className="p-2">
                <WhiteLink href="#">
                  <H5>Definições da Conta</H5>
                </WhiteLink>
              </StyledLiSelect>

              <StyledLi className="p-2">
                <WhiteLink href="#">
                  <H5>Histórico de Encomendas</H5>
                </WhiteLink>
              </StyledLi>

              <StyledLi className="p-2">
                <WhiteLink href="#">
                  <H5>Terminar Sessão</H5>
                </WhiteLink>
              </StyledLi>
            </ul>
          </Container>
        </Col>
        <Col xs={9}>
          <ColoredContainer
            variant={2}
            fluid
            className="drop dropShadow25 borderBlack"
          >
            <Form>
              <Row className="pe-3 ps-3">
                <Col xs={12} className="mt-5 mb-4 d-flex justify-content-start">
                  <H1>Definições da Conta</H1>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <StyledFormLabel>
                      <TextH4>Nome</TextH4>
                    </StyledFormLabel>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <StyledFormLabel>
                      <TextH4>E-mail</TextH4>
                    </StyledFormLabel>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <StyledFormLabel>
                      <TextH4>Palavra-Passe</TextH4>
                    </StyledFormLabel>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPasswordConfirm"
                  >
                    <StyledFormLabel>
                      <TextH4>Confirmar Palavra-Passe</TextH4>
                    </StyledFormLabel>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="pe-3 ps-3">
                <Col xs={12} className="pb-5 mt-4">
                  <a href="#">
                    <ButtonSubmit black className="w-100">
                      Enviar
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

const StyledLi = styled.li`
  background-color: #4c5660;
  color: black;
  border: 1px solid black;
`;

const StyledLiSelect = styled.li`
  background-color: #30373e;
  color: black;
  border: 1px solid black;
`;

const WhiteLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #f3844f;
  }
`;

const TextH4 = styled.h4`
  font-weight: lighter;
`;

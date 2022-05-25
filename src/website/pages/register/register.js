import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { H1, H5, H3 } from "../../components/text";
import { LoginButtonSubmit } from "../../components/buttons";
import { ColoredRow } from "../../components/coloredComponents";
import styled from "styled-components";
export { Register };

function Register() {
  return (
    <Container fluid>
      <ColoredRow variant={1}>
        <CardBodyRow
          className={"container-fluid mt-5 mb-5 pt-4 pb-4 ps-5 pe-5"}
        >
          <Col xs={12} className={"g-0"}>
            <H3 className={"text-center"}>REGISTA-TE</H3>
            <Form>
              <Form.Group controlId="formPrimeiroNome">
                <StyledFormLabel>Primeiro Nome:</StyledFormLabel>
                <Form.Control type="email" placeholder="Primeiro Nome" />
              </Form.Group>
              <Form.Group controlId="formApelido" className="mt-3">
                <StyledFormLabel>Apelido:</StyledFormLabel>
                <Form.Control type="email" placeholder="Apelido" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <StyledFormLabel>Email:</StyledFormLabel>
                <Form.Control type="email" placeholder="example@email.com" />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mt-3">
                <StyledFormLabel>Password:</StyledFormLabel>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formConfirmarPassword" className="mt-3">
                <StyledFormLabel>Confirmar Password:</StyledFormLabel>
                <Form.Control type="email" placeholder="Confirmar Password" />
              </Form.Group>

              <Container fluid className="mt-3">
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <StyledFormLabel>Data de Nascimento:</StyledFormLabel>
                      <Form.Control type="date" name="date_of_birth" />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <StyledFormLabel>Gênero:</StyledFormLabel>
                    <Form.Select>
                      <option>Selecionar</option>
                      <option>Masculino</option>
                      <option>Feminino</option>
                      <option>Outro(s)</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} className={"d-flex justify-content-center pt-2"}>
                    <LoginButtonSubmit width={"500px"}>
                      Registar
                    </LoginButtonSubmit>
                  </Col>{" "}
                  <ContaSpan className="text-center pt-1">
                    Já tem uma conta? Efetue{" "}
                    <WhiteLink href="/login">Login</WhiteLink>
                  </ContaSpan>
                </Row>
              </Container>
            </Form>
          </Col>
        </CardBodyRow>
      </ColoredRow>
    </Container>
  );
}

const CardBodyRow = styled.div`
  background-color: #5e666d;
  width: 600px;
  border-radius: 17px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 25%));
`;

const StyledFormLabel = styled(Form.Label)`
  color: white;
`;

const ContaSpan = styled.span`
  color: white;
`;

const WhiteLink = styled.a`
  color: white;

  &:hover {
    color: #f3844f;
  }
`;

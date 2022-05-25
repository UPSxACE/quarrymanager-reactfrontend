import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import { LoginButtonSubmit } from "../../components/buttons";
import {
  ColoredContainer,
  ColoredRow,
} from "../../components/coloredComponents";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export { Login };

function Login() {
  return (
    <Container fluid>
      <ColoredRow variant={1}>
        <CardBodyRow className={"container-fluid mt-5 mb-5 p-5 pt-4"}>
          <Col xs={12} className={"g-0"}>
            <H3 className={"text-center pb-3"}>LOGIN</H3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon
                      className="align-self-center"
                      icon={faUser}
                    />
                  </InputGroup.Text>
                  <Form.Control type="email" placeholder="Email" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon
                      className="align-self-center"
                      icon={faLock}
                    />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>
              <Container>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-1" controlId="formBasicCheckbox">
                      <StyledFormCheck type="checkbox" label="Lembrar-me" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} className={"text-end"}>
                    <WhiteLink href="#">Esqueceu-se da senha?</WhiteLink>
                  </Col>
                  <Col xs={12} className={"d-flex justify-content-center pt-3"}>
                    <LoginButtonSubmit>Login</LoginButtonSubmit>
                  </Col>
                  <RegisterSpan className="text-center pt-1">
                    Não tem uma conta?{" "}
                    <WhiteLink href="/register">Regista-te</WhiteLink>
                  </RegisterSpan>
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

const StyledFormCheck = styled(Form.Check)`
  color: white;

  input {
    background-color: #30373e !important;
    border-color: transparent !important;
  }

  input:focus {
    background-color: #30373e;
    border-color: transparent;
    box-shadow: none;
  }

  input:active {
    background-color: #30373e;
    border-color: transparent;
    box-shadow: none;
  }

  &:focus {
    border-color: #f3844f !important;
  }
`;

const RegisterSpan = styled.span`
  color: white;
`;

const WhiteLink = styled.a`
  color: white;

  &:hover {
    color: #f3844f;
  }
`;

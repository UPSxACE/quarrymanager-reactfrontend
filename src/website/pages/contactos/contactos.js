import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DisplayH1, H1, H2, Paragraph } from "../../components/text";
import { ColoredContainer } from "../../components/coloredComponents";
import { ButtonSubmit } from "../../components/buttons";
export { Contactos };

function Contactos() {
  return (
    <ColoredContainer variant={1} fluid className="stretch">
      <Row>
        <Col xs={12}>
          <DisplayH1 className="text-center pb-5 pt-5">Contactos</DisplayH1>
          <Container>
            <Row>
              <Col xs={4}>
                <H2 className="text-center">APOIO AO CLIENTE - LOJA ONLINE</H2>
                <Paragraph className="text-center">
                  Telefone: +351 800 912 350
                </Paragraph>
                <Paragraph className="text-center">
                  Email: geral@jorgeoculista.pt
                </Paragraph>
              </Col>
              <Col xs={4}>
                <H2 className="text-center">INFORMAÇÃO FISCAL DA EMPRESA</H2>
                <Paragraph className="text-center">
                  ALBERTO JORGE MOREIRA DA FONSECA, LDA
                </Paragraph>
                <Paragraph className="text-center">
                  Rua Adriano Pinto Basto, 200
                </Paragraph>
                <Paragraph className="text-center">
                  4760-114 VILA NOVA DE FAMALICÃO PORTUGA
                </Paragraph>
                <Paragraph className="text-center">
                  Contribuinte nº 500630534
                </Paragraph>
              </Col>
              <Col xs={4}>
                <H2 className="text-center">RECURSOS HUMANOS</H2>
                <Paragraph className="text-center">
                  Telefone: +351 800 912 350
                </Paragraph>
                <Paragraph className="text-center">
                  Email: geral@jorgeoculista.pt
                </Paragraph>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ColoredContainer variant={2} className="mb-5 mt-5">
            <Container className=" ps-5 pe-5 ">
              <H1 className="text-center pb-4 pt-4">Fale Connosco</H1>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Control
                      type="text"
                      placeholder="Nome (obrigatório)"
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmpresa">
                    <Form.Control type="text" placeholder="Empresa" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="formContacto">
                    <Form.Control type="tel" placeholder="Número de Telefone" />
                  </Form.Group>
                </Col>
              </Row>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="text"
                    placeholder="Mensagem (Obrigatória)"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="d-flex justify-content-around pb-5">
                <ButtonSubmit className="w-100">Enviar</ButtonSubmit>
              </Col>
            </Container>
          </ColoredContainer>
        </Col>
      </Row>
    </ColoredContainer>
  );
}

const StyledButton = styled(Button)`
  background-color: #ffffffff;
  color: black;
  width: 100%;
`;

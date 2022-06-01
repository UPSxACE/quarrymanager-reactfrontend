import React, { useState } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Container, Col, Row, Form } from "react-bootstrap";
import { H1, H5 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit } from "../../components/buttons";

export { MeuPerfil };

function MeuPerfil() {
  return (
    <ColoredContainer variant={1} fluid>
      <Row className="p-5">
        <Col xs={3}>
          <Container fluid>
            <ul className="list-unstyled">
              <StyledLiSelect className="p-2">
                <WhiteLink href="#">
                  <H5>Meu Perfil</H5>
                </WhiteLink>
              </StyledLiSelect>

              <StyledLi className="p-2">
                <WhiteLink href="#">
                  <H5>Definições da Conta</H5>
                </WhiteLink>
              </StyledLi>

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
            <Row>
              <Col xs={12}>
                <H1>Meu Perfil</H1>
              </Col>
              <Row>
                <Col xs={9}>
                  <Container fluid>
                    <Row>
                      <Col xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <StyledFormLabel>
                            <TextH4>Primeiro Nome</TextH4>
                          </StyledFormLabel>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicLastName"
                        >
                          <StyledFormLabel>
                            <TextH4>Último Nome</TextH4>
                          </StyledFormLabel>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <StyledFormLabel>
                          <TextH4>Data de Nascimento</TextH4>
                        </StyledFormLabel>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Control type="date" />
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <StyledFormLabel>
                          <TextH4>Gênero:</TextH4>
                        </StyledFormLabel>
                        <Form.Select>
                          <option>Selecionar</option>
                          <option>Masculino</option>
                          <option>Feminino</option>
                          <option>Outro(s)</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicAddress"
                        >
                          <StyledFormLabel>
                            <TextH4>Morada</TextH4>
                          </StyledFormLabel>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <StyledFormLabel>
                          <TextH4>Código Postal:</TextH4>
                        </StyledFormLabel>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCordenadaX"
                        >
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col xs={2}>
                        <StyledFormLabel>
                          <TextH4>!</TextH4>
                        </StyledFormLabel>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCordenadaY"
                        >
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <StyledFormLabel>
                          <TextH4>Região:</TextH4>
                        </StyledFormLabel>
                        <Form.Select>
                          <option>Selecionar</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <StyledFormLabel>
                            <TextH4>Telefone</TextH4>
                          </StyledFormLabel>
                          <Form.Control type="tel" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col xs={3}>
                  <Container>
                    <Row>
                      <Col xs={12}>as</Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <a href="#">
                          <ButtonSubmit black className="w-100">
                            Carregar foto de perfil
                          </ButtonSubmit>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Row>
            <Row className="pe-3 ps-3">
              <Col xs={12} className="pb-5 mt-4">
                <a href="#">
                  <ButtonSubmit black className="w-100">
                    Guardar Alteração
                  </ButtonSubmit>
                </a>
              </Col>
            </Row>
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

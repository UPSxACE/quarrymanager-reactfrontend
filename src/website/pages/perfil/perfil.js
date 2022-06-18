import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Container, Col, Row, Form } from "react-bootstrap";
import { H1, H5 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit } from "../../components/buttons";
import { useParams } from "react-router-dom";
import axios from "axios";

export { MeuPerfil };

function MeuPerfil() {
  const [user, getUser] = useState({});
  const gender = useRef(1);

  function logGender() {
    console.log(gender.current.value);
  }

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/profile/get-profile",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        getUser(resp.data);
        gender.current.value = resp.data.genero;
      } catch (err) {
        console.log(err);
      }
    };
    sendGetRequest();
  }, []);

  return (
    <ColoredContainer variant={1} fluid>
      <Row className="p-5">
        <Col xs={3} className="g-0 pe-5">
          <Container fluid>
            <Row>
              <Col xs={12}>
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
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={9} className="g-0">
          <ColoredContainer
            variant={2}
            fluid
            className="drop dropShadow25 borderBlack"
          >
            <Row className="pe-3 ps-3">
              <Col
                xs={12}
                className="ps-5 mt-5 mb-4 d-flex justify-content-start"
              >
                <H1>Meu Perfil</H1>
              </Col>
            </Row>
            <Row className="pe-3 ps-3">
              <Col xs={8}>
                <Container fluid>
                  <Row className="pe-3 ps-3">
                    <Col xs={12}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <StyledFormLabel>
                          <TextH4>Nome Completo</TextH4>
                        </StyledFormLabel>
                        <Form.Control
                          type="text"
                          defaultValue={user.full_name ? user.full_name : ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="pe-3 ps-3">
                    <Col xs={6}>
                      <StyledFormLabel>
                        <TextH4>Data de Nascimento</TextH4>
                      </StyledFormLabel>
                      <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Control
                          type="date"
                          defaultValue={
                            user.dataNascimento ? user.dataNascimento : ""
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <StyledFormLabel>
                        <TextH4>Gênero:</TextH4>
                      </StyledFormLabel>
                      <Form.Select ref={gender}>
                        <option>Selecionar</option>
                        <option value={0}>Masculino</option>
                        <option value={1}>Feminino</option>
                        <option value={2}>Outro(s)</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row className="pe-3 ps-3">
                    <Col xs={12}>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <StyledFormLabel>
                          <TextH4>Morada</TextH4>
                        </StyledFormLabel>
                        <Form.Control
                          type="text"
                          defaultValue={user.morada ? user.morada : ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="pe-3 ps-3">
                    <Col xs={6}>
                      <StyledFormLabel>
                        <TextH4>Código Postal:</TextH4>
                      </StyledFormLabel>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCordenadaX"
                      >
                        <Form.Control
                          type="text"
                          defaultValue={user.codPostal ? user.codPostal : ""}
                        />
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
                  <Row className="pe-3 ps-3">
                    <Col xs={12}>
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <StyledFormLabel>
                          <TextH4>Telefone</TextH4>
                        </StyledFormLabel>
                        <Form.Control
                          type="tel"
                          defaultValue={user.telefone ? user.telefone : ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col
                xs={4}
                className="g-0 pe-5 d-flex flex-column justify-content-start"
              >
                <img
                  width={"100%"}
                  src="https://firealarm.com/wp-content/uploads/2021/02/executiva-empresaria-ceo-mulher-lideranca-lider-1518529250446_300x300.jpg"
                  className="mb-4"
                ></img>

                <a href="#">
                  <ButtonSubmit black className="w-100">
                    Carregar foto de perfil
                  </ButtonSubmit>
                </a>
              </Col>
            </Row>

            <Row className="pe-3 ps-3">
              <Col xs={12} className="pb-5 mt-4 ps-5 pe-5">
                <a href="#">
                  <ButtonSubmit black className="w-100" onClick={logGender}>
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

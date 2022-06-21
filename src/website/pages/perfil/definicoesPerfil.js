import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Col, Container, Form, Row } from "react-bootstrap";
import { DisplayH1, H1, H3, H5 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit } from "../../components/buttons";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export { DefinicoesPerfil };

function DefinicoesPerfil(props) {
  const [user, getUser] = useState([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = localStorage.getItem("AuthKey");
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
      } catch (err) {
        console.log(err);
      }
    };
    sendGetRequest();
  }, []);

  function logOut() {
    localStorage.removeItem("AuthKey");
    props.updateLogState(false);
  }

  return (
    <ColoredContainer variant={1} fluid>
      <Row className="p-5 stretch">
        <Col xs={3} className="g-0 pe-5">
          <ul className="list-unstyled">
            <StyledLi className="p-2">
              <WhiteLink to={"/perfil"}>
                <H5>Meu Perfil</H5>
              </WhiteLink>
            </StyledLi>

            <StyledLiSelect className="p-2">
              <WhiteLink to={"/perfil/definicoes"}>
                <H5>Definições da Conta</H5>
              </WhiteLink>
            </StyledLiSelect>

            <StyledLi className="p-2">
              <WhiteLink to={"#"}>
                <H5>Histórico de Encomendas</H5>
              </WhiteLink>
            </StyledLi>

            <StyledLi className="p-2">
              <WhiteLink onClick={logOut} to={"/home"}>
                <H5>Terminar Sessão</H5>
              </WhiteLink>
            </StyledLi>
          </ul>
        </Col>
        <Col xs={9} className="g-0">
          <ColoredContainer
            variant={2}
            fluid
            className="drop dropShadow25 borderBlack pe-5 ps-5"
          >
            <Form>
              <Row className="pe-3 ps-3">
                <Col
                  xs={12}
                  className="mt-5 mb-4 d-flex justify-content-start g-0"
                >
                  <H1>Definições da Conta</H1>
                </Col>

                <Col xs={12} className="g-0">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <StyledFormLabel>
                      <TextH4>Nome</TextH4>
                    </StyledFormLabel>
                    <Form.Control
                      type="text"
                      value={user.profile ? user.profile.full_name : ""}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} className="g-0">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <StyledFormLabel>
                      <TextH4>E-mail</TextH4>
                    </StyledFormLabel>
                    <Form.Control
                      type="email"
                      value={user.profile ? user.profile.email : ""}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} className="g-0">
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <StyledFormLabel>
                      <TextH4>Palavra-Passe</TextH4>
                    </StyledFormLabel>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>

                <Col xs={12} className="g-0">
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

                <Col xs={12} className="pb-5 mt-4 g-0">
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

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #f3844f;
  }
`;

const TextH4 = styled.h4`
  font-weight: lighter;
`;

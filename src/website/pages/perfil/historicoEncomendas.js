import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ColoredContainer } from "../../components/coloredComponents";
import { Container, Col, Row, Form } from "react-bootstrap";
import { H1, H5 } from "../../components/text";
import { Button } from "bootstrap";
import { ButtonSubmit, FileSubmitButton } from "../../components/buttons";
import { useParams, Link, useNavigate } from "react-router-dom";
import genericPfp from "../../../images/website/genericUserProfilePicture.svg";

import axios from "axios";

export { HistoricoEncomendas };

function HistoricoEncomendas(props) {
  const [encomendas, setEncomendas] = useState([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/pedido/find-pedidos-utilizador",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setEncomendas(resp.data);
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
          <Container fluid>
            <Row>
              <Col xs={12}>
                <ul className="list-unstyled">
                  <StyledLi className="p-2">
                    <WhiteLink to={"/perfil"}>
                      <H5>Meu Perfil</H5>
                    </WhiteLink>
                  </StyledLi>

                  <StyledLi className="p-2">
                    <WhiteLink to={"/perfil/definicoes"}>
                      <H5>Definições da Conta</H5>
                    </WhiteLink>
                  </StyledLi>

                  <StyledLiSelect className="p-2">
                    <WhiteLink to={"/perfil/historico-encomendas"}>
                      <H5>Histórico de Encomendas</H5>
                    </WhiteLink>
                  </StyledLiSelect>

                  <StyledLi className="p-2">
                    <WhiteLink onClick={logOut} to={"/home"}>
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
            className="drop dropShadow25 borderBlack perfilHeightFix"
          >
            <Row className="pe-3 ps-3">
              <Col xs={12} className="ps-5 mt-5 mb-3 d-flex">
                <H1>Histórico de Encomendas</H1>
              </Col>

              <Col xs={12} className="ps-5 mb-4 pe-5">
                <CardDiv>
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th className="pt-3 c1">
                          <h5>Encomenda</h5>
                        </th>
                        <th className="pt-3 c2">
                          <h5>Produto</h5>
                        </th>
                        <th className="pt-3 c3">
                          <h5>Status</h5>
                        </th>
                        <th className="pt-3 c4">
                          <h5>Data do Pedido</h5>
                        </th>
                        <th className="pt-3 c5">
                          <h5>Última Atualização</h5>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[0] ? encomendas[0].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[0] ? (
                              encomendas[0].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[0] ? (
                              encomendas[0].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[0] ? (
                              encomendas[0].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[0] ? (
                              encomendas[0].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[1] ? encomendas[1].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[1] ? (
                              encomendas[1].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[1] ? (
                              encomendas[1].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[1] ? (
                              encomendas[1].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {" "}
                            {encomendas[1] ? (
                              encomendas[1].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[2] ? encomendas[2].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[2] ? (
                              encomendas[2].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[2] ? (
                              encomendas[2].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[2] ? (
                              encomendas[2].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {" "}
                            {encomendas[2] ? (
                              encomendas[2].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[3] ? encomendas[3].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[3] ? (
                              encomendas[3].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[3] ? (
                              encomendas[3].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[3] ? (
                              encomendas[3].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {" "}
                            {encomendas[3] ? (
                              encomendas[3].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[4] ? encomendas[4].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[4] ? (
                              encomendas[4].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[4] ? (
                              encomendas[4].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[4] ? (
                              encomendas[4].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {" "}
                            {encomendas[4] ? (
                              encomendas[4].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[5] ? encomendas[5].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[5] ? (
                              encomendas[5].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[5] ? (
                              encomendas[5].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[5] ? (
                              encomendas[5].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[5] ? (
                              encomendas[5].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextH6>
                            {encomendas[6] ? encomendas[6].id : <>&nbsp;</>}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[6] ? (
                              encomendas[6].idProduto0.tituloArtigo
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[6] ? (
                              encomendas[6].ultimo_estado
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[6] ? (
                              encomendas[6].dataHoraPedido
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                        <td>
                          <TextH6>
                            {encomendas[6] ? (
                              encomendas[6].ultima_atualizacao
                            ) : (
                              <>&nbsp;</>
                            )}
                          </TextH6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardDiv>
              </Col>
              <TablePager />
            </Row>
          </ColoredContainer>
        </Col>
      </Row>
    </ColoredContainer>
  );
}

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

const TextH6 = styled.h6`
  font-weight: lighter;
  font-size: 18px;
`;

const CardDiv = styled.div`
  background-color: #fff;

  table {
    overflow: hidden;
  }

  .c1 {
    width: 15%;
    padding-left: 20px;
  }
  tr td:first-child {
    padding-left: 20px;
  }

  .c2 {
    width: 19%;
  }
  .c3 {
    width: 23%;
  }
  .c4 {
    width: 20%;
  }
  .c5 {
    width: 23%;
  }

  td {
    padding: 7px 0px 7px 0px;
    border-bottom: 1px solid #30373e;
  }
  td h6 {
    margin: 0px;
  }
  thead {
    border-bottom: 3px solid #30373e;
    background-color: #4b505614;
  }
`;

function TablePager() {
  return (
    <div className="w-100">
      <PagerComponent className="w-100 text-center d-flex justify-content-center p-5">
        <PagerText className="left">Anterior</PagerText>
        <PagerNumber className="active">1</PagerNumber>
        <PagerText className="right">Próxima</PagerText>
      </PagerComponent>
    </div>
  );
}

const PagerComponent = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 50%));
`;

const PagerNumber = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #596d81;
  border-bottom: 1px solid #596d81;
  border-left: 1px solid #596d81;
  background-color: #fff;
  color: #394a58;

  &.active {
    color: white;
    background-color: #394a58;
  }
`;

const PagerText = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #596d81;
  border-bottom: 1px solid #596d81;
  border-left: 1px solid #596d81;
  background-color: #fff;
  color: #394a58;

  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid #596d81;
  }
`;

import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Form, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import axios from "axios";
import {
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
  DashboardRow,
  H1,
  H1Normal,
  H2,
  H3,
} from "../../components/layoutComponents";
import { DashboardTable, TablePager } from "../../components/dashboardTable";
import { DashboardTabContext } from "../../../App";

import EncomendaPic from "../../../images/dashboard/genericUserProfilePicture.svg";

import { ButtonSubmit } from "../../../website/components/buttons";

import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

export {
  DashboardEncomendas,
  DashboardVerEncomendas,
  DashboardMobilizacaoStock,
  DashboardAgendarRecolha,
};

function DashboardEncomendas(props) {
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);
  const [activeTab, changeTab] = useState(0);
  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("enc");
  });

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }
  return (
    <Container fluid>
      <Row className="g-0">
        <Col xs={12}>
          <DashboardMenu>
            <DashboardMenuList
              listItems={["Encomendas"]}
              activeItem={activeTab}
            ></DashboardMenuList>
          </DashboardMenu>
        </Col>
      </Row>
      <Row className="g-0 pt-4">
        <Col xs={12}>
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              idPedido: "ID Encomenda",
              nome: ["idEstado0", "Status"],
              dataEstado: "Ultima Atualização",
              username: ["idPedido0", ["idUser0", "Cliente"]],
              tituloArtigo: ["idPedido0", ["idProduto0", "Produto"]],
            }}
            endPoint={"estado-pedido/listar-encomendas?page=" + activePage}
            reference={"idPedido"}
            actions
            viewencomenda={"encomendas/ver"}
            controller={"lote"}
          ></DashboardTable>
          <TablePager
            updatePager={updatePager}
            activePage={activePage}
            limitPage={limitPage}
          />
        </Col>
      </Row>
    </Container>
  );
}

function DashboardAgendarRecolha() {
  let navigate = useNavigate();

  function getLotesOptions() {
    if (options.lotes !== null && options.lotes !== undefined) {
      let lotesKeys = Object.keys(options.lotes);
      let lotesValues = Object.values(options.lotes);

      return (
        <>
          {lotesKeys.map((lote, index) => {
            return (
              <option key={"0" + index} value={lote}>
                {options.lotes[lote]}
              </option>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  function submit() {
    console.log("AQUIII");
    const sendPostRequest = async () => {
      try {
        const AuthKey = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";

        const resp = await axios.post(
          "http://localhost:8080/api/pedido-lote/agendar-recolha?idPedido=" +
            idPedido,
          {
            codigoLote: codigo_lote.current.value,
            quantidade: quantidade.current.value,
            idTransportadora: transportadora.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(AuthKey + ":"),
            },
          }
        );

        navigate("/dashboard/encomendas/ver/" + idPedido + "/mobilizar-stock", {
          replace: true,
        });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }

  function getTransportadorasOptions() {
    if (
      options.transportadoras !== null &&
      options.transportadoras !== undefined
    ) {
      let transportadorasKeys = Object.keys(options.transportadoras);
      let transportadorasValues = Object.values(options.transportadoras);

      return (
        <>
          {transportadorasKeys.map((transportadora, index) => {
            console.log(transportadora);
            return (
              <option key={"1" + index} value={transportadora}>
                {options.transportadoras[transportadora]}
              </option>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  const { idPedido } = useParams();
  const codigo_lote = useRef();
  const transportadora = useRef();
  const quantidade = useRef();
  const [currentTab, setTab] = useContext(DashboardTabContext);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setTab("Encomenda #" + idPedido);
  });

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/pedido/agendar-recolha-options?idPedido=" +
            idPedido,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setOptions(resp.data);
        console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <EncomendaWrapper className="g-0 pt-4 pb-4 ps-5 pe-5">
        <Col xs={6} className={"pe-2"}>
          <FormLabel>
            <H2>Código Lote:</H2>
          </FormLabel>
          <Form.Select ref={codigo_lote}>
            <option>Selecionar</option>
            {getLotesOptions()}
          </Form.Select>
        </Col>
        <Col xs={6} className={"ps-2"}>
          <FormLabel>
            <H2>Quantidade:</H2>
          </FormLabel>
          <Form.Group className="mb-3" controlId="formQuantidade">
            <Form.Control type="number" placeholder="" ref={quantidade} />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <FormLabel>
            <H2>Transportadora:</H2>
          </FormLabel>
          <Form.Select ref={transportadora}>
            <option>Selecionar</option>
            {getTransportadorasOptions()}
          </Form.Select>
        </Col>
        <Col xs={12} className="pt-3">
          <PrimaryButtonSave className="me-2" onClick={submit}>
            Guardar
          </PrimaryButtonSave>
          <Link to={"/dashboard/encomendas/ver/" + idPedido}>
            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Link>
        </Col>
      </EncomendaWrapper>
    </ContainerStretch>
  );
}

function DashboardMobilizacaoStock() {
  const [currentTab, setTab] = useContext(DashboardTabContext);
  const { idPedido } = useParams();
  const [nomeProduto, setNome] = useState({});
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/pedido/find?id=" +
            idPedido +
            "&fields=idProduto0.tituloArtigo",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setNome(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  });

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }

  function cancelar() {
    const sendPostRequest = async () => {
      try {
        const AuthKey = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";

        const resp = await axios.post(
          "http://localhost:8080/api/pedido/cancelar-encomenda?idPedido=" +
            idPedido,
          {},
          {
            headers: {
              Authorization: "Basic " + btoa(AuthKey + ":"),
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }

  useEffect(() => {
    setTab("Encomenda #" + idPedido);
  });

  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <ButtonsRow>
        <Col xs={12}>
          <div className="d-flex bd-highlight">
            <div className="bd-highlight">
              <Link to={"/dashboard/encomendas/ver/" + idPedido}>
                <ButtonSubmit2 green className="">
                  Dados Da Encomenda
                </ButtonSubmit2>
              </Link>
            </div>
            <div className="bd-highlight ps-1">
              <ButtonSubmit2 green className="">
                Mobilização do Stock
              </ButtonSubmit2>
            </div>
            <div className="ms-auto bd-highlight">
              <Link
                to={
                  "/dashboard/encomendas/ver/" + idPedido + "/agendar-recolha"
                }
              >
                <ButtonSubmit2 green className="">
                  Agendar Recolha
                </ButtonSubmit2>
              </Link>
            </div>
          </div>
        </Col>
      </ButtonsRow>
      <EncomendaWrapper className="g-0 pt-4 pb-4 ps-5 pe-5 flex-grow-1">
        <Col xs={12} className="d-flex">
          <Container fluid>
            <Row>
              <Col xs={12}>
                <div className={"d-flex"}>
                  <H1>Produto:</H1>
                  <H1Normal className="ps-2">
                    {nomeProduto.idProduto0
                      ? nomeProduto.idProduto0.tituloArtigo
                      : ""}
                  </H1Normal>
                </div>
                <DashboardTable
                  key={"0"}
                  updateLimit={updatePager2}
                  labels={{
                    codigoLote: "Lote",
                    quantidade: "Quantidade",
                    id: ["idTransportadora0", "Transportadora"],
                    dataHoraAgendamento: "Data de Agendamento",
                    dataHoraRecolha: "Data de Recolha",
                  }}
                  endPoint={
                    "pedido-lote/recolhas-agendadas?id=" +
                    idPedido +
                    "&page=" +
                    activePage +
                    "&expand=idTransportadora0"
                  }
                ></DashboardTable>
                <TablePager
                  updatePager={updatePager}
                  activePage={activePage}
                  limitPage={limitPage}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </EncomendaWrapper>
    </ContainerStretch>
  );
}

function DashboardVerEncomendas() {
  const { idPedido } = useParams();
  const [currentTab, setTab] = useContext(DashboardTabContext);

  const [dados, setDados] = useState({});

  function cancelar() {
    const sendPostRequest = async () => {
      try {
        const AuthKey = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";

        const resp = await axios.post(
          "http://localhost:8080/api/pedido/cancelar-encomenda?idPedido=" +
            idPedido,
          {},
          {
            headers: {
              Authorization: "Basic " + btoa(AuthKey + ":"),
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/pedido/find?id=" + idPedido,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setDados(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  useEffect(() => {
    setTab("Encomenda #" + idPedido);
  });

  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <ButtonsRow>
        <Col xs={12}>
          <div className="d-flex bd-highlight">
            <div className="bd-highlight">
              <ButtonSubmit2 green className="">
                Dados Da Encomenda
              </ButtonSubmit2>
            </div>
            <div className="bd-highlight ps-1">
              <Link
                to={
                  "/dashboard/encomendas/ver/" + idPedido + "/mobilizar-stock"
                }
              >
                <ButtonSubmit2 green className="">
                  Mobilização do Stock
                </ButtonSubmit2>
              </Link>
            </div>
            <div className="ms-auto bd-highlight">
              <ButtonSubmit2 green onClick={cancelar} className="">
                Cancelar Encomenda
              </ButtonSubmit2>
            </div>
          </div>
        </Col>
      </ButtonsRow>
      <EncomendaWrapper className="g-0 pt-4 pb-4 ps-5 pe-5 flex-grow-1">
        <Col xs={12} className="d-flex">
          <Container fluid>
            <Row className="h-25">
              <BoxCol xs={6} className="pe-3">
                <div className="borderBox p-3">
                  <DisplayTextH1>O Status: </DisplayTextH1>
                  <div className="">
                    <ButtonSubmit2 green className="w-100 ">
                      (forçar mudança de estado)
                    </ButtonSubmit2>
                  </div>
                </div>
              </BoxCol>
              <Col xs={6} className="g-0">
                <div className="d-flex p-3">
                  <div className="d-flex flex-column">
                    <DisplayTextH2>
                      Nome:{" "}
                      {dados.idUser0 ? dados.idUser0.profile.full_name : ""}
                    </DisplayTextH2>
                    <DisplayTextH6>
                      Encomenda Nº.: {dados.id ? dados.id : ""}{" "}
                    </DisplayTextH6>
                    <DisplayTextH6>
                      Pedido realizado em:{" "}
                      {dados.dataHoraPedido ? dados.dataHoraPedido : ""}
                    </DisplayTextH6>
                  </div>
                  <ProfileEncPic
                    src={
                      dados.idUser0
                        ? "http://localhost:8080/uploads/" +
                          dados.idUser0.profile.profilePic
                        : EncomendaPic
                    }
                    className="ms-auto"
                  ></ProfileEncPic>
                </div>
              </Col>
            </Row>

            <Row className="h-75 pt-4">
              <Col xs={6} className="g-0 h-100 d-flex flex-column pe-3">
                <EditButton black variant="secondary">
                  Editar
                </EditButton>
                <BoxContainer className="pe-5 ps-3 pb-5 pt-2 flex-grow-1 overflow-hidden">
                  <Row>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Nome: </DisplayTextH6>
                        <DisplayTextSpan>
                          {dados.idUser0 ? dados.idUser0.profile.full_name : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Morada:</DisplayTextH6>
                        <DisplayTextSpan>
                          {dados.idUser0 ? dados.idUser0.profile.morada : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Email:</DisplayTextH6>
                        <DisplayTextSpan>
                          {" "}
                          {dados.idUser0 ? dados.idUser0.profile.email : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Telefone:</DisplayTextH6>
                        <DisplayTextSpan>
                          {" "}
                          {dados.idUser0 ? dados.idUser0.profile.telefone : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={12} className="pb-2">
                      <DisplayTextH6>
                        <u>Detalhes da Conta do Utilizador</u>
                      </DisplayTextH6>
                      <Textarea
                        className="w-100"
                        value={dados.mensagem ? dados.mensagem : ""}
                      ></Textarea>
                    </Col>
                  </Row>
                </BoxContainer>
              </Col>

              <Col xs={6} className="g-0 h-100 d-flex flex-column ps-3">
                <EditButton black variant="secondary">
                  Editar
                </EditButton>
                <BoxContainer className="pe-5 ps-3 pb-5 pt-2 flex-grow-1">
                  <Row>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Produto:</DisplayTextH6>
                        <DisplayTextSpan>
                          {dados.idProduto0
                            ? dados.idProduto0.tituloArtigo
                            : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Preço/m²:</DisplayTextH6>
                        <DisplayTextSpan>
                          {" "}
                          {dados.idProduto0 ? dados.idProduto0.preco : ""} €/m²
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Quantidade:</DisplayTextH6>
                        <DisplayTextSpan>
                          {dados.idProduto0
                            ? dados.idProduto0.quantidade_vendida
                            : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Código de Desconto:</DisplayTextH6>
                        <DisplayTextSpan>
                          {dados.codigo_desconto ? dados.codigo_desconto : ""}
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Preço Inicial:</DisplayTextH6>
                        <DisplayTextSpan>
                          {" "}
                          {dados.idProduto0 ? dados.idProduto0.preco : ""} €/m²
                        </DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Desconto (Manual):</DisplayTextH6>
                        <DisplayTextSpan>0</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Estimativa Preço Final:</DisplayTextH6>
                        <DisplayTextSpan>
                          {" "}
                          {dados.idProduto0 ? dados.idProduto0.preco : ""} €/m²
                        </DisplayTextSpan>
                      </div>
                    </Col>
                  </Row>
                </BoxContainer>
              </Col>
            </Row>
          </Container>
        </Col>
      </EncomendaWrapper>
    </ContainerStretch>
  );
}

const EncomendaWrapper = styled(Row)`
  border: 1px solid #004b5b;
  textarea {
    height: 175px;
    resize: vertical;
    max-height: 275px;
  }
`;

const ButtonsRow = styled(Row)``;

const BoxContainer = styled(Container)`
  border: 1px solid #004b5b;
`;

const BoxCol = styled(Col)`
  .borderBox {
    border: 1px solid #004b5b;
  }
  padding: 0px;
`;

const ContainerStretch = styled(Container)`
  height: calc(100vh - 70px - 6rem);
`;

const EditButton = styled(ButtonSubmit)`
  width: 80px;
  text-align: center;
  background-color: #004b5b;
  border: 1px solid #004b5b;
  border-width: 1px 1px 0px 1px;

  &:hover,
  &:focus,
  &:active {
    background-color: #f5f8f9;
    color: #004b5b;
    border: 1px solid #004b5b;
    border-width: 1px 1px 0px 1px;
  }

  &:active:focus,
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(0 75 91 / 8%);
  }
`;

const ProfileEncPic = styled.img`
  border-radius: 50px;
  height: 100px;
`;

const ButtonSubmit2 = styled(ButtonSubmit)`
  background-color: ${(props) => (props.green ? "#004b5b" : "white")};
  color: ${(props) => (props.green ? "white" : "#004b5b")};
  border: 0;
  border-radius: 0;
  font-size: 20px;

  &:active {
    color: #fff;
    background-color: #004b5b;
    border: 0;
  }

  &:hover {
    color: #fff;
    background-color: #004b5b;
    border: 0;
  }

  &:focus {
    color: #fff;
    background-color: #004b5b;
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }

  &:active:focus {
    box-shadow: 0 0 0 0.25rem rgb(82 85 90 / 50%);
  }
`;

const DisplayTextH1 = styled.h1`
  color: #004b5b;
`;

const DisplayTextH2 = styled.h2`
  color: #004b5b;
`;

const DisplayTextH6 = styled.h6`
  color: #004b5b;
`;

const DisplayTextSpan = styled.span`
  color: #004b5b;
`;

const Textarea = styled.textarea`
  border-color: #004b5b;
`;

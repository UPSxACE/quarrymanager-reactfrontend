import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
  H3,
} from "../../components/layoutComponents";
import { DashboardTable, TablePager } from "../../components/dashboardTable";
import { DashboardTabContext } from "../../../App";

import EncomendaPic from "../../../images/dashboard/genericUserProfilePicture.svg";

import { ButtonSubmit } from "../../../website/components/buttons";

import { useParams } from "react-router-dom";

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
      <Row className="g-0 pt-5">
        <Col xs={12}>
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              quantidade: "Quantidade",
              nome: ["idProduto0", ["idMaterial0", "Nome"]], // entry["idProduto0"]["idMaterial0"]
            }}
            endPoint={"lote/listar?page=" + activePage}
            reference={"codigo_lote"}
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
  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <EncomendaWrapper className="g-0 pt-4 pb-4 ps-5 pe-5 flex-grow-1">
        <Col xs={12}>aaa</Col>
      </EncomendaWrapper>
    </ContainerStretch>
  );
}

function DashboardMobilizacaoStock() {
  const [currentTab, setTab] = useContext(DashboardTabContext);
  const { id } = useParams();

  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }

  useEffect(() => {
    setTab("Encomenda #" + id);
  });

  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <ButtonsRow>
        <Col xs={12}>
          <div className="d-flex bd-highlight">
            <div className="bd-highlight">
              <ButtonSubmit black className="">
                Dados Da Encomenda
              </ButtonSubmit>
            </div>
            <div className="bd-highlight ps-1">
              <ButtonSubmit black className="">
                Mobilização do Stock
              </ButtonSubmit>
            </div>
            <div className="ms-auto bd-highlight">
              <ButtonSubmit black className="">
                Agendar Recolha
              </ButtonSubmit>
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
                  <H1Normal className="ps-2">aaa</H1Normal>
                </div>
                <DashboardTable
                  key={"0"}
                  updateLimit={updatePager2}
                  labels={{
                    codigoLote: "Lote",
                    quantidade: "Quantidade",
                    dataHoraAgendamento: "Data de Agendamento",
                    dataHoraRecolha: "Data de Recolha",
                  }}
                  endPoint={
                    "pedido-lote/recolhas-agendadas?id=" +
                    id +
                    "&page=" +
                    activePage
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
              <ButtonSubmit2 green className="">
                Mobilização do Stock
              </ButtonSubmit2>
            </div>
            <div className="ms-auto bd-highlight">
              <ButtonSubmit2 green className="">
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
              <Col xs={6} className="ps-3">
                <div className="d-flex justify-content-end p-3">
                  <div className="d-flex flex-column text-right ">
                    <DisplayTextH2>Nome</DisplayTextH2>
                    <DisplayTextH6>Encomenda N</DisplayTextH6>
                    <DisplayTextH6>Pedido realizado em: </DisplayTextH6>
                  </div>
                  <ProfileEncPic src={EncomendaPic}></ProfileEncPic>
                </div>
              </Col>
            </Row>

            <Row className="h-75 pt-5">
              <Col xs={6} className="g-0 h-100 d-flex flex-column pe-3">
                <EditButton black variant="secondary">
                  Editar
                </EditButton>
                <BoxContainer className="pe-5 ps-3 pb-5 pt-2  flex-grow-1">
                  <Row>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Nome:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Morada:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Email:</DisplayTextH6>
                        <DisplayTextSpan>abc@abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Telefone:</DisplayTextH6>
                        <DisplayTextSpan>99999999</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={12} className="pb-2">
                      <DisplayTextH6>
                        Detalhes da Conta do Utilizador:
                      </DisplayTextH6>
                      <Textarea className="w-100"></Textarea>
                    </Col>
                  </Row>
                </BoxContainer>
              </Col>

              <Col xs={6} className="g-0 h-100 d-flex flex-column ps-3">
                <EditButton black variant="secondary">
                  Editar
                </EditButton>
                <BoxContainer className="pe-5 ps-5 pb-5 pt-2 flex-grow-1">
                  <Row>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Produto:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Preço/m²:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Quantidade:</DisplayTextH6>
                        <DisplayTextSpan>abc@abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <DisplayTextH6>Código de Desconto:</DisplayTextH6>
                        <DisplayTextSpan>99999999</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Preço Inicial:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Desconto (Manual):</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <DisplayTextH6>Estimativa Preço Final:</DisplayTextH6>
                        <DisplayTextSpan>abc</DisplayTextSpan>
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
    height: 75px;
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
  width: 70px;
  background-color: #004b5b;
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

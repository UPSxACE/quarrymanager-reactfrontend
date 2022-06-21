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
import { ButtonSubmit } from "../../../website/components/buttons";
import EncomendaPic from "../../../images/dashboard/genericUserProfilePicture.svg";
import { useParams } from "react-router-dom";
export {
  DashboardEncomendas,
  DashboardVerEncomendas,
  DashboardMobilizacaoStock,
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
                Cancelar Encomenda
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
                Cancelar Encomenda
              </ButtonSubmit>
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
                  <h1>O Status: </h1>
                  <div className="">
                    <ButtonSubmit black className="w-100 ">
                      (forçar mudança de estado)
                    </ButtonSubmit>
                  </div>
                </div>
              </BoxCol>
              <Col xs={6} className="ps-3">
                <div className="d-flex justify-content-end p-3">
                  <div className="d-flex flex-column text-right ">
                    <h2>Nome</h2>
                    <h6>Encomenda N</h6>
                    <h6>Pedido realizado em: </h6>
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
                        <h6>Nome:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Morada:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Email:</h6>
                        <span>abc@abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Telefone:</h6>
                        <span>99999999</span>
                      </div>
                    </Col>
                    <Col xs={12} className="pb-2">
                      Detalhes da Conta do Utilizador
                      <textarea className="w-100"></textarea>
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
                        <h6>Produto:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <h6>Preço/m²:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <h6>Quantidade:</h6>
                        <span>abc@abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      {" "}
                      <div>
                        <h6>Código de Desconto:</h6>
                        <span>99999999</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Preço Inicial:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Desconto (Manual):</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6} className="pb-2">
                      <div>
                        <h6>Estimativa Preço Final:</h6>
                        <span>abc</span>
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
  border: 1px solid black;
  textarea {
    height: 75px;
  }
`;

const ButtonsRow = styled(Row)``;

const BoxContainer = styled(Container)`
  border: 1px solid black;
`;

const BoxCol = styled(Col)`
  .borderBox {
    border: 1px solid black;
  }
  padding: 0px;
`;

const ContainerStretch = styled(Container)`
  height: calc(100vh - 70px - 6rem);
`;

const EditButton = styled(ButtonSubmit)`
  width: 70px;
`;

const ProfileEncPic = styled.img`
  border-radius: 50px;
  height: 100px;
`;

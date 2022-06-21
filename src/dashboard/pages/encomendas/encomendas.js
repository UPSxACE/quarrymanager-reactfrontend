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
  H3,
} from "../../components/layoutComponents";
import { DashboardTable, TablePager } from "../../components/dashboardTable";
import { DashboardTabContext } from "../../../App";

export { DashboardEncomendas, DashboardVerEncomendas };

function DashboardEncomendas() {
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);
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

function DashboardVerEncomendas() {
  return (
    <ContainerStretch fluid className="d-flex flex-column">
      <ButtonsRow>
        <Col xs={12}>
          <Button variant="secondary">Dados da Encomenda</Button>
          <Button variant="secondary">Mobilização do Stock</Button>
          <Button variant="secondary">Agendar Recolha</Button>
        </Col>
      </ButtonsRow>
      <EncomendaWrapper className="g-0 pt-4 pb-4 ps-5 pe-5 flex-grow-1">
        <Col xs={12} className="d-flex">
          <Container fluid>
            <Row className="h-25">
              <BoxCol xs={6}>
                <h1>O Status: </h1>
              </BoxCol>
              <Col xs={6}>ad</Col>
            </Row>
            <Row className="h-75">
              <Col xs={6} className="g-0 h-100 d-flex flex-column">
                <EditButton variant="secondary">Editar</EditButton>
                <BoxContainer className="p-5 flex-grow-1">
                  <Row>
                    <Col xs={6}>
                      <div>
                        <h6>Nome:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Morada:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Email:</h6>
                        <span>abc@abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Telefone:</h6>
                        <span>99999999</span>
                      </div>
                    </Col>
                    <Col xs={12}>
                      Detalhes da Conta do Utilizador
                      <textarea className="w-100"></textarea>
                    </Col>
                  </Row>
                </BoxContainer>
              </Col>
              <Col xs={6} className="g-0 h-100 d-flex flex-column">
                <EditButton variant="secondary">Editar</EditButton>
                <BoxContainer className="p-5 flex-grow-1">
                  <Row>
                    <Col xs={6}>
                      <div>
                        <h6>Produto:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Preço/m²:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Quantidade:</h6>
                        <span>abc@abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      {" "}
                      <div>
                        <h6>Código de Desconto:</h6>
                        <span>99999999</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <h6>Preço Inicial:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <h6>Desconto (Manual):</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
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
`;

const ButtonsRow = styled(Row)``;

const BoxContainer = styled(Container)`
  border: 1px solid black;
`;

const BoxCol = styled(Col)`
  border: 1px solid black;
`;

const ContainerStretch = styled(Container)`
  height: calc(100vh - 70px - 6rem);
`;

const EditButton = styled(Button)`
  width: 70px;
`;

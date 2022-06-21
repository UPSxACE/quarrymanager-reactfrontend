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
import { ButtonSubmit } from "../../../website/components/buttons";

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
    <Container fluid>
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
      <EncomendaWrapper className="g-0">
        <Col xs={12}>
          <Container fluid>
            <Row className="p-5">
              <BoxCol xs={6} className="g-0 pe-3 pb-5">
                <h1>O Status: </h1>
                <div>
                  <ButtonSubmit black className="w-100">
                    Conferir o Stock
                  </ButtonSubmit>
                </div>
              </BoxCol>
              <Col xs={6} className="ps-3">
                ad
              </Col>
            </Row>
            <Row className="pb-5 pe-5 ps-5">
              <Col xs={6} className="g-0 pe-3">
                <ButtonSubmit black className="">
                  Editar
                </ButtonSubmit>
                <BoxContainer>
                  <Row>
                    <Col xs={6}>
                      <div>
                        <h6>Nome:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <h6>Morada:</h6>
                        <span>abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <h6>Email:</h6>
                        <span>abc@abc</span>
                      </div>
                    </Col>
                    <Col xs={6}>
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
              <Col xs={6} className="g-0 ps-3">
                <ButtonSubmit black className="">
                  Editar
                </ButtonSubmit>
                <BoxContainer>
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
    </Container>
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

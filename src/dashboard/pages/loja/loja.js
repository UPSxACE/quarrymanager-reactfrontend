import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import axios from "axios";
import {
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
  H3,
} from "../../components/layoutComponents";
import { DashboardTable, TablePager } from "../../components/dashboardTable";

export { DashboardLoja };

function getTable(activeTab) {
  console.log("teste", activeTab, 1);

  switch (activeTab) {
    case 0:
      return (
        <DashboardTable
          key={0}
          labels={{
            tituloArtigo: "Titulo do Artigo",
            nome: ["idMaterial0", "Material"],
            $nome: ["idCor0", "Cor"],
            preco: "Preço",
            numero_pedidos: "Número de Pedidos",
            quantidade_vendida: "Quantidade Vendida",
          }}
          endPoint={"produto/listar"}
        ></DashboardTable>
      );
    case 1:
      return (
        <DashboardTable
          key={1}
          labels={{
            nome: "Nome",
          }}
          endPoint={"transportadora/listar"}
        ></DashboardTable>
      );
    default:
      return (
        <DashboardTable
          key={0}
          labels={{
            tituloArtigo: "Titulo do Artigo",
            nome: ["idMaterial0", "Material"],
            $nome: ["idCor0", "Cor"],
            preco: "Preço",
          }}
          endPoint={"produto/listar"}
        ></DashboardTable>
      );
  }
}

function DashboardLoja(props) {
  const [activeTab, changeTab] = useState(props.tab);

  function handleTabClick(newTab) {
    changeTab(newTab);
  }
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Produtos", "Transportadoras"]}
                rightButton={[
                  "Adicionar Produto à Loja",
                  "Nova Transportadora",
                ]}
                activeItem={activeTab}
                tabClickFunction={handleTabClick}
              ></DashboardMenuList>
            </DashboardMenu>
          </Col>
        </Row>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            {getTable(activeTab)}
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

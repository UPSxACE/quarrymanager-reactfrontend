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

function DashboardLoja(props) {
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(3);
  const [activeTab, changeTab] = useState(props.tab);

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }

  function getTable(activeTab) {
    switch (activeTab) {
      case 0:
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              tituloArtigo: "Titulo do Artigo",
              nome: ["idMaterial0", "Material"],
              $nome: ["idCor0", "Cor"],
              preco: "Preço",
              numero_pedidos: "Número de Pedidos",
              quantidade_vendida: "Quantidade Vendida",
            }}
            endPoint={"produto/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-produto"}
            edit={"editar-produto"}
            delete={"delete-produto"}
          ></DashboardTable>
        );
      case 1:
        return (
          <DashboardTable
            key={"1/" + activePage}
            updateLimit={updatePager2}
            labels={{
              nome: "Nome",
            }}
            endPoint={"transportadora/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-transportadora"}
            edit={"editar-transportadora"}
            delete={"delete-transportadora"}
          ></DashboardTable>
        );
      default:
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              tituloArtigo: "Titulo do Artigo",
              nome: ["idMaterial0", "Material"],
              $nome: ["idCor0", "Cor"],
              preco: "Preço",
            }}
            endPoint={"produto/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-produto"}
            edit={"editar-produto"}
            delete={"delete-produto"}
          ></DashboardTable>
        );
    }
  }

  function handleTabClick(newTab) {
    changeTab(newTab);
  }
  return (
    <DashboardLayout tab={"loj"}>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Produtos", "Transportadoras"]}
                rightButton={[
                  ["Adicionar Produto à Loja", "novo-produto"],
                  "",
                  ["Nova Transportadora", "nova-transportadora"],
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
            <TablePager
              updatePager={updatePager}
              activePage={activePage}
              limitPage={limitPage}
            />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

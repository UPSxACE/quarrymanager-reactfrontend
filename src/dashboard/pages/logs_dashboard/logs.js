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

export { DashboardLogs };
//asdfasf

function getTable(activeTab) {
  console.log("teste", activeTab, 1);

  switch (activeTab) {
    case 0:
      console.log("this");
      return (
        <DashboardTable
          key={0}
          labels={{
            username: ["idUser0", "Username"],
            full_name: ["idUser0", ["profile", "Nome"]],
            name: ["idUser0", ["role", "Cargo"]],
            nome: ["idTipoAcao0", "Tipo de Ação"],

            descricao: "Descrição",
            dataHora: "Data",
          }}
          endPoint={"logs/listar"}
          actions
          view
          edit
          delete
        ></DashboardTable>
      );
    case 1:
      return (
        <DashboardTable
          key={1}
          labels={{
            username: ["idUser0", "Username"],
            full_name: ["idUser0", ["profile", "Nome"]],
            name: ["idUser0", ["role", "Cargo"]],
            nome: ["idTipoAcao0", "Tipo de Ação"],

            descricao: "Descrição",
            dataHora: "Data",
          }}
          endPoint={"logs/listar?tipoAcao=1"}
          actions
          view
          edit
          delete
        ></DashboardTable>
      );
    case 2:
      return (
        <DashboardTable
          key={2}
          labels={{
            username: ["idUser0", "Username"],
            full_name: ["idUser0", ["profile", "Nome"]],
            name: ["idUser0", ["role", "Cargo"]],
            nome: ["idTipoAcao0", "Tipo de Ação"],

            descricao: "Descrição",
            dataHora: "Data",
          }}
          endPoint={"logs/listar?tipoAcao=2"}
          actions
          view
          edit
          delete
        ></DashboardTable>
      );
    case 3:
      return (
        <DashboardTable
          key={3}
          labels={{
            username: ["idUser0", "Username"],
            full_name: ["idUser0", ["profile", "Nome"]],
            name: ["idUser0", ["role", "Cargo"]],
            nome: ["idTipoAcao0", "Tipo de Ação"],

            descricao: "Descrição",
            dataHora: "Data",
          }}
          endPoint={"logs/listar?tipoAcao=3"}
          actions
          view
          edit
          delete
        ></DashboardTable>
      );
    default:
      console.log("this is default");
      return (
        <DashboardTable
          key={0}
          labels={{
            nome: "Nome",
          }}
          endPoint={"local-armazem/listar"}
          actions
          view
          edit
          delete
        />
      );
  }
}

function DashboardLogs(props) {
  const [activeTab, changeTab] = useState(props.tab);

  function handleTabClick(newTab) {
    changeTab(newTab);
  }

  return (
    <DashboardLayout tab={"log"}>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Tudo", "Loja", "Stock", "Administração"]}
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

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

function DashboardLogs(props) {
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);
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
        console.log("this");
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: ["idUser0", "Username"],
              full_name: ["idUser0", ["profile", "Nome"]],
              name: ["idUser0", ["role", "Cargo"]],
              nome: ["idTipoAcao0", "Tipo de Ação"],

              descricao: "Descrição",
              dataHora: "Data",
            }}
            endPoint={"logs/listar?page=" + activePage}
          ></DashboardTable>
        );
      case 1:
        return (
          <DashboardTable
            key={"1/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: ["idUser0", "Username"],
              full_name: ["idUser0", ["profile", "Nome"]],
              name: ["idUser0", ["role", "Cargo"]],
              nome: ["idTipoAcao0", "Tipo de Ação"],

              descricao: "Descrição",
              dataHora: "Data",
            }}
            endPoint={"logs/listar?tipoAcao=3page=" + activePage}
          ></DashboardTable>
        );
      case 2:
        return (
          <DashboardTable
            key={"2/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: ["idUser0", "Username"],
              full_name: ["idUser0", ["profile", "Nome"]],
              name: ["idUser0", ["role", "Cargo"]],
              nome: ["idTipoAcao0", "Tipo de Ação"],

              descricao: "Descrição",
              dataHora: "Data",
            }}
            endPoint={"logs/listar?tipoAcao=2page=" + activePage}
          ></DashboardTable>
        );
      case 3:
        return (
          <DashboardTable
            key={"3/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: ["idUser0", "Username"],
              full_name: ["idUser0", ["profile", "Nome"]],
              name: ["idUser0", ["role", "Cargo"]],
              nome: ["idTipoAcao0", "Tipo de Ação"],

              descricao: "Descrição",
              dataHora: "Data",
            }}
            endPoint={"logs/listar?tipoAcao=1?page=" + activePage}
          ></DashboardTable>
        );
      default:
        console.log("this is default");
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              nome: "Nome",
            }}
            endPoint={"local-armazem/listar?page=" + activePage}
          />
        );
    }
  }

  function handleTabClick(newTab) {
    updatePager1(1);
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

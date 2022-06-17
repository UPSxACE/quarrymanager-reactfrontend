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
            <DashboardTable
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
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

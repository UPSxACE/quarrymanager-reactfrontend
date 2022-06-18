import React, { useState } from "react";
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

export { DashboardLocais };
function getTable(activeTab) {
  console.log("teste", activeTab, 1);

  switch (activeTab) {
    case 0:
      console.log("this");
      return (
        <DashboardTable
          key={0}
          labels={{
            nome: "Nome",
          }}
          endPoint={"local-armazem/listar"}
          reference={"id"}
          actions
          view={"ver-local-armazem"}
          edit={"editar-local-armazem"}
          delete={"delete-local-armazem"}
        />
      );
    case 1:
      return (
        <DashboardTable
          key={1}
          labels={{
            nome: "Nome",
            coordenadasGPS_X: "Coordenadas GPS X",
            coordenadasGPS_Y: "Coordenadas GPS Y",
          }}
          endPoint={"local-extracao/listar"}
          reference={"id"}
          actions
          view={"ver-local-extracao"}
          edit={"editar-local-extracao"}
          delete={"delete-local-extracao"}
        />
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
          reference={"id"}
          actions
          view={"ver-local-armazem"}
          edit={"editar-local-armazem"}
          delete={"delete-local-armazem"}
        />
      );
  }
}

function DashboardLocais(props) {
  const [activeTab, changeTab] = useState(props.tab);

  function handleTabClick(newTab) {
    changeTab(newTab);
  }

  return (
    <DashboardLayout tab={"loc"}>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Locais de Armazéns", "Locais de Extração"]}
                rightButton={[
                  ["Novo Local de Armazém", "novo-local-armazem"],
                  ["Novo Local de Extração", "novo-local-extracao"],
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

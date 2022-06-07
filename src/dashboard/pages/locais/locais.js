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
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Locais de Armazéns", "Locais de Extração"]}
                rightButton={["Adicionar Novo Local", ""]}
                activeItem={activeTab}
                tabClickFunction={handleTabClick}
              ></DashboardMenuList>
            </DashboardMenu>
          </Col>
        </Row>

        <Row className="g-0 pt-5">
          <Col xs={12}>
            {/*
              {
                0: (
                  <DashboardTable
                    labels={{
                      nome: "Nome",
                    }}
                    endPoint={"http://localhost:8080/api/local-armazem/listar"}
                  ></DashboardTable>
                ),
                1: (
                  <DashboardTable
                    labels={{
                      nome: "Nome",
                      coordenadasGPS_X: "Coordenadas GPS X",
                      coordenadasGPS_Y: "Coordenadas GPS Y",
                    }}
                    endPoint={"http://localhost:8080/api/local-extracao/listar"}
                  ></DashboardTable>
                ),
              }[activeTab]*/}
            {getTable(activeTab)}
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

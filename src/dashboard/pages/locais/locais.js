import React, { useContext, useEffect, useState } from "react";
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
import { DashboardTabContext } from "../../../App";

export { DashboardLocais };

function DashboardLocais(props) {
  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("loc");
  });

  function getTable(activeTab) {
    switch (activeTab) {
      case 0:
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              nome: "Nome",
            }}
            endPoint={"local-armazem/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-local-armazem"}
            edit={"editar-local-armazem"}
            //delete={"delete-local-armazem"}
            controller={"local-armazem"}
          />
        );
      case 1:
        return (
          <DashboardTable
            key={"1/" + activePage}
            updateLimit={updatePager2}
            labels={{
              nome: "Nome",
              coordenadasGPS_X: "Coordenadas GPS X",
              coordenadasGPS_Y: "Coordenadas GPS Y",
            }}
            endPoint={"local-extracao/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-local-extracao"}
            edit={"editar-local-extracao"}
            //delete={"delete-local-extracao"}
            controller={"local-armazem"}
          />
        );
      default:
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              nome: "Nome",
            }}
            endPoint={"local-armazem/listar?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-local-armazem"}
            edit={"editar-local-armazem"}
            //delete={"delete-local-armazem"}
            controller={"local-armazem"}
          />
        );
    }
  }
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);
  const [activeTab, changeTab] = useState(props.tab);

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }

  function handleTabClick(newTab) {
    changeTab(newTab);
  }

  useEffect(() => {}, [activeTab]);

  return (
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

      <Row className="g-0 pt-4">
        <Col xs={12}>
          {getTable(activeTab)}
          <TablePager
            updatePager={updatePager}
            activePage={activePage}
            limitPage={limitPage}
          />{" "}
        </Col>
      </Row>
    </Container>
  );
}

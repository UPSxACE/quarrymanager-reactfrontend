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

function DashboardLocais(props) {
  function getTable(activeTab) {
    console.log("teste", activeTab, 1);

    switch (activeTab) {
      case 0:
        console.log("this");
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
            delete={"delete-local-armazem"}
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
            delete={"delete-local-extracao"}
          />
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
            reference={"id"}
            actions
            view={"ver-local-armazem"}
            edit={"editar-local-armazem"}
            delete={"delete-local-armazem"}
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

  useEffect(() => {
    console.log("aba atual:" + activeTab);
  }, [activeTab]);

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
            <TablePager
              updatePager={updatePager}
              activePage={activePage}
              limitPage={limitPage}
            />{" "}
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

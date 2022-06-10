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

export { DashboardUtilizadores };
function getTable(activeTab) {
  console.log("teste", activeTab, 1);

  switch (activeTab) {
    case 0:
      return (
        <DashboardTable
          key={0}
          labels={{
            username: "Username",
            full_name: ["profile", "Nome"],
            created_at: ["profile", "Data"],
          }}
          endPoint={"user/listar?role_id=4"}
        ></DashboardTable>
      );
    case 1:
      return (
        <DashboardTable
          key={1}
          labels={{
            username: "Username",
            full_name: ["profile", "Nome"],
            created_at: ["profile", "Data"],
          }}
          endPoint={"user/listar?role_id=3"}
        ></DashboardTable>
      );
    case 2:
      return (
        <DashboardTable
          key={2}
          labels={{
            username: "Username",
            full_name: ["profile", "Nome"],
            created_at: ["profile", "Data"],
          }}
          endPoint={"user/listar?role_id=2"}
        ></DashboardTable>
      );
    case 3:
      return (
        <DashboardTable
          key={3}
          labels={{
            username: "Username",
            full_name: ["profile", "Nome"],
            created_at: ["profile", "Data"],
          }}
          endPoint={"user/listar?role_id=1"}
        ></DashboardTable>
      );
    default:
      return (
        <DashboardTable
          key={0}
          labels={{
            username: "Username",
            full_name: ["profile", "Nome"],
            created_at: ["profile", "Data"],
          }}
          endPoint={"user/listar?role_id=4"}
        ></DashboardTable>
      );
  }
}

function DashboardUtilizadores(props) {
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
                listItems={[
                  "Clientes",
                  "Operários",
                  "Gestores",
                  "Administradores",
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

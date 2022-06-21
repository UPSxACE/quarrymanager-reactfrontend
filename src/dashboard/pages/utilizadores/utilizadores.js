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

export { DashboardUtilizadores };

function DashboardUtilizadores(props) {
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);
  const [activeTab, changeTab] = useState(props.tab);
  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("uti");
  });

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
              username: "Username",
              full_name: ["profile", "Nome"],
              created_at: ["profile", "Data"],
            }}
            endPoint={"user/listar?role_id=4?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-user"}
            edit={"editar-user"}
            delete={"delete-user"}
            controller={"user"}
          ></DashboardTable>
        );
      case 1:
        return (
          <DashboardTable
            key={"1/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: "Username",
              full_name: ["profile", "Nome"],
              created_at: ["profile", "Data"],
            }}
            endPoint={"user/listar?role_id=3?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-user"}
            edit={"editar-user"}
            delete={"delete-user"}
            controller={"user"}
          ></DashboardTable>
        );
      case 2:
        return (
          <DashboardTable
            key={"2/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: "Username",
              full_name: ["profile", "Nome"],
              created_at: ["profile", "Data"],
            }}
            endPoint={"user/listar?role_id=2?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-user"}
            edit={"editar-user"}
            delete={"delete-user"}
            controller={"user"}
          ></DashboardTable>
        );
      case 3:
        return (
          <DashboardTable
            key={"3/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: "Username",
              full_name: ["profile", "Nome"],
              created_at: ["profile", "Data"],
            }}
            endPoint={"user/listar?role_id=1?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-user"}
            edit={"editar-user"}
            delete={"delete-user"}
            controller={"user"}
          ></DashboardTable>
        );
      default:
        return (
          <DashboardTable
            key={"0/" + activePage}
            updateLimit={updatePager2}
            labels={{
              username: "Username",
              full_name: ["profile", "Nome"],
              created_at: ["profile", "Data"],
            }}
            endPoint={"user/listar?role_id=4?page=" + activePage}
            reference={"id"}
            actions
            view={"ver-user"}
            edit={"editar-user"}
            delete={"delete-user"}
            controller={"user"}
          ></DashboardTable>
        );
    }
  }

  function handleTabClick(newTab) {
    changeTab(newTab);
  }
  return (
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
          <TablePager
            updatePager={updatePager}
            activePage={activePage}
            limitPage={limitPage}
          />
        </Col>
      </Row>
    </Container>
  );
}

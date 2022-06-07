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

function DashboardUtilizadores() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList>
                <DashboardMenuListItem className="active">
                  <H3>Clientes</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Operários</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Gestores</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Administradores</H3>
                </DashboardMenuListItem>
              </DashboardMenuList>
            </DashboardMenu>
          </Col>
        </Row>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <DashboardTable
              labels={{
                username: "Username",
                full_name: ["profile", "Nome"],
                created_at: ["profile", "Data"],
              }}
              endPoint={"user/listar?role_id=4"}
            ></DashboardTable>
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

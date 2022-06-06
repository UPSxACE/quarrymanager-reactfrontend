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

function DashboardLogs() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList>
                <DashboardMenuListItem className="active">
                  <H3>Tudo</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Loja</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Stock</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Administração</H3>
                </DashboardMenuListItem>
              </DashboardMenuList>
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

                created_at: ["idUser0", ["profile", "created_at"]],
              }}
              endPoint={"http://localhost:8080/api/logs/listar"}
            ></DashboardTable>
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

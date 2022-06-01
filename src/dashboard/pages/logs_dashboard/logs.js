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
import { DashboardTable } from "../../components/dashboardTable";

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
            <DashboardTable>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Tipo de Ação</th>
                  <th>Descrição</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterksdsdsdsdsdsdsdsdsdsdsdsdsddsdsiste</td>
                  <td>Mariaererererererererererer Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro g Moctezuma</td>
                  <td>garantir Chang</td>
                  <td>g</td>
                </tr>
              </tbody>
            </DashboardTable>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

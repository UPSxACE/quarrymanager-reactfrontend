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

export { DashboardLocais };

function DashboardLocais() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList>
                <DashboardMenuListItem className="active">
                  <H3>Locais de Armazéns</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Locais de Extração</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItemRight>
                  <H3>Adicionar Novo Local</H3>
                </DashboardMenuListItemRight>
              </DashboardMenuList>
            </DashboardMenu>
          </Col>
        </Row>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <DashboardTable>
              <thead>
                <tr>
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterksdsdsdsdsdsdsdsdsdsdsdsdsddsdsiste</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                </tr>
                <tr>
                  <td>Centro g Moctezuma</td>
                </tr>
              </tbody>
            </DashboardTable>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardTable } from "../../components/dashboardTable";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
  DashboardRow,
  H3,
} from "../../components/layoutComponents";

export { DashboardStock };

function DashboardStock() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList>
                <DashboardMenuListItem className="active">
                  <H3>Lotes</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Stock</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Produtos</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Materiais</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Cores</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItemRight>
                  <H3>Cores</H3>
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
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                  <th>Country</th>
                  <th>Country</th>
                  <th>Country</th>
                  <th>Country</th>
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
                <tr>
                  <td>Centro f Moctezuma</td>
                  <td>d Chang</td>
                  <td>g</td>
                </tr>
                <tr>
                  <td>Centro f Moctezuma</td>
                  <td>s Chang</td>
                  <td>g</td>
                </tr>
                <tr>
                  <td>a comercial Moctezuma</td>
                  <td>Francisco s</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td>a comercial Moctezuma</td>
                  <td>d Chang</td>
                  <td>f</td>
                </tr>
              </tbody>
            </DashboardTable>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardTable, TablePager } from "../../components/dashboardTable";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
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
                  <H3>Novo Lote</H3>
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
                  <th>Lote</th>
                  <th>Material</th>
                  <th>Cor</th>
                  <th>Quantidade</th>
                  <th>Local de Retirada</th>
                  <th>Coordenadas GPS</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfredswwww</td>
                  <td>Mariaerererererere</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>23739</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
              </tbody>
            </DashboardTable>
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

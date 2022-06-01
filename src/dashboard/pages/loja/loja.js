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

export { DashboardLoja };

function DashboardLoja() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList>
                <DashboardMenuListItem className="active">
                  <H3>Loja</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Descontos</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItem>
                  <H3>Transportadoras</H3>
                </DashboardMenuListItem>
                <DashboardMenuListItemRight>
                  <H3>Adicionar Produto à Loja</H3>
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
                  <th>Titulo do Artigo</th>
                  <th>Material</th>
                  <th>Cor</th>
                  <th>Preco</th>
                  <th>Nº Pedidos</th>
                  <th>Quantidade Vendida</th>
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
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

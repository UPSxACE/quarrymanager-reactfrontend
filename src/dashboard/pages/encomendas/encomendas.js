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

export { DashboardEncomendas };

function DashboardEncomendas() {
  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <DashboardTable
              data={[
                { a: "a", b: "b" },
                { b: "c", a: "d" },
              ]}
              labels={["a", "b"]}
            >
              {/*props de teste*/}
              <thead>
                <tr>
                  <th>ID Encomenda</th>
                  <th>Status</th>
                  <th>Ultima Atualização</th>
                  <th>Cliente</th>
                  <th>Produto</th>
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
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

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
    <DashboardLayout tab={"enc"}>
      <Container fluid>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <DashboardTable
              labels={{
                quantidade: "Quantidade",
                nome: ["idProduto0", ["idMaterial0", "Nome"]], // entry["idProduto0"]["idMaterial0"]
              }}
              endPoint={"lote/listar"}
              actions
              view
              edit
              delete
            ></DashboardTable>
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

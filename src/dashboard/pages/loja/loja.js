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
            <DashboardTable
              labels={{
                tituloArtigo: "Titulo do Artigo",
                nome: ["idMaterial0", "Material"],
                //$nome: ["idCor0","cor"]
                preco: "Preço",
              }}
              endPoint={"http://localhost:8080/api/produto/listar"}
            ></DashboardTable>
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

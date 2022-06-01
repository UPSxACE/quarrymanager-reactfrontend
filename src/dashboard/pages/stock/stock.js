import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
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
      </Container>
    </DashboardLayout>
  );
}

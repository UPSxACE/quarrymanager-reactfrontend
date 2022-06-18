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
  const [activePage, updatePager1] = useState(1);
  const [limitPage, updatePager2] = useState(1);

  function updatePager(value1, value2) {
    if (value1 <= limitPage && value1 > 0) {
      updatePager1(value1);
      updatePager2(value2);
    }
  }
  return (
    <DashboardLayout tab={"enc"}>
      <Container fluid>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <DashboardTable
              key={"0/" + activePage}
              updateLimit={updatePager2}
              labels={{
                quantidade: "Quantidade",
                nome: ["idProduto0", ["idMaterial0", "Nome"]], // entry["idProduto0"]["idMaterial0"]
              }}
              endPoint={"lote/listar?page=" + activePage}
              actions
              view={"ver-lote"}
              edit={"editar-lote"}
              delete={"delete-lote"}
            ></DashboardTable>
            <TablePager
              updatePager={updatePager}
              activePage={activePage}
              limitPage={limitPage}
            />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import axios from "axios";
import { DashboardTable } from "../../components/dashboardTable";
import { DashboardTabContext } from "../../../App";

export { DashboardLotes };

//teste
function DashboardLotes() {
  const [data, setData] = useState([]);
  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("lot");
  });

  return (
    <Container fluid>
      <Row className="g-0">
        <Col xs={12}>
          <ul>
            {data.map((lote) => {
              return (
                <li key={lote.codigo_lote}>
                  <h2>
                    <strong>Código Lote:</strong>
                    {lote.codigo_lote}
                  </h2>
                  <h3>
                    <strong>Quantidade:</strong>
                    {lote.quantidade}
                  </h3>
                  <h3>
                    <strong>Data/Hora:</strong>
                    {lote.dataHora}
                  </h3>
                </li>
              );
            })}
          </ul>

          <DashboardTable
            labels={{
              codigo_lote: "Código do Lote",
              nome: ["idProduto0", ["idMaterial0", "Material"]],
              $nome: ["idProduto0", ["idCor0", "Cor"]],
              quantidade: "Quantidade ",
              $$nome: ["idLocalExtracao0", "Local de Retirada"],
              coordenadasGPS_X: ["idLocalExtracao0", "Coordenadas GPS X"],
              coordenadasGPS_Y: ["idLocalExtracao0", "Coordenadas GPS Y"],
              dataHora: "Data",
            }}
            endPoint={"lote/listar"}
          ></DashboardTable>
        </Col>{" "}
      </Row>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import axios from "axios";
import { DashboardTable } from "../../components/dashboardTable";

export { DashboardLotes };

//teste
function DashboardLotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.get("http://localhost:8080/api/lote", {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
            //+ btoa("dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O") ,
          },
        });
        //setData(resp.data);
        setData(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    sendGetRequest();

    /*
    const config = {
      headers: {
        Authorization: "Basic ZEM5Vk9qbEdMU21zZzZaR2toN0UwREpLejhHMUs1OU86",
        //+ btoa("dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O") ,
      },
    };

    const bodyParameters = {};

    async function fetchData() {
      const result = await axios(
        "http://localhost:8080/api/lote",
        bodyParameters,
        config
      );

      setData(result.data);
    }
    fetchData();*/
  }, []);

  return (
    <DashboardLayout>
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
              endPoint={"http://localhost:8080/api/lote/listar"}
            ></DashboardTable>
          </Col>{" "}
        </Row>
      </Container>
    </DashboardLayout>
  );
}

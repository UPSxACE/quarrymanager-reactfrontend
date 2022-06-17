import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { useParams } from "react-router-dom";
import axios from "axios";
export { ViewLocalExtracao };

function ViewLocalExtracao() {
  const [find, findStats] = useState({});

  const { id } = useParams("id");

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/local-extracao/find?id=" + id,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        findStats(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [id]);

  return (
    <DashboardLayout>
      <Container fluid>
        <DashboardRow className="g-0 pt-4 pb-4">
          <Col xs={12}>
            <Container>
              <Tabela className="w-100 ">
                <tbody>
                  <tr>
                    <th className="pt-2 pe-3 ps-3 pb-2">Nome :</th>
                    <td className="pt-2 pe-3 ps-3 pb-2">
                      {find.nome ? find.nome : ""}
                    </td>
                  </tr>
                  <tr>
                    <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS X :</th>
                    <td className="pt-2 pe-3 ps-3 pb-2">
                      {find.coordenadasGPS_X ? find.coordenadasGPS_X : ""}
                    </td>
                  </tr>
                  <tr>
                    <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS Y :</th>
                    <td className="pt-2 pe-3 ps-3 pb-2">
                      {find.coordenadasGPS_Y ? find.coordenadasGPS_Y : ""}
                    </td>
                  </tr>
                </tbody>
              </Tabela>
              <Col xs={12} className="pt-3">
                <PrimaryButtonSave className="me-2">Enviar</PrimaryButtonSave>
                <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
              </Col>
            </Container>
          </Col>
        </DashboardRow>
      </Container>
    </DashboardLayout>
  );
}

const Tabela = styled.table`
  tr:nth-child(odd) {
    background-color: white;
  }
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  border: 1px solid #dcdcdc;
  th,
  td {
    width: 50%;
    border: 1px solid #dcdcdc;
  }
`;

import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { DashboardTabContext } from "../../../App";
export { ViewLote };

function ViewLote() {
  const [find, findStats] = useState({});

  const { codigo_lote } = useParams("codigo_lote");
  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("Lote #" + codigo_lote);
  });

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/lote/find?codigo_lote=" + codigo_lote,
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
  }, [codigo_lote]);

  return (
    <Container fluid>
      <DashboardRow className="g-0 pt-2 pb-3">
        <Col xs={12}>
          <Container>
            <Container className="pb-1">
              <Row>
                <PicturesCol xs={12}>
                  <img src="https://media.discordapp.net/attachments/938926709623906334/989600052425138226/1.jpg?width=1014&height=676" />
                  <img src="https://media.discordapp.net/attachments/938926709623906334/989600052672618546/2.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989600052886515712/3.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989600053746348052/6.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989600054035771502/7.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989600054396456970/8.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989600054606188544/9.jpg" />
                  <img src="https://cdn.discordapp.com/attachments/938926709623906334/989601082156154890/10.jpg" />
                </PicturesCol>
              </Row>
            </Container>
            <Tabela className="w-100">
              <tbody>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Codigo do Lote</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.codigo_lote ? find.codigo_lote : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Quantidade</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.quantidade ? find.quantidade : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Data/Hora</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.dataHora ? find.dataHora : ""}
                  </td>
                </tr>

                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Material</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.idMaterial0
                        ? find.idProduto0.idMaterial0.nome
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Cor</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.idCor0
                        ? find.idProduto0.idCor0.nome
                        : ""
                      : ""}
                  </td>
                </tr>

                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Local de Armazém</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalArmazem0 ? find.idLocalArmazem0.nome : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Local de Extraçao</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalExtracao0 ? find.idLocalExtracao0.nome : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS X</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalExtracao0
                      ? find.idLocalExtracao0.coordenadasGPS_X
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS Y</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalExtracao0
                      ? find.idLocalExtracao0.coordenadasGPS_Y
                      : ""}
                  </td>
                </tr>
              </tbody>
            </Tabela>
            <Col xs={12} className="pt-3">
              <Link to={"/dashboard/editar-lote/" + codigo_lote}>
                <PrimaryButtonSave className="me-2">Editar</PrimaryButtonSave>
              </Link>
              <Link to={"/dashboard/stock"}>
                <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
              </Link>
            </Col>
          </Container>
        </Col>
      </DashboardRow>
    </Container>
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

const PicturesCol = styled.div`
  img {
    height: 200px;
    width: 25%;
    padding: 10px;

    object-fit: cover;
  }

  img:nth-child(1),
  img:nth-child(5),
  img:nth-child(9) {
    padding-left: 0;
  }

  img:nth-child(4),
  img:nth-child(8) {
    padding-right: 0;
  }
`;

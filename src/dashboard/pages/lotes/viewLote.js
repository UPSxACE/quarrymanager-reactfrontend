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
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export { ViewLote };

function ViewLote() {
  const [find, findStats] = useState({});

  const { codigo_lote } = useParams("codigo_lote");

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
      <DashboardRow className="g-0 pt-4 pb-4">
        <Col xs={12}>
          <Container>
            <Tabela className="w-100 ">
              <tbody>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Codigo do Lote :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.codigo_lote ? find.codigo_lote : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Quantidade :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.quantidade ? find.quantidade : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Data/Hora :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.dataHora ? find.dataHora : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Titulo do Artigo :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.tituloArtigo : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Em Stock ?</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.na_loja : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Res. à Compressão :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.Res_Compressao : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Res. à Flexão :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.Res_Flexao : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">
                    {" "}
                    Massa Vol. Aparente :
                  </th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.Massa_Vol_Aparente : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Absorção de Água :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0 ? find.idProduto0.Absorcao_Agua : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Material :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.idMaterial0
                        ? find.idProduto0.idMaterial0.nome
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Cor :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.idCor0
                        ? find.idProduto0.idCor0.nome
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Preço :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.preco
                        ? find.idProduto0.preco
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Quantidade Vendida :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.quantidade_vendida
                        ? find.idProduto0.quantidade_vendida
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Número de pedidos :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idProduto0
                      ? find.idProduto0.numero_pedidos
                        ? find.idProduto0.numero_pedidos
                        : ""
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Local de Extraçao :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalExtracao0 ? find.idLocalExtracao0.nome : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS X :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idLocalExtracao0
                      ? find.idLocalExtracao0.coordenadasGPS_X
                      : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Coordenadas GPS Y :</th>
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

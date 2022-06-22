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
export { ViewProduto };

function ViewProduto() {
  const [find, findStats] = useState({});

  const { id } = useParams("id");

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/find?id=" + id,
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
    <Container fluid>
      <DashboardRow className="g-0 pt-4 pb-4">
        <Col xs={12}>
          <Container>
            <Tabela className="w-100 ">
              <tbody>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Titulo do Artigo :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.tituloArtigo ? find.tituloArtigo : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Na Loja :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.na_loja ? "Sim" : "Não"}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Res. à Compressão :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.Res_Compressao ? find.Res_Compressao : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Res. à reflexão :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.Res_Flexao ? find.Res_Flexao : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">
                    Massa Volúmica Aparente :
                  </th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.Massa_Vol_Aparente ? find.Massa_Vol_Aparente : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Absorção de Água :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.Absorcao_Agua ? find.Absorcao_Agua : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Material :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idMaterial0 ? find.idMaterial0.nome : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Cor :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.idCor0 ? find.idCor0.nome : ""}
                  </td>
                </tr>
                <tr>
                  <th className="pt-2 pe-3 ps-3 pb-2">Preço :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.preco ? find.preco : ""}
                  </td>
                </tr>
              </tbody>
            </Tabela>
            <Col xs={12} className="pt-3">
              <Link to={"/dashboard/editar-produto/" + id}>
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

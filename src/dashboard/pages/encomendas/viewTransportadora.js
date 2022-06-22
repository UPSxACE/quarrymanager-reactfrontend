import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export { ViewTransportadora };

function ViewTransportadora() {
  const [find, findStats] = useState({});

  const { id } = useParams("id");
  const nomeLocais = useRef("");
  let navigate = useNavigate();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/transportadora/find?id=" + id,
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
      <DashboardRow className="g-0 pt-4 pb-4 ps-5 pe-5">
        <Col xs={12}>
          <Container>
            <Tabela className="w-100 ">
              <tbody>
                <tr>
                  <th className="pt-2 pe-3 ps-5 pb-2">Nome :</th>
                  <td className="pt-2 pe-3 ps-3 pb-2">
                    {find.nome ? find.nome : ""}
                  </td>
                </tr>
              </tbody>
            </Tabela>
            <Col xs={12} className="pt-4">
              <Link to={"/dashboard/editar-transportadora/" + id}>
                <PrimaryButtonSave className="me-2">Editar</PrimaryButtonSave>
              </Link>
              <Link to={"/dashboard/loja"}>
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

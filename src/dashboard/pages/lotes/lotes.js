import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import axios from "axios";

export { DashboardLotes };

//teste
function DashboardLotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = require("axios");

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
      <h1>Isto é a página de lotes</h1>
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
    </DashboardLayout>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardRow } from "../../components/layoutComponents";

import { H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import { DashboardLayout } from "../../components/layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export { EditarLocalArmazem };
export { EditarLocalExtracao };

function EditarLocalExtracao() {
  const [dados, atualizarDados] = useState([]);
  const { id } = useParams();
  const nomeLocais = useRef("");
  const coordenadasGPS_X = useRef("");
  const coordenadasGPS_Y = useRef("");
  let navigate = useNavigate();

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

        atualizarDados(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [id]);

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/local-extracao/editar",
          {
            id: id,
            nome: nomeLocais.current.value,
            coordenadasGPS_X: coordenadasGPS_X.current.value,
            coordenadasGPS_Y: coordenadasGPS_Y.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/locais", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest(); //TERMINAR AQUI
  }

  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={dados.nome ? dados.nome : ""}
                ref={nomeLocais}
              />
            </Form.Group>
          </Col>
          <Col xs={6} className="pe-3">
            <FormColor>Coordenadas GPS X</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={
                  dados.coordenadasGPS_X ? dados.coordenadasGPS_X : ""
                }
                ref={coordenadasGPS_X}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <FormColor>Coordenadas GPS Y</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={
                  dados.coordenadasGPS_Y ? dados.coordenadasGPS_Y : ""
                }
                ref={coordenadasGPS_Y}
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2" onClick={submit}>
              Guardar
            </PrimaryButtonSave>

            <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

function EditarLocalArmazem() {
  const [dados, atualizarDados] = useState([]);
  const { id } = useParams();
  const nomeLocais = useRef("");
  let navigate = useNavigate();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/local-armazem/find?id=" + id,
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        atualizarDados(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, [id]);

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/local-armazem/editar",
          {
            nome: nomeLocais.current.value,
            id: id,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/locais", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest(); //TERMINAR AQUI
  }

  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4 pt-4 ps-5 pe-5">
          <Col xs={12}>
            <FormColor>Nome</FormColor>
            <Form.Group className="mb-3" controlId="formBasicIdLote">
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={dados.nome ? dados.nome : ""}
                ref={nomeLocais}
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="pt-3">
            <PrimaryButtonSave className="me-2" onClick={submit}>
              Guardar
            </PrimaryButtonSave>

            <Link to={"/dashboard/locais"}>
              <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
            </Link>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import { H1, H2 } from "../../components/layoutComponents";
import {
  PrimaryButtonSave,
  SecundaryButtonCancel,
} from "../../components/buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export { DashboardNovoProdutoLoja };

function DashboardNovoProdutoLoja() {
  const idMaterial = useRef("");
  const tituloArtigo = useRef("");
  const preco = useRef("");
  const descricaoProduto = useRef("");
  let navigate = useNavigate();
  const [dropdownData, setDropdownData] = useState({}); //#

  function dropdownProdutos() {
    //#
    if (dropdownData !== null && dropdownData !== undefined) {
      let produtosKeys = Object.keys(dropdownData);
      let produtosValues = Object.values(dropdownData);

      return (
        <>
          {produtosKeys.map((produto, index) => {
            return (
              <option key={"0" + index} value={produto}>
                {dropdownData[produto]}
              </option>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/produtos-novo-loja-options",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setDropdownData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/produto/add",
          {
            idMaterial: idMaterial.current.value,
            tituloArtigo: tituloArtigo.current.value,
            preco: preco.current.value,
            descricaoProduto: descricaoProduto.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        navigate("/dashboard/stock", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }
  return (
    <Container fluid>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4">
          <Col xs={12}>
            <Container fluid>
              <Row className="g-0 ">
                <Col xs={12} className="pe-5 ps-5">
                  <FormColor>Título Artigo</FormColor>
                  <Form.Group className="mb-3" controlId="formBasicIdLote">
                    <Form.Control
                      type="text"
                      placeholder=""
                      ref={tituloArtigo}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} className="pe-3 ps-5 pb-4">
                  <FormColor>Produto</FormColor>
                  <Form.Select ref={idMaterial}>
                    <option>Selecionar Produto</option>
                    {dropdownProdutos()}
                  </Form.Select>
                </Col>
                <Col xs={6} className="pe-5">
                  <FormColor>Preço</FormColor>
                  <Form.Group className="mb-3" controlId="formBasicIdLote">
                    <Form.Control type="text" placeholder="" ref={preco} />
                  </Form.Group>
                </Col>

                <Col xs={12} className="pe-5 ps-5">
                  <FormColor>Descrição do Produto</FormColor>
                  <Form.Group className="mb-3" controlId="formBasicIdLote">
                    <Textarea
                      className="w-100"
                      type="text"
                      placeholder=""
                      ref={descricaoProduto}
                    ></Textarea>
                  </Form.Group>
                </Col>
                <Col xs={12} className="ps-5 pb-4 pe-5">
                  <FormColor>
                    Imagem: <br></br>
                    <input type="file" className="pt-2" />
                  </FormColor>
                </Col>
              </Row>

              <Col xs={12} className="pt-3 ps-5">
                <PrimaryButtonSave onClick={submit} className="me-2">
                  Guardar
                </PrimaryButtonSave>
                <Link to={"/dashboard/loja"}>
                  <SecundaryButtonCancel>Cancelar</SecundaryButtonCancel>
                </Link>
              </Col>
            </Container>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const FormColor = styled(Form.Label)`
  color: #004b5b;
`;

const Textarea = styled.textarea`
  min-height: 150px;
  max-height: 300px;
  resize: vertical;
`;

import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { DashboardRow } from "../../components/layoutComponents";
import uploadBackgroundImg from "../../../images/dashboard/uploadImagem20opacity.png";
import { H1, H2 } from "../../components/layoutComponents";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export { DashboardNovoLote };

//teste
function DashboardNovoLote() {
  const idProduto = useRef("");
  const idLocalArmazem = useRef("");
  const idLocalExtracao = useRef("");
  const dataHora = useRef("");
  const quantidade = useRef("");
  const [files, setFiles] = useState([]);
  const [dropdownData, setDropdownData] = useState({});
  let navigate = useNavigate();

  function dropdownProdutos() {
    if (dropdownData.produtos !== null && dropdownData.produtos !== undefined) {
      let produtosKeys = Object.keys(dropdownData.produtos);
      let produtosValues = Object.values(dropdownData.produtos);

      return (
        <>
          {produtosKeys.map((produto, index) => {
            return (
              <option key={"0" + index} value={produto}>
                {dropdownData.produtos[produto]}
              </option>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  function dropdownLocaisA() {
    if (
      dropdownData["locais-armazem"] !== null &&
      dropdownData["locais-armazem"] !== undefined
    ) {
      let locaisAKeys = Object.keys(dropdownData["locais-armazem"]);
      let locaisAValues = Object.values(dropdownData["locais-armazem"]);

      return (
        <>
          {locaisAKeys.map((localA, index) => {
            return (
              <option key={"1" + index} value={localA}>
                {dropdownData["locais-armazem"][localA]}
              </option>
            );
          })}
        </>
      );
    }

    return <></>;
  }

  function dropdownLocaisE() {
    if (
      dropdownData["locais-extracoes"] !== null &&
      dropdownData["locais-extracoes"] !== undefined
    ) {
      let locaisEKeys = Object.keys(dropdownData["locais-extracoes"]);
      let locaisEValues = Object.values(dropdownData["locais-extracoes"]);

      return (
        <>
          {locaisEKeys.map((localE, index) => {
            return (
              <option key={"2" + index} value={localE}>
                {dropdownData["locais-extracoes"][localE]}
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
          "http://localhost:8080/api/lote/options-novo-lote",
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

  function deleteFile(id) {
    setFiles(
      files.filter((file, index) => {
        return index !== id;
      })
    );
  }

  function submit() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";
        console.log(files);

        const resp = await axios.post(
          "http://localhost:8080/api/lote/add",
          {
            idProduto: idProduto.current.value,
            idLocalArmazem: idLocalArmazem.current.value,
            idLocalExtracao: idLocalExtracao.current.value,
            quantidade: quantidade.current.value,
            file0: files[0],
            file1: files[1],
            file2: files[2],
            file3: files[3],
            file4: files[4],
            file5: files[5],
            file6: files[6],
            file7: files[7],
            file8: files[8],
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
              "content-type": "multipart/form-data",
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-center" closeButton>
          <Modal.Title className="w-100 text-center">
            Muitas imagens!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          O limite de imagens por lote é de 9!
        </Modal.Body>
        <Modal.Footer className="d-fex justify-content-center">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <DashboardRow className="g-0 pt-4 pb-4">
          <Col xs={12}>
            <Container fluid>
              <Row className="g-0 ">
                <Col xs={6} className="pe-4 ps-4">
                  <H2>Produto</H2>
                  <Form.Select ref={idProduto}>
                    <option>Selecionar</option>
                    {dropdownProdutos()}
                  </Form.Select>
                </Col>

                <Col xs={6} className="pe-4 ps-4">
                  <H2>Quantidade</H2>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicQuantidadeMaterial"
                  >
                    <Form.Control
                      type="text"
                      placeholder="0"
                      ref={quantidade}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="g-0 ">
                <Col xs={6} className="pe-4 ps-4">
                  <H2>Local de Armazém</H2>
                  <Form.Select ref={idLocalArmazem}>
                    <option>Selecionar</option>
                    {dropdownLocaisA()}
                  </Form.Select>
                </Col>
                <Col xs={6} className="pe-4 ps-4">
                  <H2>Local de Extração</H2>
                  <Form.Select ref={idLocalExtracao}>
                    <option>Selecionar</option>
                    {dropdownLocaisE()}
                  </Form.Select>
                </Col>
              </Row>
            </Container>
          </Col>
        </DashboardRow>

        <DashboardRow className="mt-4 d-flex g-0">
          <Col xs={12} className="d-flex p-4 ">
            <H2>Imagens</H2>

            <UploadLabelWrapper className="ms-auto">
              <label htmlFor="file-upload">
                <UploadButton>Upload Imagem</UploadButton>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e) => {
                  if ([...files, ...e.target.files].length > 9) {
                    handleShow();
                  } else {
                    setFiles([...files, ...e.target.files]);
                  }
                }}
                multiple
              />
            </UploadLabelWrapper>
          </Col>
          <UploadDiv>
            {files.map((file, index) => {
              let imageObjectURL = URL.createObjectURL(file);
              return (
                <figure key={index}>
                  <img src={imageObjectURL}></img>
                  <figcaption
                    onClick={() => {
                      deleteFile(index);
                    }}
                  >
                    <a href="#">
                      <FontAwesomeIcon icon={faXmark} />
                    </a>
                  </figcaption>
                </figure>
              );
            })}
          </UploadDiv>
        </DashboardRow>

        <DashboardRow className="mt-4 g-0">
          <Col xs={12}>
            <SubmitButton to="#" onClick={submit}>
              <H1>Submeter</H1>
            </SubmitButton>
          </Col>
        </DashboardRow>
      </Form>
    </Container>
  );
}

const SubmitButton = styled(Link)`
  background-color: rgba(0, 75, 91, 0.04);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  border: 0;
  text-align: center;
  text-decoration: none;
`;

const UploadButton = styled(H2)`
  color: #004b5b;
  text-decoration: underline;
`;

const UploadDiv = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  column-count: 5;
  column-gap: 0px;
  height: 250px;

  figure {
    display: flex;
    justify-items: end;
  }

  figure:first-child img {
    height: 108px;
    width: 100%;
    /*border: 1px solid black;*/
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  figure:not(:first-child) img {
    height: 108px;
    width: calc(100% - 10px);
    /*border: 1px solid black;*/
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  figure:first-child img {
    height: 226px;
  }

  figure:not(:first-child):nth-child(odd) {
    padding-top: 10px;
  }

  figure {
    margin: 0 !important;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
  }

  figure > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }

  figure a {
    color: black;
    text-decoration: none;
  }

  figure:not(:first-child) figcaption {
    margin-left: 10px;
  }

  figure figcaption {
    grid-row: 2;
    grid-column: 1;
    height: 25px;
    width: 25px;
    line-height: 25px;
    font-size: 22px;
    background-color: rgba(255, 255, 255, 0.5);
    justify-self: start;
    text-align: center;
  }

  background-image: url(${uploadBackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 224px 224px;
  min-height: 250px;
`;

const UploadLabelWrapper = styled.div`
  input[type="file"] {
    display: none;
  }
`;

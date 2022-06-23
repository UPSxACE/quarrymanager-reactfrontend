import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H5, H3 } from "../../components/text";
import { ButtonSubmit } from "../../components/buttons";
import styled from "styled-components";
import produtoPic from "../../../images/website/marmore.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export { ProdutoLoja };

function ProdutoLoja() {
  const [find, findStats] = useState({});
  const [user, getUser] = useState({});
  const [editing, toggleEditing] = useState(false);
  const { id } = useParams("id");
  const full_name = useRef("");
  const morada = useRef("");
  const email = useRef("");
  const telefone = useRef("");

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/find?id=" +
            id +
            "&fields=tituloArtigo,preco,Res_Compressao,Res_Flexao,Massa_Vol_Aparente,Absorcao_Agua,descricaoProduto",
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
  }, []);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/profile/get-profile",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        getUser(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  function updateProfile() {
    const sendPostRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios.post(
          "http://localhost:8080/api/profile/editar",
          {
            full_name: full_name.current.value,
            morada: morada.current.value,
            email: email.current.value,
            telefone: telefone.current.value,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
              "content-type": "multipart/form-data",
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    sendPostRequest();
  }

  function isLoggedCheck() {
    return !(
      localStorage.getItem("AuthKey") === null ||
      localStorage.getItem("AuthKey") === undefined
    );
  }

  function editToggle() {
    toggleEditing(!editing);
  }

  return (
    <Card className="d-flex flex-column">
      <BackgroundLight fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} className="g-0">
            <Image src={produtoPic} />
          </Col>

          <Col xs={6} className="paddLeft pt-3 pb-3">
            <H1> {find.tituloArtigo ? find.tituloArtigo : ""}</H1>
          </Col>

          <Col xs={6} className="paddRight pt-3 pb-3">
            <H1 className="text-end">{find.preco ? find.preco : ""} €/m²</H1>
          </Col>
          <Col xs={6} className="paddLeft">
            <Descricao>
              {" "}
              {find.descricaoProduto ? find.descricaoProduto : ""}
            </Descricao>
          </Col>
          <Col xs={6} className="paddRight text-end li-flex">
            <ul className="list-unstyled">
              <li>
                <Descricao className="me-auto">
                  Resistência à Compressão:{" "}
                </Descricao>
                <Descricao>
                  {find.Res_Compressao ? find.Res_Compressao : ""} MPa
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Resistência à Flexão:{" "}
                </Descricao>{" "}
                <Descricao>
                  {find.Res_Flexao ? find.Res_Flexao : ""} MPa
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Massa Volúmica Aparente:{" "}
                </Descricao>
                <Descricao>
                  {find.Massa_Vol_Aparente ? find.Massa_Vol_Aparente : ""} Kg/m²
                </Descricao>
              </li>
              <li>
                <Descricao className="me-auto">
                  Massa Absorção de Água:{" "}
                </Descricao>
                <Descricao>
                  {find.Absorcao_Agua ? find.Absorcao_Agua : ""} %
                </Descricao>
              </li>
            </ul>
          </Col>
        </Row>
      </BackgroundLight>

      {!isLoggedCheck() ? (
        <BackgroundDark className="" fluid>
          <Row className="dark pt-3 pe-5 ps-5 pb-5">
            <Col xs={12}>
              <H1 className="text-center pb-3">Orçamento</H1>

              <H5 className="pb-2">
                Para efetuar um pedido de orçamento, por favor registe-se ou
                efetue login.
              </H5>
            </Col>

            <Col xs={6}>
              <H5>Quantidade(m²):</H5>

              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Introduza uma quantia em m²"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <H5>Estimativa de Preço:</H5>
              <H3>0€</H3>
            </Col>
          </Row>
        </BackgroundDark>
      ) : editing ? (
        //CASO EDITING = TRUE
        <BackgroundDark className="logged" fluid>
          <Row className="dark pt-3 pe-5 ps-5 pb-5">
            <Col xs={12}>
              <H1 className="text-center pb-3">Orçamento</H1>
              <H5 className="pb-5">
                Para pedidos de orçamento deixe a sua mensagem. Entraremos em
                contacto consigo o mais brevemente possível.
              </H5>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Quantidade(m²):</H5>

              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Introduza uma quantia em m²"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Estimativa de Preço:</H5>
              <H3>0€</H3>
            </Col>
            <Col xs={6} className="pb-3">
              {" "}
              <H5>Código de Desconto:</H5>
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Introduza um código de desconto."
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>&nbsp;</H5>
              <H5>Nenhum.</H5>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Nome:</H5>{" "}
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={user.full_name ? user.full_name : ""}
                    ref={full_name}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Morada:</H5>{" "}
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={user.morada ? user.morada : ""}
                    ref={morada}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Email:</H5>{" "}
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={user.email ? user.email : ""}
                    ref={email}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Telefone:</H5>{" "}
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={user.telefone ? user.telefone : ""}
                    ref={telefone}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} className="pb-3">
              <H5>Mensagem:</H5>
            </Col>

            <Col xs={12}>
              {" "}
              <Textarea className="mb-3"></Textarea>
              <ButtonSubmit
                className="w-100"
                onClick={() => {
                  updateProfile();
                }}
              >
                Enviar
              </ButtonSubmit>
            </Col>
          </Row>
        </BackgroundDark>
      ) : (
        //CASO EDITING = FALSE
        <BackgroundDark className="logged" fluid>
          <Row className="dark pt-3 pe-5 ps-5 pb-5">
            <Col xs={12}>
              <H1 className="text-center pb-3">Orçamento</H1>
              <H5 className="pb-5">
                Para pedidos de orçamento deixe a sua mensagem. Entraremos em
                contacto consigo o mais brevemente possível.
              </H5>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Quantidade(m²):</H5>

              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Introduza uma quantia em m²"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Estimativa de Preço:</H5>
              <H3>0€</H3>
            </Col>
            <Col xs={6} className="pb-3">
              {" "}
              <H5>Código de Desconto:</H5>
              <Form.Group controlId="formBasic">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Introduza um código de desconto."
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>&nbsp;</H5>
              <H5>Nenhum.</H5>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Nome:</H5>{" "}
              <TextH6> {user.full_name ? user.full_name : ""} </TextH6>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Morada:</H5>{" "}
              <TextH6> {user.morada ? user.morada : ""} </TextH6>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Email:</H5> <TextH6> {user.email ? user.email : ""} </TextH6>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Telefone:</H5>{" "}
              <TextH6> {user.telefone ? user.telefone : ""}</TextH6>
            </Col>
            <Col xs={6} className="pb-3">
              <H5>Mensagem:</H5>
            </Col>
            <Col xs={6} className="pb-3 d-flex">
              <Link to={"#"} className="ms-auto" onClick={editToggle}>
                <H5>
                  <u>Editar</u>
                </H5>
              </Link>
            </Col>
            <Col xs={12}>
              {" "}
              <Textarea className="mb-3"></Textarea>
              <ButtonSubmit className="w-100">Enviar</ButtonSubmit>
            </Col>
          </Row>
        </BackgroundDark>
      )}
    </Card>
  );
}

const Card = styled.div`
  background-color: #394a58;
`;

const BackgroundLight = styled(Container)`
  background-color: #394a58;

  .li-flex li {
    display: flex;
  }

  .paddLeft {
    padding-left: 190px;
  }

  .paddRight {
    padding-right: 190px;
  }
`;

const BackgroundDark = styled(Container)`
  background-color: #394a58;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 40px;
  padding-bottom: 70px;

  &.logged .unset {
  }

  textarea {
    height: 175px;
    resize: vertical;
    max-height: 275px;
    width: 100%;
  }

  .dark {
    background-color: #30373e;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Descricao = styled.span`
  font-size: 20px;

  color: white;
`;

const Textarea = styled.textarea`
  border-color: #004b5b;
  border-radius: 4px;
`;

const TextH6 = styled.h6`
  font-size: 18px;
  color: #a7a7a7;
  font-weight: lighter;
  margin: 0px;
`;

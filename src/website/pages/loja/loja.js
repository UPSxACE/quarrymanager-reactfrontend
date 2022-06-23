import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";
import lojaPic from "../../../images/website/granitoAmarelo.jpg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export { LojaHome };

function LojaHome(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/produto/produtos-loja?fields=tituloArtigo,preco&expand=id",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        setData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  return (
    <Container fluid>
      <StyledRowDark className="stretch">
        {/*<StyledColLight xs={3}>SIDEBAR FILTROS</StyledColLight>*/}

        <Col xs={12}>
          <PageHeader className="ps-4 pt-3 pb-5 d-flex pe-4">
            <DisplayH1>A Nossa Loja</DisplayH1>
            <Search className="searchWrapper">
              <div className="search d-flex">
                <input
                  type="text"
                  className="search-input flex-grow-1"
                  placeholder="Search..."
                />
                <div class="iconBox text-center">
                  <button className="search-icon">
                    <FontAwesomeIcon
                      className={"i"}
                      icon={faSearch}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </Search>
          </PageHeader>

          <Container fluid className="g-0 pe-4 ps-4">
            <StyledRowDark>
              {data.map((produto, index) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    xxl={3}
                    className="mb-5 d-flex justify-content-center"
                    key={index}
                  >
                    <Card>
                      <Link to={"/loja/produto/" + produto.id}>
                        <Image src={lojaPic} />
                      </Link>
                      <div className="d-flex pt-2">
                        <Link to={"/loja/produto/" + produto.id}>
                          <H5>{produto.tituloArtigo}</H5>
                        </Link>

                        <H5 className="ms-auto">{produto.preco}€/m²</H5>
                      </div>
                    </Card>
                  </Col>
                );
              })}
              <TablePager />
            </StyledRowDark>
          </Container>
        </Col>
      </StyledRowDark>
    </Container>
  );
}

const StyledRowDark = styled(Row)`
  background-color: #394a58;

  @media (min-width: 1400px) and (max-width: 1480px) {
    .col-xxl-3 {
      width: 33.33333333% !important;
    }
  }
`;

const StyledColLight = styled(Col)`
  background-color: #596d81;
`;

const Card = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 50%));
  padding: 20px;
  background-color: #596d81;

  a {
    text-decoration: none;
  }
`;

const Image = styled.img``;

function TablePager() {
  return (
    <div className="w-100">
      <PagerComponent className="w-100 text-center d-flex justify-content-center p-5">
        <PagerText className="left">Anterior</PagerText>
        <PagerNumber className="active">1</PagerNumber>
        <PagerNumber>2</PagerNumber>
        <PagerNumber>3</PagerNumber>
        <PagerNumber>4</PagerNumber>
        <PagerNumber>5</PagerNumber>
        <PagerNumber>6</PagerNumber>
        <PagerNumber>...</PagerNumber>
        <PagerText className="right">Próxima</PagerText>
      </PagerComponent>
    </div>
  );
}

const PagerComponent = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 50%));
`;

const PagerNumber = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #596d81;
  border-bottom: 1px solid #596d81;
  border-left: 1px solid #596d81;
  background-color: #fff;
  color: #394a58;

  &.active {
    color: white;
    background-color: #30373e;
  }
`;

const PagerText = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #596d81;
  border-bottom: 1px solid #596d81;
  border-left: 1px solid #596d81;
  background-color: #fff;
  color: #394a58;

  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid #596d81;
  }
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.div`
  margin-left: auto;

  &.searchWrapper {
    width: 500px;
  }

  button {
    all: unset;
  }

  .iconBox {
    display: flex;
    justify-content: center;
    width: 75px;
    height: 55px;
    background-color: #30373e;
  }

  .search-input {
    font-size: 28px;
    min-width: 0; /* linha de código para concertar o resize automático da tag input */
  }

  .iconBox .i {
    color: white;
    font-size: 28px;
    line-height: 55px;
  }
`;

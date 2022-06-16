import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";
import lojaPic from "../../../images/website/granitoAmarelo.jpg";

export { LojaHome };

function LojaHome() {
  return (
    <Container fluid>
      <StyledRowDark>
        <StyledColLight xs={3}>SIDEBAR FILTROS</StyledColLight>

        <Col xs={9}>
          <DisplayH1>NOSSA LOJA</DisplayH1>
          <Container>
            <StyledRowDark>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>

              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <Col xs={6} className="mb-5 d-flex justify-content-center">
                <CardImage>
                  <img src={lojaPic} />
                </CardImage>
              </Col>
              <TablePager></TablePager>
            </StyledRowDark>
          </Container>
        </Col>
      </StyledRowDark>
    </Container>
  );
}

const StyledRowDark = styled(Row)`
  background-color: #394a58;
`;

const StyledColLight = styled(Col)`
  background-color: #596d81;
`;

const CardImage = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 50%));
  border: 30px solid #596d81;
  width: 359px;
  height: 263px;
`;

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

const PagerComponent = styled.div``;

const PagerNumber = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
  background-color: #fff;
  color: #394a58;

  &.active {
    color: white;
    background-color: #30373e;
  }
`;

const PagerText = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
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
    border-right: 1px solid #bbbbbb;
  }
`;

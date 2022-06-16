import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H5, H3 } from "../../components/text";
import styled from "styled-components";

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
              <Col xs={6}>
                <div>FOTO</div>
              </Col>
              <Col xs={6}>
                <div>FOTO</div>FOTO
              </Col>
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

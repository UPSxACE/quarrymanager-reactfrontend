import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DisplayH1, H1, Paragraph, H2, H3 } from "../../components/text";
import styled from "styled-components";
import mainPicture from "../../../images/website/mainPicture.jpg";
export { Home };

function Home() {
  return (
    <Container fluid className="main">
      <Row>
        <Col xs={12}>
          <MainPicture src={mainPicture}></MainPicture>
        </Col>{" "}
      </Row>

      <Row>
        <Col xs={12}>
          <Container fluid>
            <Row>
              <SloganContainer>
                <Col xs={6}>
                  <H1>
                    <strong>weDELIVER</strong>
                  </H1>
                </Col>
                <Col xs={6}>
                  <H1>
                    <strong>weDELIVER</strong>
                  </H1>
                </Col>
              </SloganContainer>
            </Row>
          </Container>
        </Col>{" "}
      </Row>
    </Container>
  );
}

const MainPicture = styled.img`
  height: calc((100vh - 80px) * 0.85);
  width: 100%;
  object-fit: cover;
`;

const SloganContainer = styled.div((props) => ({
  backgroundColor: "#394A58",
}));

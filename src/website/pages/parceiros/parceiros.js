import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import { DisplayH1 } from "../../components/text";
import { ColoredContainer } from "../../components/containers";
import parceiro1 from "../../../images/website/parceiro1.png";
import parceiro2 from "../../../images/website/parceiro2.png";
import parceiro3 from "../../../images/website/parceiro3.png";
import parceiro4 from "../../../images/website/parceiro4.png";
import parceiro5 from "../../../images/website/parceiro5.png";
import parceiro6 from "../../../images/website/parceiro6.png";
export { Parceiros };

function Parceiros() {
  return (
    <ColoredContainer className="main" fluid>
      <Row className="pt-5 pb-5">
        <Col xs={12}>
          <DisplayH1 className="text-center">Parceiros Comerciais</DisplayH1>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xxl={9} xl={10} lg={11} md={12}>
              <Container fluid>
                <Row>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro1} />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro2} />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro3} />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro4} />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro5} />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    xl={4}
                    className="d-flex justify-content-center"
                  >
                    <LogoParceiro src={parceiro6} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </ColoredContainer>
  );
}

const LogoParceiro = styled.img`
  height: 60px;
`;

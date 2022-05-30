import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardContainer,
  DashboardRow,
} from "../../components/layoutComponents";

export { DashboardNovoLote };

//teste
function DashboardNovoLote() {
  return (
    <DashboardLayout>
      <Container fluid>
        <DashboardRow>
          <Col xs={12}>
            <Container>
              <Row>
                <Col>
                  <h1>Material</h1>
                </Col>
                <Col>
                  <h1>Côr</h1>
                </Col>
                <Col>
                  <h1>ID Lote</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Local de Retirada</h1>
                </Col>
                <Col>
                  <h1>Data/Hora</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Quantidade</h1>
                </Col>
                <Col>
                  <Container>
                    <Row>
                      <Col>
                        <h1>Cordenadas GPS</h1>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </DashboardRow>
      </Container>
      <DashboardRow className="mt-5" fluid>
        <h1>Imagens</h1>
        <h1>Upload Imagem</h1>
      </DashboardRow>

      <DashboardRow className="mt-5">
        <Col>
          <a href="#">
            <button>
              <h1>Submeter</h1>
            </button>
          </a>
        </Col>
      </DashboardRow>
    </DashboardLayout>
  );
}

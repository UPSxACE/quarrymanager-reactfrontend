import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import { DisplayH1 } from "../../components/text";
import { ColoredContainer } from "../../components/containers";
export { Parceiros };

function Parceiros() {
  return (
    <ColoredContainer className="main" fluid>
      <Row>
        <Col xs={12}>
          <DisplayH1>Parceiros</DisplayH1>
        </Col>
      </Row>
    </ColoredContainer>
  );
}

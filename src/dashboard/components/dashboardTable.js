import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
export { DashboardTable };

function DashboardTable(props) {
  return (
    <TableWrapper>
      <TableStyle>{props.children}</TableStyle>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 2px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

  th,
  td {
    white-space: nowrap;
  }
`;

const TableStyle = styled.table`
  width: 100%;
`;

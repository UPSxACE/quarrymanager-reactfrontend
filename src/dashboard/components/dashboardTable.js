import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
export { DashboardTable, TablePager };

function DashboardTable(props) {
  return (
    <TableWrapper>
      <TableStyle>{props.children}</TableStyle>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 75, 91, 0.04);
  color: #004b5b;

  th {
    white-space: nowrap;
    padding: 15px;
  }

  td {
    white-space: nowrap;
    border-top: 1px solid #bbbbbb;
    border-bottom: 1px solid #bbbbbb;

    padding: 15px;
  }

  tr {
    border-top: 1px solid #bbbbbb;
    border-bottom: 1px solid #bbbbbb;
    border-left: 1px solid #bbbbbb;
  }
`;

const TableStyle = styled.table`
  width: 100%;
`;

function TablePager() {
  return (
    <div className="w-100">
      <PagerComponent className="w-100 text-center d-flex justify-content-center p-5">
        <PagerText className="left">Anterior</PagerText>
        <PagerNumber className="active">1</PagerNumber>
        <PagerNumber>2</PagerNumber>
        <PagerNumber>3</PagerNumber>
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
  background-color: rgba(0, 75, 91, 0.04);
  color: #004b5b;

  &.active {
    color: white;
    background-color: #004b5b;
  }
`;

const PagerText = styled.div`
  padding: 7px 13px 7px 13px;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
  background-color: rgba(0, 75, 91, 0.04);
  color: #004b5b;

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

import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export { DashboardTable, TablePager };

function DashboardTable(props) {
  // ex de objeto recebido: {id: "Order ID", username: "Username", dateTime: "Date of arrival"}
  const [data, setData] = useState([]); // dados vindos da API
  const [labels, setLabels] = useState([]); // ex: ["Order ID", "Username", "Date of arrivale"]
  const [fields, setFields] = useState([]); //ex: ["id", "username", "dateTime"]
  const [endPoint, setEndpoint] = useState(props.endPoint);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(endPoint, {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        });

        setData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
    setLabels(() => {
      const checkLabelsIfArray = (possible_array) => {
        if (Array.isArray(possible_array)) {
          return checkLabelsIfArray(possible_array[1]);
        }
        return possible_array;
      };
      return Object.values(props.labels).map((label) => {
        return checkLabelsIfArray(label);
      });
    });
    setFields(Object.keys(props.labels));
  }, []);

  return (
    <TableWrapper>
      <TableStyle>
        <thead>
          <tr>
            {labels.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            return (
              <tr key={index}>
                {fields.map((field) => {
                  let contador_relacoes = 0;
                  let relacoes = [];
                  // se o field for um array
                  const checkIfArray = (possible_array) => {
                    if (Array.isArray(possible_array)) {
                      contador_relacoes++;
                      relacoes = [...relacoes, possible_array[0]];

                      return checkIfArray(possible_array[1]);
                    } else {
                      switch (contador_relacoes) {
                        case 0:
                          return <td key={entry + field}>{entry[field]}</td>;
                        case 1:
                          return (
                            <td key={entry + field}>
                              {entry[relacoes[0]][field]}
                            </td>
                          );
                        case 2:
                          return (
                            <td key={entry + field}>
                              {entry[relacoes[0]][relacoes[1]][field]}
                            </td>
                          );
                        case 3:
                          return (
                            <td key={entry + field}>
                              {
                                entry[relacoes[0]][relacoes[1]][relacoes[2]][
                                  field
                                ]
                              }
                            </td>
                          );
                        default:
                          return <td key={entry + field}>{entry[field]}</td>;
                      }
                    }
                  };

                  return checkIfArray(props.labels[field]);
                })}
              </tr>
            );
          })}
        </tbody>
      </TableStyle>
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

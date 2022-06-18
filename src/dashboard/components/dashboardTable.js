import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export { DashboardTable, TablePager };

function DashboardTable(props) {
  // ex de objeto recebido: {id: "Order ID", username: "Username", dateTime: "Date of arrival"}
  const [data, setData] = useState([]); // dados vindos da API
  const [labels, setLabels] = useState([]); // ex: ["Order ID", "Username", "Date of arrivale"]
  const [fields, setFields] = useState([]); //ex: ["id", "username", "dateTime"]
  const [endPoint, setEndpoint] = useState(
    "http://localhost:8080/api/" + props.endPoint
  );

  function getBlankTables(length) {
    let rows = [];

    for (let i = length; i < 10; i++) {
      rows.push(
        <tr key={i}>
          <td>&nbsp;</td>
        </tr>
      );
    }

    return <>{rows}</>;
  }

  function renderActions(index, reference) {
    let actions = [];
    if (props.view) {
      actions.push(
        <Link
          className="actionLink"
          key={index + "view"}
          to={"/dashboard/" + props.view + "/" + reference}
        >
          <FontAwesomeIcon
            className="align-self-center action"
            icon={faEye}
          ></FontAwesomeIcon>
        </Link>
      );
    }
    if (props.edit) {
      actions.push(
        <Link
          className="actionLink"
          key={index + "edit"}
          to={"/dashboard/" + props.edit + "/" + reference}
        >
          <FontAwesomeIcon
            className="align-self-center action"
            icon={faPen}
          ></FontAwesomeIcon>
        </Link>
      );
    }
    if (props.delete) {
      actions.push(
        <button className="actionLink" key={index + "delete"}>
          <FontAwesomeIcon
            className="align-self-center action"
            icon={faTrash}
          ></FontAwesomeIcon>
        </button>
      );
    }
    return <>{actions}</>;
  }

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

        //console.log(resp.request.getResponseHeader("X-Pagination-Page-Count"));
        console.log(resp.headers["x-pagination-page-count"]);
        props.updateLimit(resp.headers["x-pagination-page-count"]);
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
            {labels.map((label, index) => {
              if (labels.length - 1 === index && props.actions) {
                return (
                  <React.Fragment key={"actions" + index}>
                    <th>{label}</th>
                    <th>Ações</th>
                  </React.Fragment>
                );
              }
              return <th key={label}>{label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            return (
              <tr key={index}>
                {fields.map((field, index2) => {
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
                          if (fields.length - 1 === index2 && props.actions) {
                            return (
                              <React.Fragment key={"action" + index2 + "-c0"}>
                                <td>{entry[field.replaceAll("$", "")]}</td>
                                <td>
                                  <div>
                                    {renderActions(
                                      index2,
                                      entry[props.reference]
                                    )}
                                  </div>
                                </td>
                              </React.Fragment>
                            );
                          }

                          return (
                            <td key={field + index + index2}>
                              {entry[field.replaceAll("$", "")]}
                            </td>
                          );
                        case 1:
                          if (fields.length - 1 === index2 && props.actions) {
                            return (
                              <React.Fragment key={"action" + index2 + "-c1"}>
                                <td>
                                  {
                                    entry[relacoes[0]][
                                      field.replaceAll("$", "")
                                    ]
                                  }
                                </td>
                                <td>
                                  <div>
                                    {renderActions(
                                      index2,
                                      entry[props.reference]
                                    )}
                                  </div>
                                </td>
                              </React.Fragment>
                            );
                          }

                          return (
                            <td key={field + index + index2}>
                              {entry[relacoes[0]][field.replaceAll("$", "")]}
                            </td>
                          );
                        case 2:
                          if (fields.length - 1 === index2 && props.actions) {
                            return (
                              <React.Fragment key={"action" + index2 + "-c2"}>
                                <td>
                                  {" "}
                                  {
                                    entry[relacoes[0]][relacoes[1]][
                                      field.replaceAll("$", "")
                                    ]
                                  }
                                </td>
                                <td>
                                  <div>
                                    {renderActions(
                                      index2,
                                      entry[props.reference]
                                    )}
                                  </div>
                                </td>
                              </React.Fragment>
                            );
                          }

                          return (
                            <td key={field + index + index2}>
                              {
                                entry[relacoes[0]][relacoes[1]][
                                  field.replaceAll("$", "")
                                ]
                              }
                            </td>
                          );
                        case 3:
                          if (fields.length - 1 === index2 && props.actions) {
                            return (
                              <React.Fragment key={"action" + index2 + "-c3"}>
                                <td>
                                  {
                                    entry[relacoes[0]][relacoes[1]][
                                      relacoes[2]
                                    ][field.replaceAll("$", "")]
                                  }
                                </td>
                                <td>
                                  <div>
                                    {renderActions(
                                      index2,
                                      entry[props.reference]
                                    )}
                                  </div>
                                </td>
                              </React.Fragment>
                            );
                          }

                          return (
                            <td key={field + index + index2}>
                              {
                                entry[relacoes[0]][relacoes[1]][relacoes[2]][
                                  field.replaceAll("$", "")
                                ]
                              }
                            </td>
                          );
                        default:
                          if (fields.length - 1 === index2 && props.actions) {
                            return (
                              <React.Fragment key={"action" + index2 + "-cd"}>
                                <td>{entry[field.replaceAll("$", "")]}</td>
                                <td>
                                  <div>
                                    {renderActions(
                                      index2,
                                      entry[props.reference]
                                    )}
                                  </div>
                                </td>
                              </React.Fragment>
                            );
                          }

                          return (
                            <td key={field + index + index2}>
                              {entry[field.replaceAll("$", "")]}
                            </td>
                          );
                      }
                    }
                  };

                  return checkIfArray(props.labels[field]);
                })}
              </tr>
            );
          })}
          {data.length < 10 && <>{getBlankTables(data.length)}</>}
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

  .action {
    border: 1px solid black;
    padding: 3px;
    border-radius: 3px;
    height: 16px;
    width: 16px;
  }

  .actionLink:not(:first-child) {
    margin-left: 5px;
  }

  a {
    color: #004b5b;
  }

  button {
    all: unset;
  }

  td div {
    line-height: 0px;
  }
`;

const TableStyle = styled.table`
  width: 100%;

  tbody {
    height: 576px;
  }
`;

function TablePager(props) {
  console.log(props);
  function getPageButtons(active, limit) {
    let buttons = [];

    for (let i = 0; i < limit; i++) {
      if (i + 1 !== active) {
        buttons.push(
          <ClickableButton
            key={i}
            onClick={() => {
              props.updatePager(i + 1, limit);
            }}
          >
            <PagerNumber key={i}>{i + 1}</PagerNumber>
          </ClickableButton>
        );
      } else {
        buttons.push(
          <PagerNumber key={i} className="active">
            {i + 1}
          </PagerNumber>
        );
      }
    }

    return <>{buttons}</>;
  }

  if (typeof props.activePage === "undefined") {
    return <h1 className="text-center">missing props</h1>;
  }

  return (
    <div className="w-100">
      <PagerComponent className="w-100 text-center d-flex justify-content-center p-5">
        <PagerText
          className="left"
          onClick={() => {
            props.updatePager(props.activePage - 1, props.limitPage);
          }}
        >
          Anterior
        </PagerText>
        {getPageButtons(props.activePage, props.limitPage)}
        <PagerText
          className="right"
          onClick={() => {
            props.updatePager(props.activePage + 1, props.limitPage);
          }}
        >
          Próxima
        </PagerText>
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

const PagerText = styled.button`
  all: unset;
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

const ClickableButton = styled.button`
  all: unset;
`;

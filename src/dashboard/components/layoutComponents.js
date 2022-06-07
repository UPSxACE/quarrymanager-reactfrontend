import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
export {
  DashboardContainer,
  DashboardRow,
  DashboardCol,
  H1,
  H2,
  H3,
  H5,
  H1Alt,
  Paragraph,
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
};

const DashboardContainer = styled(Container)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DashboardRow = styled(Row)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DashboardCol = styled(Col)`
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const textColor1 = "#004B5B"; // verde escuro

const H1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "40px",
  textAlign: props.textAlign,
}));

const H2 = styled.h2((props) => ({
  color: textColor1,
  fontSize: "32px",
  textAlign: props.textAlign,
}));

const Paragraph = styled.p((props) => ({
  color: textColor1,
  fontSize: "19px",
  textAlign: "justify",
  fontWeight: props.fontWeight,
  fontStyle: props.fontStyle,
}));

const H3 = styled.h3((props) => ({
  color: textColor1,
  fontSize: "28px",
}));

const H5 = styled.h5((props) => ({
  color: props.orange ? "#d69b7f" : "white",
  fontSize: "20px",
  fontWeight: "normal",
  textAlign: props.textAlign,
}));

const H1Alt = styled(H1)`
  color: ${(props) => {
    switch (props.textColor) {
      case 1:
        return textColor1;
      default:
        return "black";
    }
  }};
`;

const DashboardMenu = styled.nav`
  height: 75px;
  background-color: ${(props) =>
    props.dark ? "grey" : "rgba(0, 75, 91, 0.04)"};
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

function DashboardMenuList(props) {
  return (
    <DashboardMenuListComponent>
      {props.listItems.map((item, index) => {
        if (props.activeItem === index) {
          return (
            <Button
              className="active"
              key={index}
              onClick={() => {
                props.tabClickFunction(index);
              }}
            >
              <DashboardMenuListItem className="active">
                <H3>{item}</H3>
              </DashboardMenuListItem>
            </Button>
          );
        }

        return (
          <Button
            key={index}
            onClick={() => {
              props.tabClickFunction(index);
            }}
          >
            <DashboardMenuListItem>
              <H3>{item}</H3>
            </DashboardMenuListItem>
          </Button>
        );
      })}

      {/* props.rightButton -> array (opcional)
           props.activeItem -> number

           1 Verificar se está definido o rightButton
           2 Verificar se a string na posição correspondente ao numero do activeItem não está vazia
           3 Se ambas as verificações derem true vai renderizar o buttonRight. 
           
        */}

      {props.rightButton && props.rightButton[props.activeItem] !== "" && (
        <ButtonRight>
          <DashboardMenuListItemRight>
            <H3>{props.rightButton[props.activeItem]}</H3>
          </DashboardMenuListItemRight>
        </ButtonRight>
      )}
    </DashboardMenuListComponent>
  );
}

const DashboardMenuListComponent = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  height: 100%;
  border: 2px solid #bbbbbb;
  border-radius: 5px;
  border-radius: 5px;
`;

const DashboardMenuListItem = styled.li`
  height: 100%;
  padding: 16px 32px;
  display: flex;
  align-content: center;
  border-right: 2px solid #bbbbbb;
  background-color: #f5f8f9;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 43px;
    font-weight: bold;
  }

  /* &.active:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  */

  &.active {
    background-color: ${textColor1};
  }
  &.active h1 {
    color: white;
  }
  &.active h2 {
    color: white;
  }
  &.active h3 {
    color: white;
  }
  &.active h4 {
    color: white;
  }
  &.active h5 {
    color: white;
  }
  &.active h6 {
    color: white;
  }
`;

const DashboardMenuListItemRight = styled(DashboardMenuListItem)`
  margin-left: auto;
  border-left: 2px solid #bbbbbb;
  border-right: none;
  padding: 16px 10px;
`;

const Button = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 0;

  &.active:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:first-child .active {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

const ButtonRight = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 0;
  margin-left: auto;
`;

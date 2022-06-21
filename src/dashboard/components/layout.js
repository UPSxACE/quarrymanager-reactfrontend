import React, { useContext, useEffect, useState } from "react";
import {} from "react-bootstrap";
import styled from "styled-components";
import { DashboardSidebar } from "./sidebar";
import { H1Alt } from "./layoutComponents";
import axios from "axios";
import { DashboardTabContext } from "../../App";
export { DashboardLayout };

function DashboardLayout(props) {
  const [put, findStats] = useState({});
  const [currentTab, setTab] = useContext(DashboardTabContext);

  function getPageName() {
    switch (currentTab) {
      case "hom":
        return "Home";
      case "sto":
        return "Stock";
      case "enc":
        return "Encomendas";
      case "loj":
        return "Loja";
      case "uti":
        return "Utilizadores";
      case "loc":
        return "Locais";
      case "log":
        return "Logs";
      default:
        return "";
    }
  }

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios(
          "http://localhost:8080/api/profile/get-profile?expand=username",
          {
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
            },
          }
        );

        findStats(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  return (
    <BackgoundDiv className="DashboardLayout d-flex">
      <aside>
        <DashboardSidebar tab={props.tab} />
      </aside>
      <ContentDiv>
        <PageHeader className="d-flex w-100">
          <H1Alt textColor={1}>{getPageName()}</H1Alt>
          <div className="userMenu d-flex ms-auto">
            <H1Alt className="ps-3" textColor={1}>
              {put.username ? put.username : ""}
            </H1Alt>
            <H1Alt className="ps-3" textColor={1}>
              icone
            </H1Alt>
            <H1Alt className="ps-3" textColor={1}>
              Seta
            </H1Alt>
          </div>
        </PageHeader>
        <div className="page-content p-5">{props.children}</div>
      </ContentDiv>
    </BackgoundDiv>
  );
}

const PageHeader = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  height: calc(40px + 30px);
`;

const ContentDiv = styled.div`
  width: calc(100% - 70px);
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BackgoundDiv = styled.div`
  background-color: #fff;
`;

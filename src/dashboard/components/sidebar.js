import { Container, Row, Col } from "react-bootstrap";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo38pxWhite from "../../images/dashboard/wR38pxWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLayerGroup,
  faClipboardList,
  faCartShopping,
  faUserGear,
  faScrewdriverWrench,
  faBullhorn,
  faCircleQuestion,
  faRightFromBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DashboardTabContext } from "../../App";

export { DashboardSidebar };
//
function DashboardSidebar(props) {
  const [currentTab, setTab] = useContext(DashboardTabContext);

  return (
    <StyledSideBar>
      <DashboardLogo className="d-flex justify-content-center">
        <Link to="/dashboard/home">
          <img src={logo38pxWhite} />
        </Link>
      </DashboardLogo>
      <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
        <IconSidebarList
          className={
            currentTab === "hom" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/home">
            <SidebarIcon
              icon={faHouse}
              className={currentTab === "hom" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "sto" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/stock">
            <SidebarIcon
              icon={faLayerGroup}
              className={currentTab === "sto" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "enc" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/encomendas">
            <SidebarIcon
              icon={faClipboardList}
              className={currentTab === "enc" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "loj" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/loja">
            <SidebarIcon
              icon={faCartShopping}
              className={currentTab === "loj" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "uti" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/utilizadores">
            <SidebarIcon
              icon={faUserGear}
              className={currentTab === "uti" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "loc" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/locais">
            <SidebarIcon
              icon={faScrewdriverWrench}
              className={currentTab === "loc" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "log" ? "text-center active" : "text-center"
          }
        >
          <Link to="/dashboard/logs">
            <SidebarIcon
              icon={faBullhorn}
              className={currentTab === "log" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
        <IconSidebarList
          className={
            currentTab === "aju" ? "text-center active" : "text-center"
          }
        >
          <Link to="">
            <SidebarIcon
              icon={faCircleQuestion}
              className={currentTab === "aju" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>

        <IconSidebarList
          className={
            currentTab === "bac" ? "text-center active" : "text-center"
          }
        >
          <Link to="/home">
            <SidebarIcon
              icon={faRightFromBracket}
              className={currentTab === "bac" ? "active" : ""}
            />
          </Link>
        </IconSidebarList>
      </NavigationItems>
      <ThemeColorButton className="text-center">
        <Link to="">
          {" "}
          <SidebarIcon
            icon={faSun}
            className={currentTab === "mod" ? "active" : ""}
          />
        </Link>
      </ThemeColorButton>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70px;
  background-color: #004b5b;
  filter: drop-shadow(1px 0px 7px rgba(0, 0, 0, 0.25));
`;

const DashboardLogo = styled.div`
  padding-top: 30px;
  height: calc(38px + 30px);
`;

const ThemeColorButton = styled.div`
  padding-bottom: 30px;
`;

const NavigationItems = styled.ul`
  padding: 0;
  list-style: none;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 28px;

  &.active {
    color: #004b5b;
  }
`;

const IconSidebarList = styled.li`
  /*  background-color: ${(props) => (props.green ? "#004b5b" : "white")};  */

  padding-top: 10px;
  padding-bottom: 10px;

  &:not(:last-child) {
  }

  &.active {
    background-color: white;
    color: #004b5b;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
`;

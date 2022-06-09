import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
export { DashboardSidebar };

function DashboardSidebar() {
  return (
    <StyledSideBar>
      <DashboardLogo className="d-flex justify-content-center">
        <a href="/dashboard/home">
          <img src={logo38pxWhite} />
        </a>
      </DashboardLogo>
      <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
        <IconSidebarList className="text-center active">
          <a href="/dashboard/home">
            <SidebarIcon icon={faHouse} className="active" />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/stock">
            <SidebarIcon icon={faLayerGroup} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/encomendas">
            <SidebarIcon icon={faClipboardList} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/loja">
            <SidebarIcon icon={faCartShopping} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/utilizadores">
            <SidebarIcon icon={faUserGear} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/locais">
            <SidebarIcon icon={faScrewdriverWrench} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center">
          <a href="/dashboard/logs">
            <SidebarIcon icon={faBullhorn} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faCircleQuestion} />
          </a>
        </IconSidebarList>
      </NavigationItems>
      <ThemeColorButton className="text-center">
        <a href="#">Button</a>
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

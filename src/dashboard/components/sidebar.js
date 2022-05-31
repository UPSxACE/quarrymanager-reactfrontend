import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import logo90pxWhite from "../../images/dashboard/wR90pxWhite.png";
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
          <img src={logo90pxWhite} />
        </a>
      </DashboardLogo>
      <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
        <IconSidebarList className="text-center pt-2 pb-2 active">
          <a href="/dashboard/home">
            <SidebarIcon icon={faHouse} className="active" />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faLayerGroup} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faClipboardList} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faCartShopping} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faUserGear} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
            <SidebarIcon icon={faScrewdriverWrench} />
          </a>
        </IconSidebarList>
        <IconSidebarList className="text-center pt-2 pb-2">
          <a href="#">
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
  width: 105px;
  background-color: #004b5b;
`;

const DashboardLogo = styled.div`
  padding-top: 30px;
  height: calc(60px + 30px);
`;

const ThemeColorButton = styled.div`
  padding-bottom: 30px;
`;

const NavigationItems = styled.ul`
  padding: 0;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 34px;

  &.active {
    color: #004b5b;
  }
`;

const IconSidebarList = styled.li`
  /*  background-color: ${(props) => (props.green ? "#004b5b" : "white")};  */

  &.active {
    background-color: white;
    color: #004b5b;
  }
`;

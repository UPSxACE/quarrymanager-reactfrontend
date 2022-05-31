import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import logo90pxBlack from "../../images/dashboard/wR90pxBlack.png";
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
        <img src={logo90pxBlack} />
      </DashboardLogo>
      <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faHouse} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faLayerGroup} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faClipboardList} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faCartShopping} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faUserGear} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faScrewdriverWrench} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faBullhorn} />
        </li>
        <li className="text-center pt-2 pb-2">
          <SidebarIcon icon={faCircleQuestion} />
        </li>
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
  background-color: grey;
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
  color: black;
  font-size: 34px;
`;

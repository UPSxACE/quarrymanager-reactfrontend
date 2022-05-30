import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import logo70pxBlack from "../../images/dashboard/wR70pxBlack.png";
export { DashboardSidebar };

function DashboardSidebar() {
  return (
    <StyledSideBar>
      <DashboardLogo className="d-flex justify-content-center">
        <img src={logo70pxBlack} />
      </DashboardLogo>
      <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
        <li></li>
      </NavigationItems>
      <ThemeColorButton>Button</ThemeColorButton>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 95px;
  background-color: grey;
`;

const DashboardLogo = styled.div`
  padding-top: 30px;
  height: calc(40px + 30px);
`;

const ThemeColorButton = styled.div`
  padding-bottom: 30px;
`;

const NavigationItems = styled.ul`
  padding: 0;
`;

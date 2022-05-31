import React, { useState } from "react";
import {} from "react-bootstrap";
import styled from "styled-components";
export { DashboardLayout };

function DashboardLayout(props) {
  return (
    <BackgoundDiv className="DashboardLayout d-flex">
      <aside>
        <SideNavBar className="d-flex flex-column">
          <DashboardLogo>Logo</DashboardLogo>
          <NavigationItems className="d-flex flex-grow-1 flex-column justify-content-center">
            Item List
          </NavigationItems>
          <ThemeColorButton>Button</ThemeColorButton>
        </SideNavBar>
      </aside>
      <ContentDiv>
        <PageHeader className="d-flex w-100">
          <h6>Props_Página_Nome</h6>
          <div className="userMenu d-flex ms-auto">
            <h6 className="ps-3">Props_Username</h6>
            <h6 className="ps-3">icone</h6>
            <h6 className="ps-3">Seta</h6>
          </div>
        </PageHeader>
        <div className="page-content p-5">{props.children}</div>
      </ContentDiv>
    </BackgoundDiv>
  );
}

const SideNavBar = styled.nav`
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

const PageHeader = styled.div`
  padding-top: 30px;
  height: calc(40px + 30px);
`;

const ContentDiv = styled.div`
  width: calc(100% - 95px);
`;

const BackgoundDiv = styled.div`
  background-color: #eff3f9;
`;

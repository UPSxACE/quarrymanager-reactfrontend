import React, { useState } from "react";
import {} from "react-bootstrap";
import styled from "styled-components";
import { DashboardSidebar } from "./sidebar";
export { DashboardLayout };

function DashboardLayout(props) {
  return (
    <div className="DashboardLayout d-flex">
      <aside>
        <DashboardSidebar />
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
        <div className="page-content">{props.children}</div>
      </ContentDiv>
    </div>
  );
}

const PageHeader = styled.div`
  padding-top: 30px;
  height: calc(40px + 30px);
`;

const ContentDiv = styled.div`
  width: calc(100% - 95px);
`;

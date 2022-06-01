import React, { useState } from "react";
import {} from "react-bootstrap";
import styled from "styled-components";
import { DashboardSidebar } from "./sidebar";
import { H1Alt, H1 } from "./layoutComponents";
export { DashboardLayout };

function DashboardLayout(props) {
  return (
    <BackgoundDiv className="DashboardLayout d-flex">
      <aside>
        <DashboardSidebar />
      </aside>
      <ContentDiv>
        <PageHeader className="d-flex w-100">
          <H1Alt textColor={1}>Nome</H1Alt>
          <div className="userMenu d-flex ms-auto">
            <H1Alt className="ps-3" textColor={1}>
              Props_Username
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
  width: calc(100% - 95px);
`;

const BackgoundDiv = styled.div`
  background-color: #fff;
`;

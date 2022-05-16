import React, { useState } from "react";
import styled from "styled-components";
export { SloganContainer };

const SloganContainer = styled.div`
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

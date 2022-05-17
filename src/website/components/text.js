import React, { useState } from "react";
import styled from "styled-components";
export { DisplayH1, H1, Paragraph, H2, H3 };

const textColor1 = "red";

const DisplayH1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "56px",
}));

const H1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "40px",
}));

const H2 = styled.h2((props) => ({
  color: textColor1,
  fontSize: "32px",
}));

const Paragraph = styled.p((props) => ({
  color: textColor1,
  fontSize: "20px",
}));

const H3 = styled.h3((props) => ({
  color: textColor1,
  fontSize: "28px",
}));

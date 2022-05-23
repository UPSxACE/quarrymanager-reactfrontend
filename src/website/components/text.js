import React, { useState } from "react";
import styled from "styled-components";
export { DisplayH1, H1, Paragraph, H2, H3, H5 };

const textColor1 = "White";

const DisplayH1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "56px",
  textAlign: props.textAlign,
}));

const H1 = styled.h1((props) => ({
  color: textColor1,
  fontSize: "40px",
  textAlign: props.textAlign,
}));

const H2 = styled.h2((props) => ({
  color: textColor1,
  fontSize: "32px",
  textAlign: props.textAlign,
}));

const Paragraph = styled.p((props) => ({
  color: textColor1,
  fontSize: "19px",
  textAlign: "justify",
  fontWeight: props.fontWeight,
  fontStyle: props.fontStyle,
}));

const H3 = styled.h3((props) => ({
  color: textColor1,
  fontSize: "28px",
}));

const H5 = styled.h5((props) => ({
  color: props.orange ? "#d69b7f" : "white",

  fontSize: "20px",
  fontWeight: "normal",
  textAlign: props.textAlign,
}));

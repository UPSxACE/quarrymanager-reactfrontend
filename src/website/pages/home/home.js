import React, { useState } from "react";
import { SloganContainer } from "./slogansContainer";
import { DisplayH1, H1, Paragraph, H2, H3 } from "../../components/text";
export { Home };

function Home() {
  return (
    <div class="main">
      <h1>home</h1>
      <SloganContainer backgroundColor={"blue"}>
        <h1>slogan</h1>
      </SloganContainer>
    </div>
  );
}

import { Button } from "react-bootstrap";
import React, { useState } from "react";
export { Equipa };

function BotaoAumentarContador(props) {
  return (
    <Button
      onClick={() => {
        props.funcaoAumentar(props.quantidade);
      }}
      variant="primary"
    >
      Aumentar Numero por {props.quantidade}
    </Button>
  );
}

function Equipa() {
  const [contador, atualizarContador] = useState(1);
  //estados
  //funções
  //return

  function aumentarContador(event) {
    event.preventDefault();

    atualizarContador(contador + 1);
  }

  function aumentarContadorPorX(quantidade) {
    atualizarContador(contador + quantidade);
  }

  return (
    <div>
      <h1>Equipa Nº{contador}</h1>
      <BotaoAumentarContador
        funcaoAumentar={aumentarContadorPorX}
        quantidade={1}
      >
        Aumentar Numero por 1
      </BotaoAumentarContador>
      <br></br>
      <BotaoAumentarContador
        funcaoAumentar={aumentarContadorPorX}
        quantidade={2}
      >
        Aumentar Numero por 2
      </BotaoAumentarContador>
      <br></br>
      <BotaoAumentarContador
        funcaoAumentar={aumentarContadorPorX}
        quantidade={3}
      >
        Aumentar Numero por 3
      </BotaoAumentarContador>
    </div>
  );
}

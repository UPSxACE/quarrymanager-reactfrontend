import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
export { Equipa };

function BotaoAumentarContador(props) {
  const { quantidade, funcaoAumentar } = props;

  return (
    <Button
      onClick={() => {
        funcaoAumentar(quantidade);
      }}
      variant="primary"
    >
      Aumentar Numero por {quantidade}
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
    //  function aumentarContadorPorX({quantidade})
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
      <br></br>
    </div>
  );
}

function ListarCriptos() {
  const [data, setData] = useState([]);
  console.log("teste", data);

  async function getCriptos() {
    const result = await axios("https://api.coincap.io/v2/assets");
    console.log(result);
    setData(result.data.data);
  }

  useEffect(() => {
    getCriptos();
  }, []);

  return data.map((objeto) => {
    return <li>{objeto.name}</li>;
  });
}

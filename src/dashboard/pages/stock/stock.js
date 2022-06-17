import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DashboardTable, TablePager } from "../../components/dashboardTable";
import { DashboardLayout } from "../../components/layout";
import {
  DashboardMenu,
  DashboardMenuList,
  DashboardMenuListItem,
  DashboardMenuListItemRight,
  H3,
} from "../../components/layoutComponents";

export { DashboardStock };

function getTable(activeTab) {
  console.log("teste", activeTab, 1);

  switch (activeTab) {
    case 0:
      return (
        <DashboardTable
          key={0}
          labels={{
            codigo_lote: "Código do Lote",
            nome: ["idProduto0", ["idMaterial0", "Material"]],
            $nome: ["idProduto0", ["idCor0", "Cor"]],
            quantidade: "Quantidade ",
            $$nome: ["idLocalExtracao0", "Local de Retirada"],
            coordenadasGPS_X: ["idLocalExtracao0", "Coordenadas GPS X"],
            coordenadasGPS_Y: ["idLocalExtracao0", "Coordenadas GPS Y"],
            dataHora: "Data",
          }}
          endPoint={"lote/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-lote"}
          edit={"editar-lote"}
          delete={"delete-lote"}
        ></DashboardTable>
      );
    case 1:
      return (
        <DashboardTable
          key={1}
          labels={{
            codigo_lote: "Código do Lote",
            nome: ["idProduto0", ["idMaterial0", "Material"]],
            $nome: ["idProduto0", ["idCor0", "Cor"]],
            quantidade: "Quantidade ",
            $$nome: ["idLocalExtracao0", "Local de Retirada"],
            coordenadasGPS_X: ["idLocalExtracao0", "Coordenadas GPS X"],
            coordenadasGPS_Y: ["idLocalExtracao0", "Coordenadas GPS Y"],
            dataHora: "Data",
          }}
          endPoint={"lote/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-lote"}
          edit={"editar-lote"}
          delete={"delete-lote"}
        ></DashboardTable>
      );
    case 2:
      return (
        <DashboardTable
          key={2}
          labels={{
            na_loja: "Na Loja",
            nome: ["idMaterial0", "Material"],
            $nome: ["idCor0", "Cor"],
            Res_Compressao: "Res. à Compressão",
            Res_Flexao: "Res. à Flexão",
            Massa_Vol_Aparente: "Massa Vol. Aparente",
            Absorcao_Agua: "Absorção de Água",
          }}
          endPoint={"produto/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-produto"}
          edit={"editar-produto"}
          delete={"delete-produto"}
        ></DashboardTable>
      );
    case 3:
      return (
        <DashboardTable
          key={3}
          labels={{
            nome: "Nome",

            prefixo: "Prefixo",
          }}
          endPoint={"material/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-material"}
          edit={"editar-material"}
          delete={"delete-material"}
        ></DashboardTable>
      );

    case 4:
      return (
        <DashboardTable
          key={4}
          labels={{
            nome: "Nome",

            prefixo: "Prefixo",
          }}
          endPoint={"cor/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-cor"}
          edit={"editar-cor"}
          delete={"delete-cor"}
        ></DashboardTable>
      );
    default:
      return (
        <DashboardTable
          key={0}
          labels={{
            codigo_lote: "Código do Lote",
            nome: ["idProduto0", ["idMaterial0", "Material"]],
            $nome: ["idProduto0", ["idCor0", "Cor"]],
            quantidade: "Quantidade ",
            $$nome: ["idLocalExtracao0", "Local de Retirada"],
            coordenadasGPS_X: ["idLocalExtracao0", "Coordenadas GPS X"],
            coordenadasGPS_Y: ["idLocalExtracao0", "Coordenadas GPS Y"],
            dataHora: "Data",
          }}
          endPoint={"lote/listar"}
          reference={"codigo_lote"}
          actions
          view={"ver-lote"}
          edit={"editar-lote"}
          delete={"delete-lote"}
        ></DashboardTable>
      );
  }
}

function DashboardStock(props) {
  const [activeTab, changeTab] = useState(props.tab);

  function handleTabClick(newTab) {
    changeTab(newTab);
  }

  return (
    <DashboardLayout tab={"sto"}>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12}>
            <DashboardMenu>
              <DashboardMenuList
                listItems={["Lotes", "Stock", "Produtos", "Materiais", "Cores"]}
                rightButton={[
                  ["Novo Lote", "novo-lote"],
                  "",
                  ["Novo Produto", "novo-produto"],
                  ["Novo Material", "novo-material"],
                  ["Nova Cor", "nova-cor"],
                ]}
                activeItem={activeTab}
                tabClickFunction={handleTabClick}
              ></DashboardMenuList>
            </DashboardMenu>
          </Col>
        </Row>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            {getTable(activeTab)}
            <TablePager />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}

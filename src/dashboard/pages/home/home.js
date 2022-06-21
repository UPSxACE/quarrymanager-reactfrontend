import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { DashboardTabContext } from "../../../App";

export { DashboardHome };

function DashboardHome() {
  const [stats, insertStats] = useState({
    pendentes: 0,
    confirmados: 0,
    finalizados: 0,
    cancelados: 0,
    financas: 0,
  });
  const labels = [
    "Pedra Branca",
    "Granito vermelho",
    "Mármore Amarelo",
    "Outros",
  ];

  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 30, boxHeight: 30 } },
    },
    datasets: { doughnut: { cutout: "65%" } },
  };

  const options3 = {
    scales: { y: { min: 0 } },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 30, boxHeight: 30 } },
    },
    datasets: { doughnut: { cutout: "65%" } },
  };

  const data1 = {
    labels: ["março", "abril", "maio", "junho"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4],
        backgroundColor: "#004B5B",
      },
      {
        label: "Dataset 2",
        data: [3, 1, 4, 2],
        backgroundColor: "#009A78",
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [4, 3, 2, 1],
        backgroundColor: ["#004B5B", "#057A81", "#009A78", "#000"],
      },
    ],
  };

  const data3 = {
    labels: [
      "Pendente",
      "Dados Confirmados",
      "Stock Confirmado",
      "Aguardar Pagamento",
      "Pagamento Confirmado",
      "Em Espera",
      "Recolhas Agendadas",
      "Recebido",
      "Finalizado",
    ],
    datasets: [
      {
        label: "Estados",
        data: [1, 3, 5, 2, 3, 1, 7, 8, 9],
        backgroundColor: ["#004B5B"],
      },
    ],
  };

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const username = "dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O";
        const password = "";

        const resp = await axios("http://localhost:8080/api/home/stats", {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        });

        insertStats(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    sendGetRequest();
  }, []);

  const [currentTab, setTab] = useContext(DashboardTabContext);

  useEffect(() => {
    setTab("hom");
  });

  return (
    <Container fluid>
      <Row>
        <Col xs={6} className="p-0">
          <Container fluid>
            <Row>
              <Col xs={4} className="ps-0">
                <CardGraph>
                  Pendentes
                  <NumberH1Graph className="pt-2">
                    {stats.pendentes}
                  </NumberH1Graph>
                </CardGraph>
              </Col>
              <Col xs={4}>
                <CardGraph>
                  Confirmados
                  <NumberH1Graph className="pt-2">
                    {stats.confirmados}
                  </NumberH1Graph>
                </CardGraph>
              </Col>
              <Col xs={4} className="pe-0">
                <CardGraph>
                  Finalizados
                  <NumberH1Graph className="pt-2">
                    {stats.finalizados}
                  </NumberH1Graph>
                </CardGraph>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={6} className="p-0">
          <Container fluid>
            <Row>
              <Col xs={4} className="ps-0">
                <CardGraph>
                  Cancelados
                  <NumberH1Graph className="pt-2">
                    {stats.cancelados}
                  </NumberH1Graph>
                </CardGraph>
              </Col>
              <Col xs={8} className="pe-0">
                <CardGraph>
                  Finanças
                  <NumberH1Graph className="pt-2">
                    {stats.financas}
                  </NumberH1Graph>
                </CardGraph>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="g-0 pt-4">
        <Col xs={12}>
          <div className="d-flex">
            <DashboardGraphWrapper className="left50 pt-1 pb-2">
              <TextH3Graph className="ps-3 pt-2 pb-5">
                Utilizadores Anuais
              </TextH3Graph>
              <DashboardGraph className="insideMargin pt-2 ">
                <BarChart chartData={data1} chartOptions={options1}></BarChart>
              </DashboardGraph>
            </DashboardGraphWrapper>
            <DashboardGraphWrapper className="right50 pt-1 pb-2">
              <TextH3Graph className="ps-3 pt-2 pb-5">
                Produtos Mais Vendidos
              </TextH3Graph>
              <DashboardGraph className="pt-2">
                <DoughnutChart
                  chartData={data2}
                  chartOptions={options2}
                ></DoughnutChart>
              </DashboardGraph>
            </DashboardGraphWrapper>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DashboardGraphWrapper className="pt-2 pb-3 ps-3 pe-5 mt-4">
            <TextH3Graph className="pt-2 pb-2">Estado dos Pedidos</TextH3Graph>
            <DashboardGraph3 className="pt-2">
              <LineChart chartData={data3} chartOptions={options3}></LineChart>
            </DashboardGraph3>
          </DashboardGraphWrapper>
        </Col>
      </Row>
    </Container>
  );
}

function BarChart({ chartData, chartOptions }) {
  return <Bar data={chartData} options={chartOptions}></Bar>;
}

function PieChart({ chartData, chartOptions }) {
  return <Pie data={chartData} options={chartOptions}></Pie>;
}

function DoughnutChart({ chartData, chartOptions }) {
  return <Doughnut data={chartData} options={chartOptions}></Doughnut>;
}

function LineChart({ chartData, chartOptions }) {
  return <Line data={chartData} options={chartOptions}></Line>;
}

const DashboardGraph = styled.div`
  position: relative;
  height: 400px;
`;

const DashboardGraph3 = styled.div`
  position: relative;
  height: 300px;
`;

const DashboardGraphWrapper = styled.div`
  background-color: rgba(0, 75, 91, 0.04);
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

  &.left50 {
    width: 49%;
    margin-right: 1%;
  }
  &.right50 {
    width: 49%;
    margin-left: 1%;
  }

  &.left50 .insideMargin {
    margin-left: 40px;
    margin-right: 40px;
  }

  &.right50 .insideMargin {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const TextH3Graph = styled.h3`
  color: #004b5b;
  fontsize: 28px;
`;

const NumberH1Graph = styled.h1`
  color: #004b5b;
  fontsize: 56px;
`;

const CardGraph = styled.div`
  color: #004b5b;
  background-color: rgba(0, 75, 91, 0.04);
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

  text-align: center;
`;

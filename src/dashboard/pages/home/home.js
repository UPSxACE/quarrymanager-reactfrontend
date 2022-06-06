import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export { DashboardHome };

function DashboardHome() {
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
  const data1 = {
    labels,
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
        backgroundColor: [
          "#004B5B",
          "#057A81",
          "#009A78",
          "#000",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
      <Container fluid>
        <Row>
          <Col xs={6} className="p-0">
            <Container fluid>
              <Row>
                <Col xs={4} className="ps-0">
                  <CardGraph>
                    Pendentes<NumberH1Graph className="pt-2">60</NumberH1Graph>
                  </CardGraph>
                </Col>
                <Col xs={4}>
                  <CardGraph>
                    Confirmados
                    <NumberH1Graph className="pt-2">150</NumberH1Graph>
                  </CardGraph>
                </Col>
                <Col xs={4} className="pe-0">
                  <CardGraph>
                    Finalizados
                    <NumberH1Graph className="pt-2">320</NumberH1Graph>
                  </CardGraph>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={6} className="p-0">
            {" "}
            <Container fluid>
              <Row>
                <Col xs={4} className="ps-0">
                  <CardGraph>
                    Cancelados<NumberH1Graph className="pt-2">2</NumberH1Graph>
                  </CardGraph>
                </Col>
                <Col xs={8} className="pe-0">
                  <CardGraph>
                    Finanças
                    <NumberH1Graph className="pt-2">2.0000000€</NumberH1Graph>
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
                  Status Anual
                </TextH3Graph>
                <DashboardGraph className="insideMargin pt-2 ">
                  <BarChart
                    chartData={data1}
                    chartOptions={options1}
                  ></BarChart>
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
          </Col>{" "}
        </Row>
      </Container>
    </DashboardLayout>
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

const DashboardGraph = styled.div`
  position: relative;
  height: 400px;
`;

const DashboardGraphWrapper = styled.div`
  background-color: rgba(0, 75, 91, 0.04);
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

  &.left50 {
    width: 50%;
    margin-right: 1%;
  }
  &.right50 {
    width: 50%;
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

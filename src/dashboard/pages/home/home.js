import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export { DashboardHome };

function DashboardHome() {
  const labels = ["janeiro", "fevereiro", "março", "abril"];
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
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [3, 1, 4, 2],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <h1>Isto é a home</h1>
            <div className="d-flex">
              <DashboardGraphWrapper className="left50 pt-1 pb-2">
                <h1>Status Anual</h1>
                <DashboardGraph className="insideMargin pt-2 ">
                  <BarChart
                    chartData={data1}
                    chartOptions={options1}
                  ></BarChart>
                </DashboardGraph>
              </DashboardGraphWrapper>
              <DashboardGraphWrapper className="right50 pt-1 pb-2">
                <h1>Produtos Mais Vendidos</h1>
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
    margin-right: 2%;
  }
  &.right50 {
    width: 50%;
    margin-left: 2%;
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

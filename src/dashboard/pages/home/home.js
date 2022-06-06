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
              <DashboardGraph className="left50">
                <BarChart chartData={data1} chartOptions={options1}></BarChart>
              </DashboardGraph>
              <DashboardGraph className="right50">
                <DoughnutChart
                  chartData={data2}
                  chartOptions={options2}
                ></DoughnutChart>
              </DashboardGraph>
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

  &.left50 {
    width: 50%;
    padding-right: 5%;
  }
  &.right50 {
    width: 50%;
    padding-left: 5%;
  }
`;

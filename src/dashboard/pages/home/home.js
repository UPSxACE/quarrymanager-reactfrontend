import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { DashboardLayout } from "../../components/layout";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export { DashboardHome };

function DashboardHome() {
  const labels = ["janeiro", "fevereiro", "março", "abril"];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const data = {
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

  return (
    <DashboardLayout>
      <Container fluid>
        <Row className="g-0 pt-5">
          <Col xs={12}>
            <h1>Isto é a home</h1>
            <div className="d-flex">
              <DashboardGraph className="left50">
                <BarChart chartData={data} chartOptions={options}></BarChart>
              </DashboardGraph>
              <DashboardGraph className="right50">
                <BarChart chartData={data} chartOptions={options}></BarChart>
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

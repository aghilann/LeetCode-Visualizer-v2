import React from "react";
import { Container } from "@mantine/core";
import { Chart } from "./BarChart";

export const BarGraph: React.FC = () => {
  return (
    <Container
      fluid={false}
      padding="xs"
      className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg my-10"
    >
      <Chart />
    </Container>
  );
};

import React from "react";
import { Grid } from "@mantine/core";
import { ContainerCard } from "./ContainerCard";
import "./ContainerCard.css";

const GridCards: React.FC = (props: any) => {
  const { className } = props;
  return (
    <div className={className}>
      <Grid grow>
        <Grid.Col span={3}>
          <ContainerCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <ContainerCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <ContainerCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default GridCards;

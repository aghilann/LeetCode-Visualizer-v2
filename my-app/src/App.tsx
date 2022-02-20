import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Container, Grid } from "@mantine/core";
import { BarGraph } from "./Components/Graph/BarGraph";
import PieGraph from "./Components/PieGraph/PieGraph";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Container padding="xl" size="xl">
        <Grid>
          <Grid.Col span={7}>
            <BarGraph />
          </Grid.Col>
          <Grid.Col span={5}>
            <PieGraph />
          </Grid.Col>
        </Grid>

        {/* <Container fluid={false} size="lg">
          <GridCards />
        </Container> */}
      </Container>
    </div>
  );
}

export default App;

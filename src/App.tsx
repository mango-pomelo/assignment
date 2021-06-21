import React from "react";
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <div
      className="App"
      style={{ margin: "16px", position: "relative", height: "100vh",background:"#e5d5ea" }}
    >

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "10%" }}
      >
        <Grid item xs={4} >
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={4} >
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={4}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={4}>
          <Box>Box 4</Box>
        </Grid>

        <Grid item xs={4}>
          <Box>Box 5</Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "20%" }}
      >
        <Grid item xs={6} >
          <Box>Box 21</Box>
        </Grid>

        <Grid item xs={7} >
          <Box>Box 22</Box>
        </Grid>

        <Grid item xs={7}>
          <Box>Box 23</Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "20%" }}
      >
        <Grid item xs={10} >
          <Box>Box 31</Box>
        </Grid>

        <Grid item xs={10} >
          <Box>Box 32</Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "20%" }}
      >
        <Grid item xs={20} >
          <Box>Box 41</Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "20%" }}
      >
        <Grid item xs={20} >
          <Box>Box add</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

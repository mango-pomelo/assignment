import React from "react";
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";
import {Card} from './components/Card/Card';
import {Card2} from './components/Card2/Card2';
import {Cardwithboxes} from './components/Cardwithboxes'

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
          <Card boldedText='$4,141.52'
          greyText='PPC spend'/>
        </Grid>

        <Grid item xs={4} >
          <Card boldedText='$25,777.67'
            greyText='PPC sales'/>
        </Grid>

        <Grid item xs={4}>
          <Card boldedText='16.07%'
            greyText='ACos(Advertising Cost of Sales)'/>
        </Grid>

        <Grid item xs={4}>
          <Card boldedText='$233,985,89'
            greyText='Total Sales'/>
        </Grid>

        <Grid item xs={4}>
          <Card boldedText='1.77%'
            greyText='Total Acos'/>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "20%" }}
      >
        <Grid item xs={6} >
          <Cardwithboxes boldedText='Summary'/>
        </Grid>

        <Grid item xs={7} >
          <Card2 boldedText='Top 5 products by spend'/> 
        </Grid>

        <Grid item xs={7}>
          <Card2 boldedText='Top 5 products by sales'/>
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

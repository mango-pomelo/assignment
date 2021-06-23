import React from "react";
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";
import {Card} from './components/Card/Card';
import {Card2} from './components/Card2/Card2';
import {Cardwithboxes} from './components/Cardwithboxes';
import {TreeGridComponent} from '@syncfusion/ej2-react-treegrid';
import '../src/App.css';
import { ACoSData } from './datasource1';
import { spendData } from './datasource2';
import styled from 'styled-components';
import Linechart from './components/LineChart';

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 18px;
    line-height: 22px;
`
const Container = styled.article`
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 15px;
`
const Container2 = styled.article`
    background: #ad49d8;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 15px;
    display: flex;
    justifyContent: center;
    flex-direction: column;
`
const Container3 = styled.article`
    background: #ffffff;
    display: flex;
    border-radius: 15px;
    justifyContent: center;
    flex-direction: column;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0);
`

const Image = styled.img`
    height :45px;
    object-fit:cover;
    width:45px;
    margin-top:12px;
    margin-left:20px;
`

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
        style={{ height: "22%" }}
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
        style={{ height: "27%" }}
      >
        <Grid item xs={10} >
          <Container>
            <Heading>Highest ACoS campaigns</Heading>
            <TreeGridComponent dataSource={ACoSData}></TreeGridComponent>
          </Container>
        </Grid>

        <Grid item xs={10} >
          <Container>
            <Heading>Highest spend keywords</Heading>
            <TreeGridComponent dataSource={spendData}></TreeGridComponent>
          </Container>
        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"

        style={{ height: "33%" }}
      >
        <Grid item xs={20}>
          <Container3><div style={{display: 'flex',  justifyContent:'center', alignItems:'center',boxShadow:"none" }}>
          <Linechart />
            </div></Container3>
          

        </Grid>
      </Grid>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "7%" }}
      >
        <Grid item xs={20} >
          <Container2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
      >
            <Image src='https://image.flaticon.com/icons/png/512/983/983952.png'
              alt="cur" className="center"
              />
              </div>
          </Container2>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

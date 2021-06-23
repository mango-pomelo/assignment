import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: 'May 24',
    spend: 420,
    cr: 560,
  },
  {
    name: 'May 25',
    spend: 800,
    cr: 500,
  },
  {
    name: 'May 26',
    spend: 460,
    cr: 560,
  },
  {
    name: 'May 27',
    spend: 780,
    cr: 580,
  },
  {
    name: 'May 28',
    spend: 400,
    cr: 720,
  },
  {
    name: 'May 29',
    spend: 800,
    cr: 580,
  },
  {
    name: 'May 30',
    spend: 410,
    cr: 520,
  },
];
const Container = styled.article`
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 15px
`

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`
export default function Linechart() {
  return (
    <Container>
      <Heading>May 24, 2021 to May 30, 2021</Heading>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[360, 840]}/>
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="spend" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="cr"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </Container>
  );
}

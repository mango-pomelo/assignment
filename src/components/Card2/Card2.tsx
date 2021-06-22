import React from 'react'
import styled from 'styled-components'
import Grid from '../Grid/Grid'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

interface CardProps2{
    /**
     * bolded balck text, for first 5 boxes
     */
    boldedText:string;
}

const Container = styled.article`
    width: 360px;
    height: 240px;
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 15px
    height:400px
`

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 18px;
    line-height: 22px;
`
const data = [
    { name: 'Others', value: 1975.45 },
    { name: 'B07MCGRV7M', value: 1815.67 },
    { name: 'B07X47P9GC', value: 595 },
    { name: 'B086JVLXW2', value: 189 },
    { name: 'B08R69L61K', value: 179 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#D9E1EC'];

export function Card2({boldedText}:CardProps2){
    return (
        <Container>
            <Heading>{boldedText}</Heading>
            <PieChart width={800} height={400} >
                <Pie
                data={data}
                cx={100}
                cy={75}
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
        </Container>
)
}
import React from 'react'
import styled from 'styled-components'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


interface CardProps{
    /**
     * bolded balck text, for first 5 boxes
     */
    boldedText:string;
    greyText:string;
}

const Container = styled.article`
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 5px
    `
const Layout = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start
    padding: 16px;
    font-size: 12px;
    font-weight : 400;
`

const ColoredLine = () => (
    <hr
        style={{
            color:'#ba92d1',
            backgroundColor: '#ba92d1',
            height: 2,
            borderColor : '#ba92d1',
            marginLeft: 6, 
            marginRight: 6
        }}
    />
);

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 25px;
    line-height: 40px;
`

export function Card({boldedText, greyText}:CardProps){
    return (
        <Container>
            <Heading>{boldedText}</Heading>
            
            <ColoredLine />
            <Layout>
                {greyText}
            </Layout>
        </Container>
)
}
   

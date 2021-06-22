import React from 'react'
import styled from 'styled-components'

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
    border-radius: 15px
`
const Layout = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start
    padding: 16px;
`

const ColoredLine = styled.line`
    color:black;
`

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 18px;
    line-height: 22px;
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
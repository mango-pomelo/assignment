import React from 'react'
import styled from 'styled-components'
import Grid from './Grid/Grid'
import {Smallbar} from './Smallbar/Smallbar'

interface CardwithboxesProps{
    /**
     * bolded balck text, for first 5 boxes
     */
    boldedText:string;
}

const Container = styled.article`
    width: 300px;
    height: 240px;
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 15px;
`

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 18px;
    line-height: 22px;
`

const image = styled.img`
    height :35px;
    object-fit:cover;
    width:100%;
`
export function Cardwithboxes({boldedText}:CardwithboxesProps){
    return (
        <Container>
            <Heading>{boldedText}</Heading>
            <Grid>
                <Smallbar boldedText='Product'
                number='1,152'
                url='https://image.flaticon.com/icons/png/512/679/679821.png'/>
                <Smallbar boldedText='Campaings'
                number='110'
                url='https://image.flaticon.com/icons/png/512/2011/2011379.png'/>
                <Smallbar boldedText='Ad Group'
                number='196'
                url='https://image.flaticon.com/icons/png/512/802/802033.png'/>
                <Smallbar boldedText='Keywords'
                number='21,336'
                url='https://image.flaticon.com/icons/png/512/3193/3193097.png'/>
            </Grid>
        </Container>
)
}
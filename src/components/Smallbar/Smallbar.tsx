import React from 'react'
import styled from 'styled-components'

interface SmallbarProps{
    /**
     * bolded balck text, for first 5 boxes
     */
    boldedText:string;
    number: string;
    url:string;
}

const Container = styled.article`
    background: #d1fae5;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
    border-radius: 12px;
    line-height:20px;
    flex-direction:row;
    display:felx;
    margin-right:10px;
    margin-left:10px;
`

const Heading = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 16px;
    line-height: 22px;
    margin-left:25px;
`
const Num = styled.h2`
    font-family : Inter;
    font-weight : 600;
    font-size: 16px;
    line-height: 22px;
    text-align:right;
    margin-right:10px;
`

const Image = styled.img`
    height :20px;
    object-fit:cover;
    width:20px;
    margin-top:12px;
    margin-left:20px;
`
export function Smallbar({boldedText,number,url}:SmallbarProps){
    return (
        <Container>
            <Image src={url} />
            <Heading>{boldedText}</Heading>
            <Num>{number}</Num>
        </Container>
)
}
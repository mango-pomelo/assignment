import React from 'react'
import { storiesOf } from '@storybook/react'
import {Card2} from './Card2'
import styled from 'styled-components'
import { purple } from '@material-ui/core/colors'
import Linechart from '../LineChart'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 5vh;
    width:10vw;
`




storiesOf('test/card2', module).add('Primary',()=>(
    <Container>
        <Card2 boldedText='Top 5 products by spend'/>
    </Container>


))
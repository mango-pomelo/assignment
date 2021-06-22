import React from 'react'
import { storiesOf } from '@storybook/react'
import {Card2} from './Card2'
import styled from 'styled-components'
import { purple } from '@material-ui/core/colors'

const Container = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
`




storiesOf('test/card2', module).add('Primary',()=>(
    <Container>
        <Card2 boldedText='Top 5 products by spend'/>
    </Container>


))
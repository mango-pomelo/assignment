import React from 'react'
import { storiesOf } from '@storybook/react'
import {Card} from './Card'
import styled from 'styled-components'
import { purple } from '@material-ui/core/colors'

const Container = styled.div`
    width: 280px;
    height: 500px;
    display: flex;
    flex-direction: column;
`




storiesOf('test/card', module).add('Primary',()=>(
    <Container>
        <Card boldedText='$4141'
         greyText='PPC spend'/>
    </Container>


))


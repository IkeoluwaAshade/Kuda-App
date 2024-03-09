import React from 'react'
import styled from 'styled-components'

const Money = ({h2, Text, Link}) => {
  return (
    <Container>
        <Wrapper>
            <TitleDiv>{h2}</TitleDiv>

            <TextDiv>{Text}</TextDiv>

            <LinkDiv>{Link}</LinkDiv>
        </Wrapper>
    </Container>
  )
}

export default Money

const Container = styled.div`
    margin-bottom: 100px;
`

const Wrapper = styled.div`
    /* background-color: green; */
    padding: 12px;

    @media (max-width: 500px) {
        /* background-color: green; */
        margin: 0;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}
`

const TitleDiv = styled.div`
    /* background-color: red; */
    color: #40196D;
    font-size: 37px;
    font-weight: 800;
    margin-bottom: 18px;

    @media (max-width: 500px) {
        /* background-color: red; */
        width: 350px;
        font-weight: 700;
        font-size: 35px;
    }
`

const TextDiv = styled.div`
    padding-bottom: 18px;
`

const LinkDiv = styled.div``
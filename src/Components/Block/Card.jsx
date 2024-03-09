import React from 'react'
import styled from 'styled-components'


const Card = ({Icon, CardText}) => {
  return (
    <Container>
        <Wrapper>
            {/* <CardHold> */}

                <CardIcon>{Icon}</CardIcon>

                <TextDiv>
                    <p>{CardText}</p>
                    
                </TextDiv>
            {/* </CardHold> */}
        </Wrapper>
    </Container>
  )
}

export default Card

const Container = styled.div`
    margin: 50px;
`

const Wrapper = styled.div`
    background-color: #fff;
    color: #40196D;
    width: 270px;
    height: 100px;
    padding: 10px 5px 10px 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;

    @media (max-width: 500px) {
        /* background-color: red; */
        height: 60px;
        width: 260px;
        margin-bottom: -55px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const CardIcon = styled.div`
    background-color: #DFE3FF;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin-right: 10px;
        width: 50px;
        height: 30px;
    }
`

const TextDiv = styled.div`
    /* background-color: green; */
    font-size: 15px;
    font-weight: 800;
   
    @media (max-width: 500px) {
        margin-left: 10px;
    }
`
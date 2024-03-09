import React from 'react'
import styled from 'styled-components'
import Card from '../../Components/Block/Card'
import { RiBankCard2Fill } from "react-icons/ri";
import { BiSolidPieChart } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { BiSolidNavigation } from "react-icons/bi";
import { BsSave2Fill } from "react-icons/bs";


const CardSection = () => {
  return (
    <Container>
        <Wrapper>
            <Card
                Icon={<RiBankCard2Fill />}
                CardText={"Order a Kuda Visa card on the app with pickup and delivery options."}
            />

            <Card
                Icon={<BiSolidPieChart />}
                CardText={"Enjoy cashless payment options online and offline."}
            />

            <Card
                Icon={<GoLaw />}
                CardText={"Pay your essential bills and buy gift cards easily."}
            />

            <Card
                Icon={<BiSolidNavigation />}
                CardText={"Get 25 free transfers to Nigerian banks every month."}
            />

            <Card
                Icon={<BsSave2Fill />}
                CardText={"Save money automatically any time you spend."}
            />

        </Wrapper>
    </Container>
  )
}

export default CardSection

const Container = styled.div`
    /* background-color: red; */
    width: 100%;
    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    /* background-color: green; */
    width: 50%;

    @media (max-width: 500px) {
        /* background-color: green; */
    

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
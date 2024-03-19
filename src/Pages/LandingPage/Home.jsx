import React from 'react'
import styled from 'styled-components'
import Header from '../../Components/Static/Header/Header'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import MathSection from './MathSection'
import YourMoney from './YourMoney'
import SaveMoney from './SaveMoney' 
import Turnoff from './TurnOff'
import Help from './Help'
import Fees from './Fees'
// import OurPartners from './OurPartners'
import Footer from '../../Components/Static/Footer/Footer'


const Home = () => {
  return (

    <Container>
        <Wrapper>
            {/* <Header /> */}
            <HeroSection />
            <CardSection />
            <MathSection />
            <YourMoney />
            <SaveMoney />
            <Turnoff />
            <Help />
            <Fees />
            {/* <OurPartners /> */}
            <Footer />
        </Wrapper>
    </Container>
  )
}

export default Home

const Container = styled.div``

const Wrapper = styled.div``
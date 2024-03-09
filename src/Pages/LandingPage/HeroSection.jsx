import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/kudaimg (1).png'
import AppStore from '../../assets/AppStore.png'
import GooglePlay from '../../assets/GooglePlay.png'

const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
            <Hold>
                <TextHold>
                    <h1>The money app for <br /> Africans.</h1>

                    <p>Make free transfers, enjoy cashless payment <br /> options and earn interest on your savings with <br /> Kuda.</p>

                    <AppandPlayStore>
                        <img src={AppStore} alt="Download on the App Store" />
                        <img src={GooglePlay} alt="Get it on Google Play" />
                    </AppandPlayStore>

                    <License>
                        <p>
                            Fully Licensed by the CBN Deposits Insured by <span>|ndic</span>
                        </p>
                    </License>
                </TextHold>

                <ImageDiv><img src={HeroImage} alt="The Hero Image" /></ImageDiv>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default HeroSection

const Container = styled.div`
margin-bottom: 50px;
`

const Wrapper = styled.div`
    margin-top: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin-top: 2rem;
    }
`

const Hold = styled.div`
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`

const TextHold = styled.div`
    /* background-color: brown; */
    width: 400px;

    h1 {
        /* background-color: green; */
        color: #40196D;
        font-size: 37px;
        
    }

    p {
        /* background-color: red; */
        color: #000;
        font-size: 18px;
    }

    @media (max-width: 500px) {
        /* background-color: red; */
        width: 100vw;
        margin: 0;
        text-align: center;
        margin-bottom: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const AppandPlayStore = styled.div`
    /* background-color: red; */
    width: 260px;

    display: flex;
    justify-content: space-between;


    img {
        width: 120px;
    }

`

const License = styled.div`
    
    p {
        color: #b4b0b0;
        font-size: 12px;
    }

    span {
        color: #40196D;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 15px;
    }
`

const ImageDiv = styled.div`
    /* background-color: red; */
    margin-left: 9rem;
    width: 400px;

    img {
        width: 100%;
    }


    @media (max-width: 500px) {
        width: 300px;
        margin: auto;

        img {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
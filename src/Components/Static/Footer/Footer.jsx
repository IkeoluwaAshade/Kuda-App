import React from 'react'
import styled from "styled-components"
import KudaLogo from '../../../assets/KudaLogo.png'
import Apple from '../../../assets/AppStore.png'
import Google from '../../../assets/GooglePlay.png'

const Footer = () => {
  return (
    <Container>
      <Wrapper>

        <LogoDiv>
            <img src={KudaLogo} alt="" />
        </LogoDiv>

        <ItemHold>
          

          <FirstDiv>
            <PersonalDiv>
              <p>Personal</p>
              <a href="#">Discover Personal</a>
              <a href="#">Transfer & Spend</a>
              <a href="#">Save</a>
              <a href="#">Salary Loan</a>
              <a href="#">Investments</a>
              <a href="#">Kuda card</a>
            </PersonalDiv>

            <BusinessDiv>
            <p>Business</p>
            <a href="#">Discover Business</a>
            <a href="#">Business Registration</a>
            <a href="#">Soft POS</a>
            <a href="#">Invoicing</a>
            <a href="#">Salary Loan</a>
            <a href="#">Business API</a>
            <a href="#">Join Kuda Business</a>
            </BusinessDiv>
          </FirstDiv>

          <SecondDiv>
            <Company>
              <p>Company</p>
              <a href="#">Blog</a>
              <a href="#">Press</a>
              <a href="#">Join Our Team</a>
              <a href="#">About Us</a>
            </Company>

            <Help>
              <p>Help</p>
              <a href="#">Get Help</a>
              <a href="#">Scam Awareness</a>
              <a href="#">FAQs</a>
              <a href="#">Security</a>
              <a href="#">Contact Us</a>
              <a href="#">Self Help</a>
            </Help>
          </SecondDiv>

          <ThirdDiv>
            <TransparentDiv>
              <p>Transparency</p>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Information Security Policy</a>
              <a href="#">Cook Policy</a>
              <a href="#">Whistleblowing Policy</a>
            </TransparentDiv>
          </ThirdDiv>
        </ItemHold>

        <DownloadHold>
          <Download>
            <AppStore>
              <img src={Apple} alt="" />
            </AppStore>

            <GooglePlay>
              <img src={Google} alt="" />
            </GooglePlay>

            <Signin>
              <button>
                <p>Sign in to Kuda <br/>On The Web </p>
              </button>
            </Signin>
          </Download>

          <p>Products may vary by country or market.</p>
        </DownloadHold>
      </Wrapper>

      <GetApp>
        <Kuda>

        </Kuda>

        <button>
          <p>Get the App</p>
        </button>
      </GetApp>
    </Container>
  )
}

export default Footer

const Container = styled.div``

const Wrapper = styled.div`
  margin-bottom: 70px;
`

const ItemHold = styled.div`    
  @media (max-width: 500px) {
    /* background-color: aqua; */
    padding-left: 51px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
  }
  
`

const LogoDiv = styled.div``

const FirstDiv = styled.div`
  @media (max-width: 500px) {
    /* background-color: red; */
    margin-bottom: 21px;
    line-height: 48px;

    display: flex;
  }
`

const PersonalDiv = styled.div`
  p {
    color: #40196D;
    font-size: 18px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 500px) {
    padding-right: 27px;
  

    display: flex;
    flex-direction: column;
  }
`

const BusinessDiv = styled.div`
  p {
    color: #40196D;
    font-size: 18px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 500px) {
    padding-left: 27px;

    display: flex;
    flex-direction: column;
  }
`

const SecondDiv = styled.div`
  @media (max-width: 500px) {
    /* background-color: green; */
    margin-bottom: 21px;
    line-height: 48px;

    display: flex;
    
  }
`

const Company = styled.div`

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    color: #40196D;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    padding-right: 27px;

    display: flex;
    flex-direction: column;
  }
`

const Help = styled.div`

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    color: #40196D;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    padding-left: 27px;

    display: flex;
    flex-direction: column;
  }
`

const ThirdDiv = styled.div`
  @media (max-width: 500px) {
    /* background-color: brown; */
    line-height: 48px;

    display: flex;
  }
`

const TransparentDiv = styled.div`

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    color: #40196D;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    
    display: flex;
    flex-direction: column;
  }
`

const DownloadHold = styled.div`

  p {
    color: gray;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Download = styled.div`
  /* background-color: red; */
  width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;

`

const AppStore = styled.div`
  width: 260px;

  img {
    width: 120px;
  }
`

const GooglePlay = styled.div`
  width: 260px;

  img {
    width: 120px;
    height: 45px;
  }
`

const Signin = styled.div`

button {
  background-color: #40196D;
  color: #fff;
  width: 120px;
  height: 45px;
  line-height: 15px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
} 
`

const GetApp = styled.div`
  
`
const Kuda = styled.div``



import React, {useState} from 'react'
import styled from 'styled-components'
import KudaLogo from '../../../assets/KudaLogo.png'
import HamburgerIcon from './HamburgerIcon'
import NigeriaFlag from '../../../assets/flag.png'
import { Link } from "react-router-dom"



const Header = () => {

  const [toggle, setToggle] = useState(false)

  const toggleChange = () => {
    setToggle(!toggle)
  }


  return (
    <Container>
      <Wrapper>

        <LogoDiv><img src={KudaLogo} alt="The Kuda Logo" /></LogoDiv>

        <DropdownHold>

          <Link to="/personal">
            <nav>Personal</nav>
          </Link>

          <Link to="/business">
            <nav>Business</nav>
          </Link>

          <Link to="/company">
            <nav>Company</nav>
          </Link>

          <Link to="/help">
            <nav>Help</nav>
          </Link>

          {/* <a href="#">Business</a> */}

          {/* <a href="#">Company</a> */}

          {/* <a href="#">Help</a> */}

        </DropdownHold>

        <SignInHold>
          <SignIn><p>Sign In</p></SignIn>

          <JoinKuda>Join Kuda</JoinKuda>

          <Flag><img src={NigeriaFlag} alt="The Nigerian Flag" /></Flag>
        </SignInHold>

        <HamburgerDiv>
          <HamburgerIcon toggle={toggle} onClick={toggleChange} />
        </HamburgerDiv>

      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div``

const Wrapper = styled.div`
  /* background-color: red; */
  height: 70px;
  color: #40196D;
  font-weight: 500;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoDiv = styled.div`
  /* background-color: red; */
  width: 220px;
  
  img {
    /* background-color: red; */
    width: 180px;
    height: 180px;
    margin-right: 12px;
  }
 
`

const DropdownHold = styled.div`
  /* background-color: red; */
  color: #40196D;
  width: 450px;
  margin-right: 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: none;
  }
`

const SignInHold = styled.div`
  /* background-color: red; */
  width: 270px;
  margin-right: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`

const SignIn = styled.div``

const JoinKuda = styled.button`
  background-color: #40196D;
  color: #fff;
  padding: 10px 27px;
  font-size: 17px;
  border-radius: 10px;
  border-style: none;
`

const Flag = styled.div`
  /* background-color: red; */
  width: 45px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    display: block;
  }
`

const HamburgerDiv = styled.div`
  margin-right: 4rem;
  display: none;

  @media (max-width: 800px) {
    display: block;
    margin-left: 3rem;
  }

  @media (max-width: 500px) {
    margin-right: 2rem;
  }

  @media (max-width: 350px) {
    margin-right: 1rem;
  }
`
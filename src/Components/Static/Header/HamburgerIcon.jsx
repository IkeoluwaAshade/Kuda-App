import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'

const HamburgerIcon = ({ toggle, onClick }) => {
  return (
    <HamburgerIconWrapper onClick={onClick}>
        {toggle ? <GiCancel size={25} /> : <GiHamburgerMenu size={25} />} </HamburgerIconWrapper>
  )
}

export default HamburgerIcon

const HamburgerIconWrapper = styled.div`
    cursor: pointer;
`
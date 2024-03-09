import React from 'react'
import styled from 'styled-components'
styled

const Image = ({Sampleimg}) => {
  return (
    <Container>
        <Wrapper>
            <ImageDiv>{Sampleimg}</ImageDiv>
        </Wrapper>
    </Container>
  )
}

export default Image

const Container = styled.div``

const Wrapper = styled.div`
    
`

const ImageDiv = styled.div`
    width: 100%;

    
`
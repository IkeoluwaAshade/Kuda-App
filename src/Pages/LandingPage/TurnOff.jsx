import React from 'react'
import styled from 'styled-components'
import Image from '../../Components/Block/Image'
import Money from '../../Components/Block/Money'
import MathSection from '../../assets/kudaimg (5).png'

const TurnOff = () => {
    const saveImage = <img src={MathSection} alt="" />

    const saveLink = <a href="#">Learn more about Cards</a>;


  return (
    <Container>
        <Wrapper>
            <ImageDiv>
                <Image
                    Sampleimg={saveImage}
                />
            </ImageDiv>

            <TextDiv>
                <Money 
                    h2={"Turn off access, turn on safety."}

                    Text={"Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."}

                    Link={saveLink}
                />
            </TextDiv>
        </Wrapper>
    </Container>
  )
}

export default TurnOff

const Container = styled.div`
    margin-bottom: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin-bottom: 100px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
    }
`

const ImageDiv = styled.div`
    width: 400px;
    margin-right: 70px;

    img {
        width: 100%;
    }

    @media (max-width: 500px) {
        margin: auto;
        width: 300px;
    }
`

const TextDiv = styled.div`
    width: 400px;
    margin-left: 70px;

    @media (max-width: 500px) {
        margin: auto;
    }     
`

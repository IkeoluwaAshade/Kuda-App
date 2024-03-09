import React from 'react'
import styled from 'styled-components'
import Image from '../../Components/Block/Image'
import Money from '../../Components/Block/Money'
import MathSection from '../../assets/kudaimg (7).png'

const Fees = () => {

    const saveLink = <a href="#">See all our fees </a>

    const saveImage = <img src={MathSection} alt="" />

  return (
    <Container>
        <Wrapper>
            <ImageDiv>
                <Image Sampleimg={saveImage} 
            />
            </ImageDiv>

            <TextDiv>
                <Money
                    h2={"Fees as clear as glass."}

                    Text={"We’re serious about free banking, and we will never, ever charge you for anything without your consent."}

                    Link={saveLink}
                />
            </TextDiv>
        </Wrapper>
    </Container>
  )
}

export default Fees

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
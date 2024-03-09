import React from 'react'
import styled from 'styled-components'
import Money from '../../Components/Block/Money'
import Image from '../../Components/Block/Image'
import MathSection from '../../assets/kudaimg (4).png'

const SaveMoney = () => {

    const saveLink = <a href="#">See all our Savings </a>

    const saveImage = <img src={MathSection} alt="" />

  return (
    <Container>
        <Wrapper>
            <TextDiv>
                <Money 
                    h2={"Save money as you spend it, seriouly."}

                    Text={"You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."}

                    Link={saveLink}   
                />
            </TextDiv>

            <ImageDiv>
                <Image
                    Sampleimg={saveImage}
                />
            </ImageDiv>
                    
        </Wrapper>
    </Container>
  )
}

export default SaveMoney

const Container = styled.div`
    /* background-color: green; */
    margin-bottom: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin-bottom: 100px;
    }
    
`

const Wrapper = styled.div`
    /* background-color: red; */

    display: flex;
    flex-wrap: wrap;
    

    @media (max-width: 500px) {
        /* background-color: red; */
        
        flex-direction: column;

    }
`

const TextDiv = styled.div`
    /* background-color: red; */
    width: 400px;
    margin-right: 70px;

    @media (max-width: 500px) {
        margin: auto;
        margin-bottom: 70px;
    }
`

const ImageDiv = styled.div`
    width: 400px;
    margin-left: 70px;

    img {
        width: 100%;
    }

    @media (max-width: 500px) {
        margin: auto;
        width: 300px;
    }
`


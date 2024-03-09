import React from 'react'
import styled from 'styled-components'
import Money from '../../Components/Block/Money'
import Image from '../../Components/Block/Image'
import MathSection from '../../assets/kudaimg (6).png'


const Help = () => {

    const saveLink = <a href="#">Get Help </a>

    const saveImage = <img src={MathSection} alt="" />

  return (
    <Container>
        <Wrapper>
            <TextDiv>
                <Money 
                    h2={"We're always happy to help you."}

                    Text={"You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."}

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

export default Help

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


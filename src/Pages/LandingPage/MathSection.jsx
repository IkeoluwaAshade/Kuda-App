import React from 'react'
import styled from 'styled-components'
import MathSection from '../../assets/kudaimg (2).png'


const MathSecton = () => {
  return (
    <Container>
        <Wrapper>


            <Hold>
                <TextHold>
                    <h2>Your phone + <br />
                        our app + <br />
                        a debit card = <br />
                        a simpler life. <br />
                    </h2>

                    <p>
                        We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.
                    </p>

                    <a href="#">Open An Account in Minutes </a>
                </TextHold>

                <ImageDiv><img src={MathSection} alt="The Math Section Image" /></ImageDiv>
            </Hold> 
        </Wrapper>
    </Container>
  )
}

export default MathSecton

const Container = styled.div`
    margin-bottom: 200px;

    @media (max-width: 500px) {
        margin-bottom: 100px;
    }
`

const Wrapper = styled.div`
/* background-color: red; */

display: flex;
justify-content: center;
align-items: center;
`

const Hold = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center;
    /* align-items: center; */ 
`

const TextHold = styled.div`
    width: 400px;

    h2 {
        color: #40196D;
        font-size: 37px;
    }    

    p {
        /* background-color: red; */
        font-size: 18px;
    }

    @media (max-width: 500px) {
        /* background-color: red; */
        width: 100vw;
        margin: 0;
        text-align: center;
        margin-bottom: 70px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            /* background-color: red; */
            margin: 18px;
            width: 100%;
        }
    }
`

const ImageDiv = styled.div`
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
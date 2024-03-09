import React from 'react'
import styled from 'styled-components'
import Money from '../../Components/Block/Money'
import MathSection from '../../assets/kudaimg (3).png'

const YourMoney = () => {
  return (
    <Container>
        <Wrapper>
            <ImageDiv>
                <img src={MathSection} alt="" />
            </ImageDiv>

            <TextDiv>
                <Money 
                    h2={"It’s your money, we just help you manage it."}

                    Text={"Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that"}
                />
            </TextDiv>
        </Wrapper>
    </Container>
  )
}

export default YourMoney


const Container = styled.div`
    margin-bottom: 200px;
    /* background-color: green; */

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
        flex-direction: column-reverse;
        
    }
`

const ImageDiv = styled.div`
    margin-right: 70px;
    width: 400px;

    img {
        width: 100%;
    }

    @media (max-width: 500px) {
        margin: auto;
        width: 300px;
    }
`

const TextDiv = styled.div`
    /* background-color: red; */
    width: 400px;
    margin-left: 70px;

    @media (max-width: 500px) {
        margin: auto;
    }
`






// const Container = styled.div`
//     margin-bottom: 100px;

// `

// const Wrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media (max-width: 500px) {
//         display: flex;
//         flex-direction: column-reverse;
//     }
// `


// const ImageDiv = styled.div`
//     margin-right: 70px;
//     width: 350px;
    
//     img {
//         width: 100%;
//     }

//     @media (max-width: 500px) {
//         width: 300px;
//         margin: auto;

//         img {
            
//             display: flex;
//             justify-content: center;
//             align-items: center;
//         }
//     }
// `

// const TextDiv = styled.div`
//     background-color: red;
//     width: 400px;
//     margin-left: 70px;

//     @media (max-width: 500px) {
//         margin: 0;
//         margin-bottom: -20px;
//     }
// `
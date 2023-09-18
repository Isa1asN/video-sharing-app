import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: 300px;
    cursor: pointer;
    margin-bottom: 45px;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
    background: #999;
`
const Details = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #363e2b;
    border: 1.7px solid #3ac6a6;
`
const Texts = styled.div`

`
const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text};

`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSof};
  margin: 8px 0;

`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSof};

`

function Card() {
  return (
    <Link to={'video/test'} style={{textDecoration:'none'}}>
    <Container >
      <Image />
      <Details>
          <ChannelImage />
          <Texts>
            <Title>Test </Title>
            <ChannelName > Esu presents</ChannelName>
            <Info>1020 views | 2 days ago</Info>
          </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card
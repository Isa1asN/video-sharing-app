/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '300px'};
    cursor: pointer;
    margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '45px'};
    display: ${(props) => props.type === 'sm' && 'flex'};
`
const Image = styled.img`
    width: 100%;
    height:${(props) => props.type === 'sm' ? '100px' : '200px'};
    background: #999;
    flex: 1;
    border-radius: 15px;
`
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== 'sm' && '15px'};
    gap: 12px;
    flex: 1;
    margin-left: ${(props) => props.type === 'sm' && '7px'};
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #363e2b;
    border: 1.7px solid #3ac6a6;
    display: ${(props) => props.type === 'sm' && 'none'};
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

function Card({type, title, imgUrl}) {
  return (
    <Link to={'video/test'} style={{textDecoration:'none'}}>
    <Container type={type} >
      <Image src={imgUrl} type={type} /  >
      <Details type={type}>
          <ChannelImage type={type}/>
          <Texts>
            <Title>{title} </Title>
            <ChannelName > Esu presents</ChannelName>
            <Info>1020 views | 2 days ago</Info>
          </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card
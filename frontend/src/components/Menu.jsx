/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import logoimg from '../assets/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
const Container = styled.div`
    flex:1;
    background: #202020;
    height: 100vh;
    color: white;
    font-size: 14px;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    cursor: pointer;
`
const Img = styled.img`
    height: 30px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    &:hover{
        color: #3ac6a6;
    }
`


function Menu() {
  return (
    <Container>
       <Wrapper>
        <Logo>
            <Img src={logoimg}/>
            <h2>Vider</h2>
        </Logo>
        <Item>
            <HomeIcon />
            Home
        </Item>
       </Wrapper>
    </Container>
  );
}

export default Menu
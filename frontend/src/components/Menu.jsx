/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import logoimg from '../assets/logo.svg'

const Container = styled.div`
    flex:1;
    background: #202020;
    height: 100vh;
    color: white;
    font-size: 18px;
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
`
const Img = styled.img`
    height: 30px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

`

function Menu() {
  return (
    <Container>
       <Wrapper>
        <Logo>
            <Img src={logoimg}/>
            Vader
        </Logo>
        <Item>
            Home
        </Item>
       </Wrapper>
    </Container>
  );
}

export default Menu
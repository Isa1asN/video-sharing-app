// import React from 'react'
import styled from "styled-components"

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color:  ${({theme}) => theme.bgLi};
    padding: 20px 50px;
    gap: 10px;
    width: 30%;
    height: 60%;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 300;

`
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 0.1px solid ${({theme}) => theme.text};
    color: ${({theme}) => theme.text};
    outline: none;
    width: 70%;
    padding: 5px 10px;
    border-radius: 4px;
    &:focus{
        transition: 200ms;
        border-bottom: 2px solid ${({theme}) => theme.text};
    }
`
const Button = styled.button`
    
`

function Signin() {
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign in
            </Title>
            <Input placeholder="username" />
            <Input type="password" placeholder="password"/>
            <Button>Sign in</Button>
            <Title>Or </Title>
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input type="password" placeholder="password"/>
            <Button>Sign in</Button>
            
        </Wrapper>
    </Container>
  )
}

export default Signin
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
    border: 1px solid ${({theme}) => theme.soft};
    gap: 10px;
`
const Title = styled.div`
    
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`
const More = styled.div`
    
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
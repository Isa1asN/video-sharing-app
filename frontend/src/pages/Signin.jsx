// import React from 'react'
import styled from "styled-components"
// import axios from 'axios'
import { useState } from "react"

// const client = axios.create({baseURL : 'http://localhost:3004/auth/signin'})

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
    height: 70%;
    border-radius: 50px;
    box-shadow: 4px 4px 1.3px gray;
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
    padding: 5px 10px;
    border-radius: 1px;
    &:focus{
        transition: 200ms;
        border-bottom: 2px solid ${({theme}) => theme.text};
    }
`
const Button = styled.button`
    font-size: 17px;
    margin: 20px 10px;
    font-weight: 510;
    background-color:transparent;
    color: #3ac6a6;
    border: 1px solid #3ac6a6;
    border-radius: 10px;
    padding: 5px 7px;
    &:hover{
        background-color: #3ac6a6;
        color:  ${({theme}) => theme.text};
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`


function Signin() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (event)=> {
        event.preventDefault()
        console.log(`email:${email} password:${password}`)}
    const handleSignUp = (event) => {
        event.preventDefault()
        console.log(`name: ${name} email: ${email} password: ${password}`)

    }

  return (
    <Container>
        <Wrapper>
            <Title>
                Sign in
            </Title>
            <Form onSubmit={handleLogin} >
                <Input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button type="submit">Sign in</Button>
            </Form>
            <Title>Or </Title>
            <Form onSubmit={handleSignUp}>
                <Input placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button type="submit">Sign Up</Button>
            </Form>
            
        </Wrapper>
    </Container>
  )
}

export default Signin
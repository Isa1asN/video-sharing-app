/* eslint-disable no-unused-vars */
// import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {TailSpin} from 'react-loader-spinner'
import { useDispatch } from "react-redux"
import { setUser } from "../state/userSlice"


const client = axios.create({baseURL : 'http://localhost:3004'})

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
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event)=> {
        event.preventDefault()
        setLoading(true)
        try {
           let response = await client.post('/auth/signin', {
                email : logEmail,
                password : logPassword,
            }) 
            if(response.status == 200){
                dispatch(setUser(response.data))
                setUser(response.data)
                localStorage.setItem('t', response.data.token)
                console.log("Sign in success")
                setTimeout(() => {
                }, 3000);
                navigate("/");
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        }

    const handleSignUp = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            let response = await client.post('/auth/signup', {
                name : name,
                email : signUpEmail,
                password : signUpPassword
            })
            if (response.status == 201){
                console.log('user Signup success')
                setTimeout(() => {
                }, 3000);
                navigate("/");
                setLoading(false); 
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Container>
        {loading ? <TailSpin color="#3ac6a6" height={100} width={100}/> 
        :   
        <Wrapper>
            <Title>
                Sign in
            </Title>
            <Form onSubmit={handleLogin} >
                <Input type="email" placeholder="email" value={logEmail} onChange={(e)=>setLogEmail(e.target.value)}/>
                <Input type="password" placeholder="password" value={logPassword} onChange={(e)=>setLogPassword(e.target.value)}/>
                <Button type="submit">Sign in</Button>
            </Form>
            <Title>Or </Title>
            <Form onSubmit={handleSignUp}>
                <Input placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Input type="email" placeholder="email" value={signUpEmail} onChange={(e)=>setSignUpEmail(e.target.value)}/>
                <Input type="password" placeholder="password" value={signUpPassword} onChange={(e)=>setSignUpPassword(e.target.value)}/>
                <Button type="submit">Sign Up</Button>
            </Form>
            
        </Wrapper>}
    </Container>
  )
}

export default Signin
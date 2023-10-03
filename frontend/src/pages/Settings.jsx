/* eslint-disable no-unused-vars */
// import React from 'react'
import styled from "styled-components"
import moment from 'moment'
import newuser from '../assets/newuser.png'
import axios from "axios"
import { setProfile } from "../state/userSlice"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const client = axios.create({baseURL : 'http://localhost:3004/api'})



const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 5px 10px;
    justify-content: center;
    border: 1px solid #3ac6a6;
    width: 100%;
    border-radius: 15px;
    cursor: pointer;
    &:hover{
        border:2px solid #3ac6a6;
    }
    box-shadow: 2px 2px 6px #3ac6a6;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: ${({theme}) => theme.text};
`
const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #363e2b;
    border: 1.7px solid #3ac6a6;
    margin-top: 5px;
    display: ${(props) => props.type === 'sm' && 'none'};
`
const Text = styled.h5`
    /* font-size: 14px; */
    color: ${({theme}) => theme.textSof};
    margin: 5px 25px;
`



// eslint-disable-next-line react/prop-types
function UserCard({name, email, followers, img, joined}) {
    const dispatch = useDispatch()
    let profile = useSelector((state) => state.user.profile)

    



  return (
    <Container>
        <Wrapper>
            <ChannelImage src={img ? img : newuser} />
            <h3 style={{alignContent:'center'}}>{name}</h3>
        </Wrapper>
        <Text>{email}</Text>
        <Text>{followers} followers | Joined {moment(joined).fromNow()}</Text>        
    </Container>
  )
}

export default UserCard
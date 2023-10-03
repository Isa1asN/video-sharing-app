/* eslint-disable no-unused-vars */
// import React from 'react'
import styled from "styled-components"
import moment from 'moment'
import newuser from '../assets/newuser.png'
import axios from "axios"
import { setProfile } from "../state/userSlice"
import {useDispatch, useSelector } from "react-redux"
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
function Settings() {
    const dispatch = useDispatch()
    const userSigned = useSelector((state) => state.user.user)
    const profile = useSelector((state) => state.user.profile)

    useEffect(()=>{
        const fetchProfile = async () => {
            try {
                const response = await client.get('/u/profile', {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('t')}`
                    }
                })
                if (response.status === 200){
                    dispatch(setProfile(response.data))
                } else {
                    console.log(" An error has occured")
                }
            
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfile()
    }, [dispatch])

  return (

    <Container>
        {Object.keys(userSigned).length !== 0 ?
        <>
        <Wrapper>
            <ChannelImage src={profile.img ? profile.img : newuser} />
            <h3 style={{alignContent:'center'}}>{profile.name}</h3>
        </Wrapper>
        <Text>{profile.email}</Text>
        <Text>{profile.followers} followers | Joined {moment(profile.createdAt).fromNow()}</Text>   
        </>
        :
        <div style={{color:'#3ac6a6'}}>You haven`t signed up</div>
    }
    </Container>
  )
}

export default Settings
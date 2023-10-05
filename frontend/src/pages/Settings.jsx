/* eslint-disable no-unused-vars */
// import React from 'react'
import styled from "styled-components"
import moment from 'moment'
import newuser from '../assets/newuser.png'
import axios from "axios"
import { setProfile, setProfilePic } from "../state/userSlice"
import {useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import storage from '../firebaseConfig';

const storageRef = storage.ref();



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
    height: 70vh;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${({theme}) => theme.text};
`
const ChannelImage = styled.img`
    width: 110px;
    height: 110px;
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

const ImageInput = styled.input`
    color: ${({theme}) => theme.textSof};

`
const Uploadimgtxt = styled.h4`
    /* font-size: 14px; */
    color: ${({theme}) => theme.text};
    margin-top: 19px;
`
const Uploadbtn = styled.button`
    height: max-content;
    font-size: larger;
    background-color: #3ac6a6;
    border: none;
    border-radius: 5px;
`


// eslint-disable-next-line react/prop-types
function Settings() {
    const dispatch = useDispatch()
    const userSigned = useSelector((state) => state.user.user)
    const profile = useSelector((state) => state.user.profile)
    const profileImg = useSelector((state)=> state.user.profilePic)

    const handleImgUpload = async () =>{
        try {
            let fileInput = document.getElementById('pro-img')
            const file = fileInput.files[0]
            let imgUrl = ''
    
            const imgSnapshot = await storageRef.child('images/' + file.name).put(file)
            imgUrl = await imgSnapshot.ref.getDownloadURL();

            const response = await client.post('/u/profile/uploadImg', {
                imgUrl : imgUrl
            }, {
                headers : {Authorization : `Bearer ${localStorage.getItem('t')}`}
            })
            if (response.status) {
                dispatch(setProfilePic(imgUrl))
                console.log("Profile image updated successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                    dispatch(setProfilePic(response.data.img))
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
        <center>
        <Wrapper>
            <div> <ChannelImage src={profileImg ? profileImg : newuser} /> </div>
            <h3 style={{alignContent:'center'}}>{profile.name}</h3>
        </Wrapper>
        <Text>{profile.email}</Text>
        <Text>{profile.followers} followers | Joined {moment(profile.createdAt).fromNow()}</Text>
        <Uploadimgtxt>upload/update profile image</Uploadimgtxt>
        <ImageInput id="pro-img" type="file"/>
        <Text>  <Uploadbtn onClick={handleImgUpload}> Upload </Uploadbtn></Text>
        </center>   
        </>
        :
        <div style={{color:'#3ac6a6'}}>You haven`t signed up</div>
    }
    </Container>
  )
}

export default Settings
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';
import storage from '../firebaseConfig';
import { useState } from 'react';

const storageRef = storage.ref();


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 
`;
const Popup = styled.div`
  background-color: #efe4e4;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const Button = styled.button`
  background-color: #b8e3d6;
  border: 1px solid black;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius:5px;
  cursor: pointer;
  &:hover{
    background-color: #3ac6a6;
  }
`;

const Form = styled.form`
    margin: 15px 10px;
    display: flex;
  flex-direction: column;
  gap: 20px;
  
`
const Input = styled.input`
    border: none;
    border-radius: 5px;
    &:focus{
        outline-color:#3ac6a6
    }
    padding: 10px 10px;
    
`
const handleSubmit = (e) =>{
    e.preventDefault()
    const videoFile = document.getElementById('video-input').files[0];                          
    const title = document.getElementById('title-input').value
    const description = document.getElementById('desc-input').value
    const imgFile = document.getElementById('thumb-input').files[0];
    const tag = document.getElementById('tag-input').value
    console.log(description)

    const videoRef = storageRef.child('videos/' + videoFile.name);
    

}

// eslint-disable-next-line react/prop-types
function CreateVideo({isOpen, setIsOpen}) {
    if (!isOpen) return null
  return (
    <Container>
      <Popup>
        <div>Upload a new video </div>
        <Form onSubmit={handleSubmit}>
            <label style={{alignSelf:'start'}}> Select Video</label>
            <Input id="video-input" required type='file' />
            <Input id="title-input" placeholder='Enter title' required />
            <Input id="desc-input" placeholder='Enter description' required/>
            <label style={{alignSelf:'start'}}> Video Thumbnail Image</label>
            <Input required id="thumb-input" type='file' />
            <Input id="tag-input" required placeholder='Enter tags (separated by a space)' />
            <Button type='submit'>Upload</Button>
        </Form>
        <CancelIcon onClick={() => setIsOpen(false)} style={{cursor:'pointer', color:'red', fontSize:'30px', alignSelf:'center'}} />
      </Popup>
    </Container>
  )
}

export default CreateVideo
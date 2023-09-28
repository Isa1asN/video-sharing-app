/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';

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
    &:focus{
        outline-color:#3ac6a6
    }
    padding: 10px 10px;
    
`


// eslint-disable-next-line react/prop-types
function CreateVideo({isOpen}) {
    if (!isOpen) return null
  return (
    <Container>
      <Popup>
        <div>Upload a new video </div>
        <Form>
            <Input placeholder='Enter title' required />
            <Input placeholder='Enter description' required/>
            <Input />
            <Input />
            <Button>Upload</Button>
        </Form>
        <CancelIcon  style={{cursor:'pointer', color:'light-red', fontSize:'30px', alignSelf:'center'}} />
      </Popup>
    </Container>
  )
}

export default CreateVideo
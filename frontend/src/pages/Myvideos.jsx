/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from "../components/Card"
import axios from 'axios'
import { setMyVideos } from '../state/vidSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateVideo from '../components/CreateVideo'


const client = axios.create({baseURL : 'http://localhost:3004/api'})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEyNjM5YWNkYTU1ODg1Zjc0YTk5NDMiLCJlbWFpbCI6ImVzdUBnbWFpbC5jb20iLCJpYXQiOjE2OTU5MzkyODIsImV4cCI6MTY5NTk1MDA4Mn0.J5s6ub6aY-k-Eqn6RvAFL01ZLbxPzi_4knb3FVz1UFc'

const config = {
    headers : {Authorization : `Bearer ${token}`}
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.text};
    gap: 50px;

`



function Myvideos() {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch()
    const myVids = useSelector((state) => state.video.myVideos)

    useEffect(() => {
        const fetchmyvids = async () => {
            try {
                const response = await client.get('/v/myvideos', config)
                if (response.status === 200) {
                    dispatch(setMyVideos(response.data))
                    console.log("Myvideos fetched")
                }
                else {
                    console.log(response.status)
                }
            } catch (error) {
                console.log(error)
            }
        }
    fetchmyvids()

    }, [dispatch])
  return (<>
    <Wrapper>
            Upload new video
            <CloudUploadIcon onClick={()=> setIsOpen(true)} style={{fontSize:'40px', color: '#3ac6a6', cursor:'pointer'}} />
    </Wrapper>
    <hr />

    <CreateVideo isOpen={isOpen} />

    <Container>
        {myVids.map((vid) => {
            return <Card key={vid._id} title={vid.title}/>
        })}
    </Container>
    </>
  )
}

export default Myvideos
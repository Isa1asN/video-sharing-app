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
import {TailSpin} from 'react-loader-spinner'




const client = axios.create({baseURL : 'http://localhost:3004/api'})


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
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const myVids = useSelector((state) => state.video.myVideos)

    const token = useSelector((state) => state.user.user.token)
    useEffect(() => {
        const fetchmyvids = async () => {
            try {

                const response = await client.get('/v/myvideos', {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
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

    }, [dispatch, token])
    const reversedVids = [...myVids].reverse();

  return (<>
    <Wrapper>
            Upload new video
            <CloudUploadIcon onClick={()=> setIsOpen(true)} style={{fontSize:'40px', color: '#3ac6a6', cursor:'pointer'}} />
    </Wrapper>
    <hr />

    <CreateVideo isOpen={isOpen} setIsOpen={setIsOpen} setLoading={setLoading}/>

    <Container>
        { loading ? <div style={{alignItems:'center'}}><TailSpin color="#3ac6a6"  height={100} width={100}/></div>
        :
        reversedVids.map((vid) => {
            return <Card key={vid._id} title={vid.title}/>
        })}
    </Container>
    </>
  )
}

export default Myvideos
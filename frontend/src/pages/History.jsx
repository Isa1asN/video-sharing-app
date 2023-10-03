/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from "../components/Card"
import axios from 'axios'
import { setHistory, setMyVideos } from '../state/vidSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateVideo from '../components/CreateVideo'
import {TailSpin} from 'react-loader-spinner'

const client = axios.create({baseURL : 'http://localhost:3004/api'})


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:30px ;
    color: ${({theme}) => theme.text};

`


function History() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const history = useSelector((state) => state.video.history)

    useEffect(() => {
        const fetchHist = async () => {
            try {

                const response = await client.get('/v/history', {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('t')}`
                    }
                })
                if (response.status === 200) {
                    dispatch(setHistory(response.data))
                    // console.log("Myvideos fetched")
                }
                else {
                    console.log(response.status)
                }
            } catch (error) {
                console.log(error)
            }
        }
    fetchHist()

    }, [dispatch])
    const reversedVids = [...history].reverse();
//   console.log(reversedVids.length)


  return (
    <Container>
        {
            reversedVids.length !== 0 ? 
            reversedVids.map((vid) => {
                return <Card key={vid._id} title={vid.title} userId={vid.userId} views={vid.views} imgUrl={vid.thumbnail} date={vid.createdAt}/>
            })
            :
            <center><div>No data to display</div></center>
        }
    </Container>
  )
  }
export default History
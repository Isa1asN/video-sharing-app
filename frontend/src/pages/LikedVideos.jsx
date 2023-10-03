/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from "../components/Card"
import axios from 'axios'
import { setLikedVideos } from '../state/vidSlice'
import { useDispatch, useSelector } from 'react-redux'

const client = axios.create({baseURL : 'http://localhost:3004/api'})


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:30px ;
    color: ${({theme}) => theme.text};

`
function Likedvideos() {
    const dispatch = useDispatch()
    const likedvids = useSelector((state) => state.video.likedvideos)

    useEffect(() => {
        const fetchlikedvideos = async () => {
            try {

                const response = await client.get('/v/liked', {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('t')}`
                    }
                })
                if (response.status === 200) {
                    dispatch(setLikedVideos(response.data))
                }
                else {
                    console.log(response.status)
                }
            } catch (error) {
                console.log(error)
            }
        }
    fetchlikedvideos()

    }, [dispatch])
    const reversedVids = [...likedvids].reverse();


  return (
    <Container>
        {
            reversedVids.length !== 0 ? 
            reversedVids.map((vid) => {
                return <Card key={vid._id} title={vid.title} userId={vid.userId} views={vid.views} imgUrl={vid.thumbnail} date={vid.createdAt}/>
            })
            :
            <center><div style={{alignItems:'center'}}>You haven`t liked any videos yet </div></center>
        }
    </Container>
  )
  }
export default Likedvideos
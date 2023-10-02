/* eslint-disable no-unused-vars */
import styled from "styled-components"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { setVideos } from "../state/vidSlice"
import mania from '../assets/mania.jfif'

 const client = axios.create({baseURL : 'http://localhost:3004/api'})


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:30px ;
`

function Home() {
  const dispatch = useDispatch()
  const videos = useSelector((state) => state.video.videos)

  useEffect( () => {
    const fetchvids = async () => {
    try {
      let response = await client.get('/v/all')
      // console.log(response)
      if (response.status === 200) {
        dispatch(setVideos(response.data))
        // console.log("Videos fetched")
      }
      else {
        console.log(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const userInfoForVideos = async () => {
    try {
      let modifiedVideos = videos.map(async (vid) => {
        const response = await client.get(`/u/${vid.userId}`)
        return {vid, response}
      })
    } catch (error) {
      console.log(error)
    }
  }
  fetchvids()
  }, [dispatch])
  return (
    <Container>
      {videos.map((vid) => {
       return <Card key={vid._id} userId={vid.userId} title={vid.title} imgUrl={vid.thumbnail} views={vid.views} date={vid.createdAt}/>
      })}
    </Container>
  )
}

export default Home
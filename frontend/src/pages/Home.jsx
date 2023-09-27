/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styled from "styled-components"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import axios from 'axios'

const client = axios.create({baseURL : 'http://localhost:3004/api'})


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

function Home() {
  let [vids, setVids] = useState([])

  useEffect( () => {
    const fetchvids = async () => {
    try {
      let response = await client.get('/v/all')
      // console.log(response)
      if (response.status == 200) {
        setVids(response.data)
        console.log("Videos fetched")
      }
      else {
        console.log(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchvids()
  }, [])
  return (
    <Container>
      {vids.map((vid) => {
       return <Card key={vid._id} title={vid.title} />
      })}
    </Container>
  )
}

export default Home
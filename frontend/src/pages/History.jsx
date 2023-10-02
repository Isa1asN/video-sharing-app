/* eslint-disable no-unused-vars */
// import React from 'react'
import styled from "styled-components"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { setHistory } from "../state/vidSlice"

const client = axios.create({baseURL : 'http://localhost:3004/api'})

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:30px ;
`

function History() {

    const hisV = useSelector((state) => state.video.history)
    const dispatch = useDispatch()
    console.log(hisV)
    const history = [...hisV].reverse()
    useEffect(()=>{
        const fetchHistory = async () => {
            try {
                const response = await client.get('/v/history', {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('t')}`
                    }
                })
                if (response.status === 200){
                    dispatch(setHistory(response.data))
                }
                else if (response.status === 404) {
                    // console.log("An error occured or no history")
                    dispatch(setHistory([]))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchHistory()

    }, [dispatch])

  return (
        hisV ?
    <Container>
        {
        history.map((vid) => {
            return <Card key={vid._id} title={vid.title} userId={vid.userId} views={vid.views} imgUrl={vid.thumbnail} date={vid.createdAt}/>
        })
        }
    </Container>
    :
    <center><div>No data to display </div></center>
  )
}

export default History
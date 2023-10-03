/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from "../components/Card"
import axios from 'axios'
import { setFollowing } from '../state/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const client = axios.create({baseURL : 'http://localhost:3004/api'})


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:30px ;
    color: ${({theme}) => theme.text};

`
function Following() {
    const dispatch = useDispatch()
    const following = useSelector((state) => state.user.following)

    useEffect(() => {
        const fetchfollowing = async () => {
            try {

                const response = await client.get('/u/following', {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('t')}`
                    }
                })
                if (response.status === 200) {
                    dispatch(setFollowing(response.data))
                }
                else {
                    console.log(response.status)
                }
            } catch (error) {
                console.log(error)
            }
        }
    fetchfollowing()

    }, [dispatch])
    const reversedlist = [...following].reverse();


  return (
    <Container>
        {
            reversedlist.length !== 0 ? 
            
            :
            <center><div style={{alignItems:'center'}}>You haven`t followed anyone yet </div></center>
        }
    </Container>
  )
  }
export default Following
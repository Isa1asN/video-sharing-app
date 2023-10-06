/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styled from "styled-components"
import moment from 'moment'
import axios from "axios"
import { useEffect, useState } from "react"
import newuser from '../assets/newuser.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from "react-redux"


const client = axios.create({baseURL : 'http://localhost:3004/api'})

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '300px'};
    cursor: pointer;
    margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '45px'};
    display: ${(props) => props.type === 'sm' && 'flex'};
`
const Image = styled.img`
    width: 100%;
    height:${(props) => props.type === 'sm' ? '100px' : '200px'};
    background: #999;
    flex: 1;
    border-radius: 15px;
`
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== 'sm' && '15px'};
    gap: 12px;
    flex: 1;
    margin-left: ${(props) => props.type === 'sm' && '7px'};
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #363e2b;
    border: 1.7px solid #3ac6a6;
    display: ${(props) => props.type === 'sm' && 'none'};
`
const Texts = styled.div`

`
const Title = styled.h1`
  display: flex;
  gap: 8rem;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
  flex-grow: 1;
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSof};
  margin: 8px 0;

`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSof};

`

function Card({type, userId, title, imgUrl, views, date, link}) {

  const [userInfo, setUserInfo] = useState(null)
  // const dispatch = useDispatch()
  const [isAdded, setIsAdded] = useState(false)

  const fetchUserInfo = async () => {
    try {
        const response = await client.get(`/u/${userId}`)
        if(response.status ===200) {
           setUserInfo(response.data)
          //  await client.get() request to view the video
          //  console.log("user info fetch success")
        }
      } catch (error) {
        console.log(error)
      }
  }
  const addToHistory = async (id) => {
    try {
      const response = await client.post(`/v/${id}/addwatchlist`, {},{
          headers : {
            Authorization : `Bearer ${localStorage.getItem('t')}`
          }
      })
      if (response.status == 200){
        setIsAdded(!isAdded)
        console.log('added to watchlist')
      } else {
        console.log(response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(!userInfo){
      fetchUserInfo()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])
   
  return (
    <Container type={type} >
      <Link to={`video/${link}`} style={{textDecoration:'none'}}>
          <Image src={imgUrl} type={type} / >
      </Link>

      <Details type={type}>
        {userInfo ? 
          <Link to={`video/${link}`} style={{textDecoration:'none', color:'inherit'}}>
            <ChannelImage src={userInfo.img ? userInfo.img : newuser} type={type}/>
          </Link>
             : true
        }
          <Texts>
            <Title>
          <Link to={`video/${link}`} style={{textDecoration:'none', color:'inherit'}}>
              <div>{title}</div> 
          </Link>
          <div  onClick={()=>addToHistory(link)}>
            {isAdded ?
            <CheckIcon style={{color:'#3ac6a6'}} />
            :
              <AddCircleOutlineIcon style={{color:'#3ac6a6'}} /> 
            }
          </div>
              </Title>
            {userInfo ? (
              <>
              <Link to={`video/${link}`} style={{textDecoration:'none'}}>
                <ChannelName>{userInfo.name}</ChannelName>
              </Link>
                <Info>
                  {views} views | {moment(date).fromNow()}
                </Info>
              </>
            ) : true}
          </Texts>
      </Details>
    </Container>
  )
}

export default Card
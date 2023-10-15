/* eslint-disable no-unused-vars */
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import Comments from "../components/Comments";
import axios from 'axios'
import { useEffect } from "react";
import { setFetchedVideos, setNumLikes, setVideoLikes } from "../state/vidSlice";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { setLike } from "../state/userSlice";
import moment from 'moment'
import newuser from '../assets/newuser.png'
import testVideo from '../assets/theweeknd.mp4'

const Container = styled.div`
  display: flex;
  gap: 24px;
  
`
const Content = styled.div`
  flex: 5;
`
const Recommendation = styled.div`
  flex: 2;
`
const VideoWrapper = styled.div`
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
  
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
const Info = styled.span`
  color: ${({theme}) => theme.textSof};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #231ddc;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const FollowButton = styled.button`
  background-color: #3ac6a6 ;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 6px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  &:hover{
    background-color: #197d65;
  }
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 15px;
  color: ${({theme}) => theme.textSof};
  font-size: 13px;
`
const Description = styled.p`
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  background-color:  ${({theme}) => theme.bgLi};
`
const VideoPlayer = styled.video`
  border-radius: 15px;
  box-shadow: 0px 0px 22px #197d65;
  width: 100%;
`
const client = axios.create({baseURL : 'http://localhost:3004/api'})

// console.log(vidId)


function Video() {
  const [userInfo, setUserInfo] = useState('')

  const url = window.location.href.split('/')
  const vidId = url[url.length-1]
  const fetchedVid = useSelector((state) => state.video.fetchedVideo)
  const dispatch = useDispatch()

  const [isLiked, setIsLiked] = useState(false)
  const vidNumLikes = useSelector((state)=> state.video.videoLikes)
  const listLiked = useSelector((state)=>state.user.likedVideos)

  
  const fetchUserInfo = async (id) => {
    try {
      const response = await client.get(`/u/${id}`);
      if (response.status === 200) {
        setUserInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const likeVideo = async (id) => {
    try {
      const response = await client.post(`/v/${id}/like`, {
        headers : {
          Authorization : `Bearer ${localStorage.getItem('t')}`
      }
      });
      if (response.status === 200) {
        console.log('video liked')
      } else {
        console.log(response.status)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get(`/v/${vidId}`);
        if (response.status === 200) {
          dispatch(setFetchedVideos(response.data));
          dispatch(setVideoLikes(response.data.likes))
          await fetchUserInfo(response.data.userId);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, vidId]);


  async function handleLike (){
    const index = listLiked.indexOf(vidId);
    if (index !== -1) {
      dispatch(setLike(vidId))
      dispatch(setNumLikes(-1))
      setIsLiked(false)

    } else {
      likeVideo(vidId)
      dispatch(setLike(vidId))
      dispatch(setNumLikes(1))
      setIsLiked(true)
    }
  }


  return (
    <Container>
      <Content>
        <VideoWrapper>
            <VideoPlayer controls>
                <source src={fetchedVid.videoUrl} type="video/mp4"/>
                <source src={fetchedVid.videoUrl} type="video/x-matroska"/>
                <source src={fetchedVid.videoUrl} type="video/3gp"/>
                Your browser doesn`t support the video tag
            </VideoPlayer>
        </VideoWrapper>
        <Title>{fetchedVid.title}</Title>
        <Details>
          <Info>{fetchedVid.views} views | {moment(fetchedVid.createdAt).fromNow()}</Info>
          <Buttons>
            <Button onClick={handleLike}><FavoriteIcon style={{color:`${isLiked?'red':'inherit'}`}} /> <small>{vidNumLikes}</small></Button>
            <Button><ShareIcon /></Button>
            <Button ><a href={fetchedVid.videoUrl} style={{color:'inherit'}}><DownloadIcon /></a></Button>
          </Buttons>
        </Details>
        <hr />
        <Channel>
          <ChannelInfo>
            <Image src={userInfo.img?userInfo.img:newuser} />
            <ChannelDetail>
              <ChannelName>{userInfo.name}</ChannelName>
              <ChannelCounter>{userInfo.followers} Followers</ChannelCounter>
              <Description>
                <label style={{color:'#197d65'}}>{fetchedVid.tags}</label>
                <br />
                <br />
                {fetchedVid.description}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
              <FollowButton>Follow</FollowButton>
        </Channel>
        <hr />
        <Comments />
      </Content>
      <Recommendation>
        {/* <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/> */}
        <div style={{color: 'lightgreen'}}>recommended vids</div>
      </Recommendation>
    </Container>
  )
}

export default Video
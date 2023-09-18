import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import propic from '../assets/c.jpg'

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
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 6px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
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
  border-radius: 20px;
  width: 100%;
  background-color:  ${({theme}) => theme.bgLi};
`


function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="90%" height="360" src="https://www.youtube.com/embed/u9n7Cw-4_HQ?si=E0laqkAeVqxhTuWz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video- The Weeknd</Title>
        <Details>
          <Info>7,001 views | Jul 2022</Info>
          <Buttons>
            <Button><FavoriteIcon /> <small>12</small></Button>
            <Button><ShareIcon /></Button>
            <Button><DownloadIcon /> <small>163</small></Button>
          </Buttons>
        </Details>
        <hr />
        <Channel>
          <ChannelInfo>
            <Image src={propic} />
            <ChannelDetail>
              <ChannelName>Esu presents</ChannelName>
              <ChannelCounter>3002 Followers</ChannelCounter>
              <Description>
                Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m Lorem ipsum dolor lore m ipsu m 
              </Description>
            </ChannelDetail>
          </ChannelInfo>
              <FollowButton>Follow</FollowButton>
        </Channel>
      </Content>
      <Recommendation>
        recommendation
      </Recommendation>
    </Container>
  )
}

export default Video
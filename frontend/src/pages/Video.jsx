import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

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
  
`
function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u9n7Cw-4_HQ?si=E0laqkAeVqxhTuWz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video- The Weeknd</Title>
        <Details>
          <Info>7,001 views | Jul 2022</Info>
          <Buttons>
            <Button><FavoriteIcon /> 12</Button>
            <Button><ShareIcon /></Button>
            <Button><DownloadIcon /> 176</Button>
          </Buttons>
        </Details>
      </Content>
      <Recommendation>
        recommendation
      </Recommendation>
    </Container>
  )
}

export default Video
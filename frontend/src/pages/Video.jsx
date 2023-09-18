import styled from "styled-components"

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
const Title = styled.div`
  
`
const Details = styled.div`
  
`
const Info = styled.span`
  
`
const Buttons = styled.div`

`
const Button = styled.div`
  
`
function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u9n7Cw-4_HQ?si=E0laqkAeVqxhTuWz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
      </Content>
      <Recommendation>
        recommendation
      </Recommendation>
    </Container>
  )
}

export default Video
/* eslint-disable no-unused-vars */
import styled from "styled-components"
import Card from "../components/Card"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

function Home() {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  )
}

export default Home
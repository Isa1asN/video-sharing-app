import styled from "styled-components"
import Comment from "./Comment"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const NewComment = styled.div`
    
`
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #231ddc;
`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    background-color: transparent;
    color: ${({theme}) => theme.text};
    outline: none;
    padding: 5px;
    border-radius: 5px;
    width: 100%;
`

function Comments() {
  return (
    <Container>
        <NewComment>
            <Avatar />
            <Input placeholder="write a comment"/>
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments
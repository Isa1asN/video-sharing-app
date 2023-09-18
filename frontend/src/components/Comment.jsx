import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #231ddc;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;

`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
    
`
const Text = styled.span`
    font-size: 14px;
    
`
function Comment() {
  return (
    <Container>
        <Avatar />
        <Details>
            <Name>
                John Doe
                <Date>2 days ago</Date>
            </Name>
            <Text>
                Lorem ipsum dolor oidho donn  on oghrrrrry tvuv 
            </Text>
        </Details>
    </Container>
  )
}

export default Comment
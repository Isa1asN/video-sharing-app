/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import logoimg from '../assets/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import './menucss.css'

const Container = styled.div`
    flex:1.3;
    background: #202020;
    height: 100vh;
    color: white;
    font-size: 14px;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    cursor: pointer;
`
const Img = styled.img`
    height: 30px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7px 0;

    &:hover{
        color: #3ac6a6;
    }
`
const Login = styled.div`

`
const Loginbtn = styled.button`
    background-color: transparent;
    color: white;
    padding: 5px 10px;
    border: 1px solid #3ac6a6;
    cursor: pointer;
    font-weight: 500;
`

function Menu() {
  return (
    <Container>
       <Wrapper>
        <Logo>
            <Img src={logoimg}/>
            <h2>Vidlit</h2>
        </Logo>
        <Item>
            <HomeIcon />
            Home
        </Item>
        <hr style={{border:'0.5px solid #373737'}} />
        <Item>
            <VideoLibraryIcon />
            My videos
        </Item>
        <Item>
            <AccessTimeIcon />
            Watch later
        </Item>
        <Item>
            <FavoriteBorderIcon />
            Liked videos
        </Item>
        <Item>
            <HistoryIcon />
            History
        </Item>
        <Item>
            <SettingsIcon />
            Settings
        </Item>
        <hr style={{border:'0.5px solid #373737'}} />
        <Login>
            Sign in to like videos and comment
            <Loginbtn>Sign in</Loginbtn>
        </Login>
       </Wrapper>
    </Container>
  );
}

export default Menu
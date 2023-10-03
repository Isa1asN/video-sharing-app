/* eslint-disable react/prop-types */
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import StarsIcon from '@mui/icons-material/Stars';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    flex:1.3;
    background: ${({theme}) => theme.bgLi};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
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
    color: #3ac6a6;
    padding: 5px 10px;
    border: 1px solid #3ac6a6;
    cursor: pointer;
    font-weight: 500;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover{
        background-color: #3ac6a6;
        color: black;
    }

`

function Menu({darkmode, setDarkmode}) {
    const user = useSelector((state) => state.user.user.user)
  return (
    <Container>
       <Wrapper>
        <Link to={'/'} style={{textDecoration:"none", color:'inherit'}}>
        <Logo>
            <Img src={logoimg}/>
            <h2>Vidlit</h2>
        </Logo>
        </Link>
        <Link to={'/'} style={{textDecoration:'none', color: 'inherit'}}>
        <Item>
            <HomeIcon />
            Home
        </Item>
        </Link>
        <hr style={{border:'0.5px solid #373737'}} />
        <Link to='myvideos' style={{textDecoration:'none', color: 'inherit'}}>
            <Item>
                <VideoLibraryIcon />
                My videos
            </Item>
        </Link>

        <Link to={'watchlist'} style={{color: 'inherit', textDecoration: 'none'}}> 
            <Item>
                <AccessTimeIcon />
                Watch later
            </Item>
        </Link>
        <Link to={'following'} style={{color: 'inherit', textDecoration: 'none'}}> 
            <Item>
                <StarsIcon />
                Following
            </Item>
        </Link>
        <Link to={'likedvideos'} style={{color: 'inherit', textDecoration: 'none'}}> 
            <Item>
                <FavoriteBorderIcon />
                Liked videos
            </Item>
        </Link>
        <Link to={'history'} style={{color: 'inherit', textDecoration: 'none'}}> 
            <Item>
                <HistoryIcon />
                History
            </Item>
        </Link>
        <Item>
            <SettingsIcon />
            Settings
        </Item>
        <hr style={{border:'0.5px solid #373737'}} />
        { !user ?
        <>
        <Login>
            Sign in to like videos & comment
            <Link to={'signin'} style={{textDecoration:'none', color:'inherit'}}>
            <Loginbtn> 
                <AccountCircleIcon /> Sign in
            </Loginbtn>
            </Link>
        </Login>
            <hr style={{border:'0.5px solid #373737'}} />
        </>
        : true
        }
        <Item onClick={() => setDarkmode(!darkmode)}>
            {darkmode ? <ToggleOnIcon /> : <ToggleOffIcon />}
            Dark mode
        </Item>
       </Wrapper>
    </Container>
  );
}

export default Menu
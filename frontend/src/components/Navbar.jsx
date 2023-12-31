/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import newuser from '../assets/newuser.png'

const Container = styled.div`
    position: sticky;
    top: 0;
    background: ${({theme}) => theme.bgLi};
    height: 56px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    justify-content: flex-end;
    position: relative;
`
const Search = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 16px;
   
`
const Input = styled.input`
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    outline: none;
    color: ${({theme}) => theme.text};
`
const Loginbtn = styled.button`
    background-color: transparent;
    color: #3ac6a6;
    padding: 5px 10px;
    border: 1px solid #3ac6a6;
    cursor: pointer;
    font-weight: 500;
    /* margin: 10px 20px; */
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover{
        background-color: #3ac6a6;
        color: black;
    }
`
const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #363e2b;
    border: 1.7px solid #3ac6a6;
    display: ${(props) => props.type === 'sm' && 'none'};
`
const UserLabel = styled.div`
    background-color: transparent;
    color: #3ac6a6;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: 500;
    /* margin: 10px 20px; */
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

`

function Navbar() {
  const user = localStorage.getItem('name')
  console.log(user)
  return (
    <Container>
      <Wrapper>
        <Search >
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Link to={'signin'} style={{textDecoration:'none', color:'inherit'}}>
        {user ? 
        <UserLabel>
          <ChannelImage src={newuser}/>
          {user.split(' ')[0]}
        </UserLabel>
        :
          <Loginbtn> 
            <AccountCircleIcon /> Sign in
          </Loginbtn>
        } 
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar
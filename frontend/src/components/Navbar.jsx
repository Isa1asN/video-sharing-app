/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

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

  
`
const Input = styled.input`
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
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

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search >
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Loginbtn> <AccountCircleIcon /> Sign in</Loginbtn>
      </Wrapper>
    </Container>
  )
}

export default Navbar
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import Signin from './pages/Signin';
import Myvideos from './pages/Myvideos';
import History from './pages/history';
import Watchlist from './pages/WatchList'
import Likedvideos from './pages/LikedVideos';
import Following from './pages/Following';
import Settings from './pages/Settings';

const Container = styled.div`
  display:flex;       

`
const Main = styled.div`               
  flex:7;
  background-color: ${({theme}) => theme.bg};
`
const Body = styled.div`
  padding: 22px 46px;
`


function App() {
  const [darkmode, setDarkmode] = useState(1)

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
    <Container >
      <BrowserRouter>
      <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
      <Main>
        <Navbar />
        <Body>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />}/>
              <Route path='signin' element={<Signin />}/>
              <Route path='video'>
                <Route path=':id' element={<Video />} />
              </Route>
              <Route path='myvideos' element={<Myvideos />}/>
              <Route path='history' element={<History />}/>
              <Route path='watchlist' element={<Watchlist />}/>
              <Route path='likedvideos' element={<Likedvideos />}/>
              <Route path='following' element={<Following />}/>
              <Route path='profile' element={<Settings />}/>
            </Route>
          </Routes>
        </Body>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App

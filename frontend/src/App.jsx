/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';

const Container = styled.div`
  display:flex;

`
const Main = styled.div`
  flex:7;
  background-color: ${({theme}) => theme.bg};
`
const Body = styled.div``


function App() {
  const [darkmode, setDarkmode] = useState(1)

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
    <Container >
      <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
      <Main>
        <Navbar />
        <Body>
          <div>vides</div>
          <div>vides</div>
          <div>vides</div>
          <div>vides</div>
          <div>vides</div>
          <div>vides</div>
        </Body>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App

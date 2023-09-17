/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import styled from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const Container = styled.div`
  display:flex;

`
const Main = styled.div`
  flex:7;
`
const Body = styled.div``

function App() {

  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Body>
          vids
        </Body>
      </Main>
    </Container>
  );
}

export default App

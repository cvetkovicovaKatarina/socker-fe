import React from "react"
import styled from "styled-components"
import CreateGame from "./CreateGame"
import WordPart from './WordPart'

function App() {
  return (
    <AppContainer>
      <CreateGame />
      <WordPart />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 320px;
`

export default App

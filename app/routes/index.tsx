import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CreateGame from '../components/CreateGame'
import WordsPart from '../components/WordsPart'
import PlayersPart from '../components/PlayersPart'

const user = {
	name: 'Kata',
	email: 'katarina.cvetkovicova@gmail.com',
}

const adversary = {
	email: 'matejstrnad@icloud.com',
}

const word = 'slovo'

interface IUserContext {
	userName: string
}

const initialUserContext = {
	userName: '',
}

const userContext: IUserContext = initialUserContext
export const UserContext = React.createContext(userContext)

function App() {
	const [isWordsPartVisible, setIsWordsPartVisible] = useState(false)
	const [isPlayersPartVisible, setIsPlayersPartVisible] = useState(false)
	const [outGoingWord, setOutGoingWord] = useState<string>('')
	const [outIncomingWord, setOutIncomingWord] = useState<string>('')

	const setOutgoingWord = (word: string) => {

	}

	const handleCreateGame = () => {
		setIsWordsPartVisible(true)
		// axios
		// 	.post('http://127.0.0.1:8080/new-game', {
		// 		user,
		// 		adversary,
		// 		word,
		// 	})
		// 	.then(response => {
		// 		console.log(response)

		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
	}
	return (
		<UserContext.Provider value={userContext}>
			<AppContainer>
				<CreateGame handleCreateGame={handleCreateGame} />
				{isPlayersPartVisible && <PlayersPart />}
				{isWordsPartVisible && <WordsPart setOutgoingWord={setOutgoingWord}/>}
			</AppContainer>
		</UserContext.Provider>
	)
}

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 320px;
`

export default App

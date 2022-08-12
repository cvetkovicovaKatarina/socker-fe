import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateGame from '../components/CreateGame'
import WordsPart from '../components/WordsPart'
import PlayersPart from '../components/PlayersPart'
import axios from 'axios'

const user = {
	name: 'Kata',
	email: 'katarina.cvetkovicova@gmail.com',
}

const opponent = {
	email: 'matejstrnad@icloud.com',
}

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
	const [outgoingWord, setOutgoingWord] = useState('')
	const [sendWordButton, showSendWordButton] = useState(false)

	console.log(outgoingWord)

	useEffect(() => {
		if (outgoingWord.length > 2) {
			showSendWordButton(true);
		}
	}, [outgoingWord])

	const onSendWord = () => {
		axios
			.post('http://localhost:8080/word', {
				params: {
					userEmail: user.email,
					opponentEmail: opponent.email,
					word: outgoingWord,
				},
			})
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	return (
		<UserContext.Provider value={userContext}>
			<AppContainer>
				<CreateGame handleCreateGame={() => setIsWordsPartVisible(true)} />
				{isPlayersPartVisible && <PlayersPart />}
				{isWordsPartVisible && <WordsPart outgoingWord={outgoingWord} setOutgoingWord={setOutgoingWord}/>}
				{sendWordButton && <SendWordButton onClick={onSendWord}>Send</SendWordButton>}
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

const SendWordButton = styled.button`
`

export default App

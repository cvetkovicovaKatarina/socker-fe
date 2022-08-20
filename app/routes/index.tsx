import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateGame from '../components/CreateGame'
import WordsPart from '../components/WordsPart'
import PlayersPart from '../components/PlayersPart'
import axios from 'axios'
import { LiveReload } from '@remix-run/react/components'

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

	useEffect(() => {
		if (outgoingWord.length > 2) {
			showSendWordButton(true);
		}
	}, [outgoingWord])

	const onSendWord = () => {
		axios
			.post('http://localhost:8080/word', {
				body: {
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
	height: 100%;
	margin-top: 320px;
`

const SendWordButton = styled.button`
	margin: auto;
	padding: 6px 12px;
	outline: none;
	border: none;
	border-radius: 5px;
	text-align: center;
	background: #1dd1a1;
	font-size: 30px;
	box-shadow: 2px 3px #10ac84;
	color: #222f3e;
	font-family: 'Amatic SC', cursive;
	margin-top: 32px;
	 :active {
		background: #10ac84;
		box-shadow: none;
	 }
`

export default App

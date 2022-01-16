import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import IncomingWord from './IncomingWord'
import OutgoingWord from './OutgoingWord'

const WordPart = () => {
	const [incomingWord, setIncomingWord] = useState('')
	const [outgoingWord, setOutgoingWord] = useState('')

	useEffect(() => {
		axios.get('http://localhost:8000/words', {
			params: {
				userId: 1234,
			}
		  })
		  .then(response => {
			setIncomingWord(response.data)
		  })
		  .catch(error => {
			console.log(error)
		  })
	}, [])



	const onSendWord = (word: string) => {
	  axios
	    .post('http://localhost:8000/words', {
	      params: {
			  userId: 1234,
			  word,
		  },
	    })
	    .then(function (response) {
			setOutgoingWord(word)
	    })
	    .catch(function (error) {
	      console.log(error)
	    })
	}

	return (
		<Container>
			{incomingWord && <IncomingWord setIncomingWord={setIncomingWord} incomingWord={incomingWord} />}
			<OutgoingWord setOutgoingWord={setOutgoingWord} outgoingWord={outgoingWord} />
		</Container>
	)
}

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
`

export default WordPart
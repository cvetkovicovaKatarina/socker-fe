import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import IncomingWord from './IncomingWord';
import OutgoingWord from './OutgoingWord';

interface IProps {
	setOutgoingWord: (word: string) => void
}

const WordPart = (props: IProps) => {
	const [incomingWord, setIncomingWord] = useState('');
	const [outgoingWord, setOutgoingWord] = useState('');

	const onSendWord = (word: string) => {
		axios
			.post('http://localhost:8080/word', {
				params: {
					userId: 1234,
					word,
				},
			})
			.then(function (response) {
				setOutgoingWord(word);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			{incomingWord && <IncomingWord setIncomingWord={setIncomingWord} incomingWord={incomingWord} />}
			<OutgoingWord setOutgoingWord={setOutgoingWord} outgoingWord={outgoingWord} />
		</Container>
	);
};

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
`;

export default WordPart;

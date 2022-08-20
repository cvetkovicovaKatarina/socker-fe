import { useState } from 'react';
import styled from 'styled-components';
import IncomingWord from './IncomingWord';
import OutgoingWord from './OutgoingWord';

interface IProps {
	outgoingWord: string
	setOutgoingWord: (word: string) => void
}

const WordPart = (props: IProps) => {
	const [incomingWord, setIncomingWord] = useState('');

	return (
		<Container>
			{incomingWord && <IncomingWord setIncomingWord={setIncomingWord} incomingWord={incomingWord} />}
			<OutgoingWord setOutgoingWord={props.setOutgoingWord} outgoingWord={props.outgoingWord} />
		</Container>
	);
};

const Container = styled.div`
	margin: 32px auto 0 auto;
`;

export default WordPart;

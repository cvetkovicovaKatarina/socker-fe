import styled from 'styled-components';

interface IProps {
	outgoingWord: string;
	setOutgoingWord: (word: string) => void;
}
const OutgoingWord = (props: IProps) => {
	return <StyledInput value={props.outgoingWord} onChange={event => props.setOutgoingWord(event.target.value)} />;
};

const StyledInput = styled.input`
	width: 200px;
	padding: 6px 12px;
	outline: none;
	border-radius: 5px;
	border: 2px solid #e84118;
	text-align: center;
`;

export default OutgoingWord;

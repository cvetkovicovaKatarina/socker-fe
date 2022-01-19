import styled from 'styled-components'

interface IProps {
	handleCreateGame: () => void
}

const CreateGame = (props: IProps) => {
	return <StyledButton onClick={props.handleCreateGame}>Create game</StyledButton>
}

const StyledButton = styled.button`
	margin-left: auto;
	margin-right: auto;
	display: block;
	width: 100px;
	padding: 6px 12px;
	outline: none;
	border-radius: 5px;
	text-align: center;
`;

export default CreateGame;

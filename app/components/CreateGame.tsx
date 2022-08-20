import styled from 'styled-components'

interface IProps {
	handleCreateGame: () => void
}

const CreateGame = (props: IProps) => {
	return <StyledButton onClick={props.handleCreateGame}>Create game</StyledButton>
}

const StyledButton = styled.button`
	margin: auto;
	padding: 6px 12px;
	outline: none;
	border: none;
	border-radius: 5px;
	text-align: center;
	background: #ff9ff3;
	font-size: 30px;
	box-shadow: 2px 3px #f368e0;
	color: #222f3e;
	font-family: 'Amatic SC', cursive;
	 :active {
		background: #f368e0;
		box-shadow: none;
	 }
`;

export default CreateGame;

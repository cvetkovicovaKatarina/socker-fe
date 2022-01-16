import axios from "axios"
import styled from "styled-components"

const CreateGame = () => {
	const handleCreateGame = () => {
		axios.post('/game', {
			userId: '1234',
		  })
		  .then((response) => {
			console.log(response);
		  })
		  .catch((error) => {
			console.log(error);
		  });
	}

	return(
		<StyledButton onClick={() => handleCreateGame()}>Create game</StyledButton>
	)
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
`

export default CreateGame

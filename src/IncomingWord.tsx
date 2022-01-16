import styled from "styled-components"

interface IProps {
  setIncomingWord: (word: string) => void
  incomingWord: string
}

const IncomingWord = (props: IProps) => <StyledWord>{props.incomingWord}</StyledWord>

const StyledWord = styled.p`
  text-align: center;
`

export default IncomingWord

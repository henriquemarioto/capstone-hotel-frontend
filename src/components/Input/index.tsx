import {Container} from "./styles"
interface InputProps {
  label: string
}
const Input = ({label}: InputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="text" placeholder={label} />
    </Container>
  )
}

export default Input

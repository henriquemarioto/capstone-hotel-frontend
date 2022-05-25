<<<<<<< HEAD
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
=======
import { HTMLAttributes, InputHTMLAttributes } from "react";
import { InputDiv } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Input = ({ title, ...rest }: Props) => {
  return (
    <InputDiv>
      <label>{title}</label>
      <input {...rest} />
    </InputDiv>
  );
};

export default Input;
>>>>>>> 5e0c1513a6122ac580f6faa8147f84a3b2b789c2

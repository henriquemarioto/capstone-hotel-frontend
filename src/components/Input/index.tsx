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

import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react";
import { InputDiv } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ title, ...rest },ref) => {
  return (
    <InputDiv>
      <label>{title}</label>
      <input {...rest} ref={ref}/>
    </InputDiv>
  );
};

export const Input = forwardRef(InputDefault)

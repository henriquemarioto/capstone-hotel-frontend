<<<<<<< HEAD
import { HTMLAttributes, InputHTMLAttributes } from "react"
import { InputDiv } from "./styles"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string
=======
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { InputDiv } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errors?: any;
>>>>>>> 3d18cb9225a34fb3cc25c8567186066c442cbd3b
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ title, ...rest },ref) => {
  return (
    <InputDiv>
      <label>{title}</label>
      <input {...rest} ref={ref}/>
    </InputDiv>
  )
}

<<<<<<< HEAD
export default Input
=======
export const Input = forwardRef(InputDefault);
>>>>>>> 3d18cb9225a34fb3cc25c8567186066c442cbd3b

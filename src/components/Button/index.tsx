<<<<<<< HEAD
import {ReactNode} from "react"
import {StyledButton} from "./styles"

interface ButtonProps {
  children: ReactNode
}

const Button = ({children, ...rest}: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
=======
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const Button = ({ children, type, ...rest }: Props) => {
  return <Container type={type ? type : "button"} {...rest}>{children}</Container>;
};

export default Button
>>>>>>> 5e0c1513a6122ac580f6faa8147f84a3b2b789c2

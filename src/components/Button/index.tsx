import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const Button = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button
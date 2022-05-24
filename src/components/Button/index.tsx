import {ReactNode} from "react"
import {StyledButton} from "./styles"

interface ButtonProps {
  children: ReactNode
}

const Button = ({children, ...rest}: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button

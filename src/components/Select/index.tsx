import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends HTMLAttributes<HTMLSelectElement> {
    title: string
    children?: ReactNode
}

const Select = ({ title, children, ...rest }: Props) => {
  return (
    <Container>
      <label>{title}</label>

      <select>{children}</select>
    </Container>
  );
};

export default Select;

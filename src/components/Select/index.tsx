import { forwardRef, ForwardRefRenderFunction, HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  title: string;
  children?: ReactNode;
}

const SelectCapacity: ForwardRefRenderFunction<HTMLSelectElement, Props> = ({ title, children, ...rest }, ref) => {
  return (
    <Container>
      <label>{title}</label>

      <select {...rest} ref={ref}>{children}</select>
    </Container>
  );
};

export const Select = forwardRef(SelectCapacity)

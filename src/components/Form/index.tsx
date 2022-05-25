import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface Props {
  children: ReactNode;
  title: string
}

const Form = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Form;

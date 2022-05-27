import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { Background, CloseButton, Container, Flex, Form, Title } from "./style";

interface Props {
  children?: ReactNode;
  title: string;
  handlePopup: () => void;
  handleClick: any
  handleSubmit: any
}

const PopupRegisterModel = ({ children, title, handlePopup, handleClick, handleSubmit }: Props) => {
  return (
    <Container>
      <Background>
        <Form onSubmit={handleSubmit(handleClick)}>
          <CloseButton type="button" onClick={handlePopup}>
            <FaTimes />
          </CloseButton>

          <Title>{title}</Title>

          <Flex>{children}</Flex>
        </Form>
      </Background>
    </Container>
  );
};

export default PopupRegisterModel;

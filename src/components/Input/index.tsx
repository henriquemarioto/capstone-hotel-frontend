import { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Container, DefaultInput, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Input = ({ title, type, ...rest }: Props) => {
  const [inputType, setInputType] = useState(type);

  const handlePassword = () => {
    if (inputType === "password") {
      setInputType("");
    } else {
      setInputType("password");
    }
  };

  return (
    <Container>
      <label>{title}</label>

      <InputContainer>
        <DefaultInput type={inputType} {...rest} />

        {type === "password" && (
          <Button type="button" onClick={handlePassword}>
            {inputType === "password" ? <FaEyeSlash /> : <FaEye />}
          </Button>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;

import { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Container, DefaultInput, Errors, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  register?: any;
  registerName?: string;
  errors?: any;
}

const Input = ({ title, type, register, registerName, errors,  ...rest }: Props) => {
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

      <InputContainer errors={errors[registerName || ""]?.message || ""}>
        <DefaultInput
          type={inputType}
          {...(registerName && register(registerName))}
          {...rest}
        />

        {type === "password" && (
          <Button type="button" onClick={handlePassword}>
            {inputType === "password" ? <FaEyeSlash /> : <FaEye />}
          </Button>
        )}
      </InputContainer>
      <Errors>{registerName && errors[registerName]?.message}</Errors>
    </Container>
  );
};

export default Input;

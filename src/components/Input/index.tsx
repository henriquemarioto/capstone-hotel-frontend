import { HTMLAttributes, ForwardRefRenderFunction, InputHTMLAttributes, forwardRef, useState } from "react";
import { Button, Container, DefaultInput, Errors, InputContainer, InputDiv } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  register?: any;
  registerName?: string;
  errors?: any;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ title, ...rest },ref) => {
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
      <InputContainer errors={errors[registerName || ""]?.message || ""}>
        <DefaultInput
          type={inputType}
          {...rest} ref={ref}
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

export const Input = forwardRef(InputDefault)
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  SetStateAction,
} from "react";
import { IconType } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ButtonIcon from "../ButtonIcon";
import { Container, InputDiv } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errors?: any;
  icon?: IconType | Boolean;
  showPassword?: Boolean;
  setShowPassword: React.Dispatch<SetStateAction<boolean>>;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { title, icon, setShowPassword, showPassword, ...rest },
  ref
) => {
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
        <label>{title}</label>
      <InputDiv>
        <input {...rest} ref={ref} />
        {icon && (
          <ButtonIcon
            icon={showPassword ? FaEyeSlash : FaEye}
            onClick={() => togglePassword()}
            type="button"
          />
        )}
      </InputDiv>
    </Container>
  );
};

export const InputIcon = forwardRef(InputDefault);

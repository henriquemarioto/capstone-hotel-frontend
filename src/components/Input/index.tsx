import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { DivCheckBox, InputDiv } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  checkbox?: boolean;
  errors?: any;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { title, checkbox, ...rest },
  ref
) => {
  return (
    <>
      {checkbox ? (
        <DivCheckBox>
          <input type="checkbox" {...rest} ref={ref} />
          <label>{title}</label>
        </DivCheckBox>
      ) : (
        <InputDiv>
          <label>{title}</label>
          <input {...rest} ref={ref} />
        </InputDiv>
      )}
    </>
  );
};

export const Input = forwardRef(InputDefault);

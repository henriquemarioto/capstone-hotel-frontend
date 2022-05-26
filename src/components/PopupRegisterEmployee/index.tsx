import Button from "../Button";
import { Input } from "../Input";
import { DivCheckBox } from "./style";
import PopupRegisterModel from "../PopupRegisterModel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputIcon } from "../InputIcon";
import { useState } from "react";

interface Props {
  handlePopup: () => void;
}

interface EmployeeData {
  name: string;
  cpf: string;
  password: string;
  admin?: boolean;
}

const PopupRegisterEmployee = ({ handlePopup }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const employeeSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    cpf: yup.string().required("Campo obrigatorio").max(11),
    password: yup.string().required("Campo Obrigatorio"),
    admin: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeData>({
    resolver: yupResolver(employeeSchema),
  });

  const handleClick = (data: EmployeeData) => {
    console.log(data);
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a employee"
    >
      <Input title="Name" {...register("name")} />
      <Input title="CPF" {...register("cpf")} />
      <InputIcon
        title="Password"
        type={showPassword ? "text" : "password"}
        icon
        {...register("password")}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <DivCheckBox>
        <input type="checkbox" {...register("admin")} />
        <label>Is Admin ?</label>
      </DivCheckBox>
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterEmployee;

import {Container} from "./style";
import {Input} from "../../components/Input";
import Form from "../../components/Form";
import Button from "../../components/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../providers/Login";
import { useState } from "react";
import { InputIcon } from "../../components/InputIcon";

interface Data {
  cpf: string
  password: string
}

const Login = () => {
  const { login } = useLogin();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formSchema = yup.object().shape({
    cpf: yup.string().required("Name is required").length(11),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: Data) => {
    await login(data)
  };

  return (
    <Container>
      <Form title="Login" onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          title="CPF"
          type="text"
          {...register('cpf')}
          errors={errors}
        />

        <InputIcon
          title="Password"
          showPassword={showPassword}
          type={showPassword ? 'text': "password"}
          icon
          setShowPassword={setShowPassword}
          {...register('password')}
          errors={errors}
        />

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

import Button from "../../Button";
import { Input } from "../../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { ContainerTextArea } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useService } from "../../../providers/Service";
import { useLogin } from "../../../providers/Login";

interface Props {
  handlePopup: () => void;
}

interface ServiceData {
  name: string;
  price: string | number;
  description: string;
}

const PopupRegisterService = ({ handlePopup }: Props) => {
  const { createService } = useService();
  const { token } = useLogin();

  const serviceSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    price: yup.string().required("Campo Obrigatorio"),
    description: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(serviceSchema),
  });

  const handleClick = async (data: ServiceData) => {
    data.price = Number(data.price);
    await createService(data);
    handlePopup();
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a service"
    >
      <Input title="Name" {...register("name")} />
      <Input title="Price" {...register("price")} />

      <ContainerTextArea>
        <label>Description</label>
        <textarea maxLength={256} {...register("description")} />
      </ContainerTextArea>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterService;

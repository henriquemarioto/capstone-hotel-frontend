import Button from "../Button";
import { Input } from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface Props {
  handlePopup: () => void;
}

interface ClientData {
  name: string;
  birthDate: string;
  cpf: string;
  cellphone?: string;
  bedroom: string | number;
}

const PopupRegisterClient = ({ handlePopup }: Props) => {
  const clientSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    birthDate: yup.string().required("Campo Obrigatorio"),
    cpf: yup.string().required("Campo obrigatorio").max(11),
    cellphone: yup.string().max(11),
    bedroom: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({
    resolver: yupResolver(clientSchema),
  });

  const handleClick = (data: ClientData) => {
    data.bedroom = Number(data.bedroom);
    console.log(data);
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a client"
    >
      <Input title="Name" {...register("name")} />
      <Input title="Birth date" type="date" {...register("birthDate")} />
      <Input title="CPF" {...register("cpf")} />
      <Input title="Cellphone" {...register("cellphone")} />
      <Select title="Bedroom" {...register("bedroom")}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bedroom) => (
          <option value={bedroom}>{bedroom}</option>
        ))}
      </Select>
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterClient;

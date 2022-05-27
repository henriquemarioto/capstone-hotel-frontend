import Button from "../../Button";
import { Input } from "../../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../../Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useClients } from "../../../providers/clients";
import { useLogin } from "../../../providers/Login";

interface Props {
  handlePopup: () => void;
  id: string;
}

interface ClientData {
  name?: string;
  cpf?: string;
  cellphone?: string;
  birthDate?: string;
  status?: boolean;
}

const PopupUpdateClient = ({ handlePopup, client }: any) => {
  const { updatedClient } = useClients();

  const clientSchema = yup.object().shape({
    name: yup.string(),
    birthdate: yup.string(),
    cpf: yup.string().length(11),
    cellphone: yup.string().length(11),
    status: yup.boolean()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({
    resolver: yupResolver(clientSchema),
  });

  const formatData = (data: ClientData) => {
    // !data.floor && (data.floor = client.floor);
    // data.capacity = Number(data.capacity);
  };

  const handleClick = async (data: ClientData) => {
    formatData(data);
    await updatedClient(client.id, data);
    handlePopup();
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a client"
    >
      <Input title="Name" {...register("name")} defaultValue={client.name} />
      <Input
        title="birthDate"
        {...register("birthDate")}
        defaultValue={client.birthDate}
      />
      <Input type="number" title="cpf" {...register("cpf")} defaultValue={client.cpf} />
      <Input
        title="cellphone"
        {...register("cellphone")}
        defaultValue={client.cellphone}
      />
      {!client.status && <Input title="Status" {...register("status")} checkbox />}
      <Button type="submit">Update</Button>
    </PopupRegisterModel>
  );
};

export default PopupUpdateClient;

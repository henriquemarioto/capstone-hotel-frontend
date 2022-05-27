import Button from "../../Button";
import { Input } from "../../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../../Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useClients } from "../../../providers/clients";
import { useLogin } from "../../../providers/Login";
import { useService } from "../../../providers/Service";

interface Props {
  handlePopup: () => void;
  id: string;
}

interface ClientData {
  name?: string;
  price?: number;
  description?: string;
  status?: boolean;
}

const PopupUpdateServices = ({ handlePopup, service }: any) => {
  const { updatedService } = useService();

  const clientSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number(),
    description: yup.string().length(11),
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
    await updatedService(data, service.id);
    handlePopup();
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a service"
    >
      <Input title="Name" {...register("name")} defaultValue={service.name} />
      <Input
        title="Price"
        {...register("price")}
        defaultValue={service.birthDate}
      />
      <Input type="number" title="Description" {...register("description")} defaultValue={service.cpf} />
      {!service.status && <Input title="Status" {...register("status")} checkbox />}
      <Button type="submit">Update</Button>
    </PopupRegisterModel>
  );
};

export default PopupUpdateServices;

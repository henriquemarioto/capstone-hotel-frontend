import Button from "../../Button";
import { Input } from "../../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../../Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useClients } from "../../../providers/clients";
import { useLogin } from "../../../providers/Login";
import { useBedroom } from "../../../providers/Bedroom";
import { useEffect } from "react";

interface Props {
  handlePopup: () => void;
}

interface ClientData {
  name: string;
  birthDate: string;
  cpf: string;
  cellphone?: string;
  bedroomId: string | number;
}

const PopupRegisterClient = ({ handlePopup }: Props) => {
  const { createClient } = useClients();
  const { getAllBedrooms, bedrooms } = useBedroom();

  console.log(bedrooms);

  const clientSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    birthDate: yup.string().required("Campo Obrigatorio"),
    cpf: yup.string().required("Campo obrigatorio").max(11),
    cellphone: yup.string().max(11),
    bedroomId: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({
    resolver: yupResolver(clientSchema),
  });

  const handleClick = async (data: ClientData) => {
    data.bedroomId = Number(data.bedroomId);
    await createClient(data);
    handlePopup();
  };

  useEffect(() => {
    getAllBedrooms();
  }, []);

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
      <Select title="Bedroom" {...register("bedroomId")}>
        {bedrooms.map((bedroom) => (
          <option value={bedroom.id} key={bedroom.id}>
            {bedroom.number}
          </option>
        ))}
      </Select>
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterClient;

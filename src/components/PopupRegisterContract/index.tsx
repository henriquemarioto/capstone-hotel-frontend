import Button from "../Button";
import { Input } from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../Select";
import { ContainerDate, ContainerDateInput, End, Label, Start } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHiredService } from "../../providers/HiredService";
import { useLogin } from "../../providers/Login";

interface Props {
  handlePopup: () => void;
}

interface ContractData {
  cpf: string;
  serviceId: string | number;
  start_date: string;
  end_date: string;
}

const PopupRegisterContract = ({ handlePopup }: Props) => {
  const { createHiredService } = useHiredService();
  const { token } = useLogin();

  const contractSchema = yup.object().shape({
    cpf: yup.string().required("Campo Obrigatorio").max(11),
    serviceId: yup.string().required("Campo Obrigatorio"),
    start_date: yup.string().required("Campo Obrigatorio"),
    end_date: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contractSchema),
  });

  const handleClick = (data: ContractData) => {
    data.serviceId = Number(data.serviceId);
    createHiredService(data, token);
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a contract"
    >
      <Input title="CPF" {...register("cpf")} />

      <Select title="Service" {...register("serviceId")}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((service, i) => (
          <option value={service} key={i}>
            {service}
          </option> 
        ))}
      </Select>

      <ContainerDate>
        <ContainerDateInput>
          <Label>Start</Label>
          <Start type="date" {...register("start_date")} />
        </ContainerDateInput>

        <ContainerDateInput>
          <Label>End</Label>
          <End type="date" {...register("end_date")} />
        </ContainerDateInput>
      </ContainerDate>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterContract;

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

const PopupRegisterClient = ({ handlePopup }: Props) => {

  const clientSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatorio'),
    birthDate: yup.string().required('Campo Obrigatorio'),
    
  })

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a client"
    >
      <Input title="Name" />
      <Input title="Birth date" />
      <Input title="CPF" />
      <Input title="Cellphone" />
      <Select title="Bedroom"></Select>
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterClient;

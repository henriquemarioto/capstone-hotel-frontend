import Button from "../Button";
import {Input} from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { ContainerTextArea } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface Props {
    handlePopup: () => void
}

const PopupRegisterService = ({handlePopup}: Props) => {

  const serviceSchema = yup.object().shape({
    name: yup.string().required('Campo Obrigatorio')
  })


  return (
    <PopupRegisterModel handlePopup={handlePopup} handleSubmit={handleSubmit} handleClick={handleClick} title="Register a service">
      <Input title="Name" {...register('name')}/>
      <Input title="Price" {...register('price')}/>

      <ContainerTextArea>
        <label>Description</label>
        <textarea maxLength={256} {...register('description')}/>
      </ContainerTextArea>
      
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterService;

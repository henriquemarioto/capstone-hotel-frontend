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

interface BedroomData {
  number: string
  floor: string
  capacity: string
}

const PopupRegisterBedroom = ({ handlePopup }: Props) => {

  const bedroomSchema = yup.object().shape({
    number: yup.string().required('Campo Obrigatorio'),
    floor: yup.string().required('Campo Obrigatorio'),
    capacity: yup.string().required('Campo Obrigatorio')
  })

  const {register, handleSubmit, formState: {errors}} = useForm<BedroomData>({
    resolver: yupResolver(bedroomSchema)
  }) 

  const handleClick = (data: BedroomData):any =>  {
    console.log(data)
  }


  return (
    <PopupRegisterModel handlePopup={handlePopup} handleSubmit={handleSubmit} handleClick={handleClick} title="Register a bedroom">
      <Input title="Number" {...register('number')}/>
      <Input title="Floor" {...register('floor')}/>

      <Select title="Capacity"  {...register("capacity")}>
        {[1, 2, 3, 4, 5].map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Select>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterBedroom;

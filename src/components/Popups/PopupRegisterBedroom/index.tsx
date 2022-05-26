import Button from "../../Button";
import { Input } from "../../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import { Select } from "../../Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useBedroom } from "../../../providers/Bedroom";
import { useLogin } from "../../../providers/Login";

interface Props {
  handlePopup: () => void;
}

interface BedroomData {
  number: string;
  floor: string;
  capacity: string | number;
}

const PopupRegisterBedroom = ({ handlePopup }: Props) => {
  const { createBedroom } = useBedroom();
  const { token } = useLogin();


  const bedroomSchema = yup.object().shape({
    number: yup.string().required("Campo Obrigatorio"),
    floor: yup.string().required("Campo Obrigatorio"),
    capacity: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BedroomData>({
    resolver: yupResolver(bedroomSchema),
  });

  const handleClick = async (data: BedroomData) => {
    data.capacity = Number(data.capacity);
    await createBedroom(data, token)
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a bedroom"
    >
      <Input title="Number" {...register("number")} />
      <Input title="Floor" {...register("floor")} />

      <Select title="Capacity" {...register("capacity")}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <option value={item} key={i}>{item}</option>
        ))}
      </Select>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterBedroom;

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
  id: string;
}

interface BedroomData {
  number?: string;
  floor?: string;
  capacity?: string | number;
  status?: boolean
}

const PopupUpdateBedroom = ({ handlePopup, bedroom }: any) => {
  const { updateBedroom } = useBedroom();

  const bedroomSchema = yup.object().shape({
    floor: yup.string(),
    capacity: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BedroomData>({
    resolver: yupResolver(bedroomSchema),
  });

  const formatData = (data: BedroomData) => {
    !data.floor && (data.floor = bedroom.floor);
    data.capacity = Number(data.capacity);
  }

  const handleClick = async (data: BedroomData) => {
    formatData(data)

    console.log(data);
    await updateBedroom(data, bedroom.id);
    handlePopup();
  };

  return (
    <PopupRegisterModel
      handlePopup={handlePopup}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      title="Register a bedroom"
    >
      <Input title="Number" value={bedroom.number} disabled />
      <Input type="number" title="Floor" {...register("floor")} defaultValue={bedroom.floor}/>

      <Select title="Capacity" {...register("capacity")}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </Select>

      {!bedroom.status && <Input title="Status" checkbox />}

      <Button type="submit">Update</Button>
    </PopupRegisterModel>
  );
};

export default PopupUpdateBedroom;

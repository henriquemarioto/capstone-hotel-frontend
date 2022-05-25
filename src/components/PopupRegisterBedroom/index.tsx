import Button from "../Button";
import Input from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import Select from "../Select";

interface Props {
    handlePopup: () => void
}

const PopupRegisterBedroom = ({handlePopup}: Props) => {
  return (
    <PopupRegisterModel handlePopup={handlePopup} title="Register a bedroom">
      <Input title="Number" />
      <Input title="Floor" />

      <Select title="Capacity">
        {[1,2,3,4,5].map(item => <option value={item}>{item}</option>)}
      </Select>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterBedroom;

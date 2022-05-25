import Button from "../Button";
import Input from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import Select from "../Select";

interface Props {
    handlePopup: () => void
}

const PopupRegisterClient = ({handlePopup}: Props) => {
  return (
    <PopupRegisterModel handlePopup={handlePopup} title="Register a client">
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

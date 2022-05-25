import Button from "../Button";
import Input from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import Select from "../Select";
import { ContainerTextArea } from "./styles";

interface Props {
    handlePopup: () => void
}

const PopupRegisterService = ({handlePopup}: Props) => {
  return (
    <PopupRegisterModel handlePopup={handlePopup} title="Register a service">
      <Input title="Name" />
      <Input title="Price" />

      <ContainerTextArea>
        <label>Description</label>
        <textarea maxLength={256}/>
      </ContainerTextArea>
      
      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterService;

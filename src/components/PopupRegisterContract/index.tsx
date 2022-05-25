import Button from "../Button";
import Input from "../Input";
import PopupRegisterModel from "../PopupRegisterModel";
import Select from "../Select";
import { ContainerDate, ContainerDateInput, End, Label, Start } from "./styles";

interface Props {
  handlePopup: () => void;
}

const PopupRegisterContract = ({ handlePopup }: Props) => {
  return (
    <PopupRegisterModel handlePopup={handlePopup} title="Register a contract">
      <Input title="Name" disabled />
      <Input title="CPF" />

      <Select title="Capacity"></Select>

      <ContainerDate>
        <ContainerDateInput>
          <Label>Start</Label>
          <Start type="date"/>
        </ContainerDateInput>

        <ContainerDateInput>
          <Label>End</Label>
          <End type="date"/>
        </ContainerDateInput>
      </ContainerDate>

      <Button type="submit">Register</Button>
    </PopupRegisterModel>
  );
};

export default PopupRegisterContract;

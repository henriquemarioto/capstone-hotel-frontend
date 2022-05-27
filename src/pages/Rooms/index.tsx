import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Margin from "../../components/Margin";
import { Select } from "../../components/Select";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";
import { useMessages } from "../../providers/Messages";
import { Container } from "./style";

const Rooms = () => {

  const [room, setRoom] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const { bedrooms, getAllBedrooms } = useBedroom();


  useEffect(() => {
    getAllBedrooms();
  }, []);

  const { joinRoom } = useMessages();

  return (
    <Margin>
      <Container>
        <h3>Join A Chat</h3>
        <Select
          title="Rooms"
          onChange={(event) => {
            setRoom(event.currentTarget.value);
          }}
        >
          <option value="-1">Selecione o numero do quarto</option>
          {bedrooms.map((bedroom) => (
            <option key={bedroom.number} value={bedroom.number}>
              {bedroom.number}
            </option>
          ))}
        </Select>
        <Input
          title="Username"
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            joinRoom(username, room);
            
          }}
        >
          Join A Room
        </Button>
      </Container>
    </Margin>
  );
};

export default Rooms;

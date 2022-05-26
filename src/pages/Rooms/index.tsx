import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import Margin from "../../components/Margin";
import { Select } from "../../components/Select";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";
import { useMessages } from "../../providers/Messages";

const Rooms = () => {
  const history = useHistory<unknown>();
  const [room, setRoom] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const { bedrooms, getAllBedrooms } = useBedroom();
  const { token } = useLogin();

  useEffect(() => {
    getAllBedrooms(token);
  }, []);

  const { joinRoom } = useMessages();

  return (
    <Margin>
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <Select
          title="Rooms"
          onChange={(event) => {
            setRoom(event.currentTarget.value);
          }}
        >
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
        <button
          onClick={() => {
            joinRoom(username, room);
            
          }}
        >
          Join A Room
        </button>
      </div>
    </Margin>
  );
};

export default Rooms;

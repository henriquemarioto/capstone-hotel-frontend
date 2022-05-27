import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useBedroom } from "../../providers/Bedroom";
import { useLogin } from "../../providers/Login";
import PopupUpdateBedroom from "../Popups/PopupPatchBedroom";
import { Buttons, Circle, Container, StyledUl } from "./styles";

const BedroomsCard = ({ bedroom }: any) => {
  const { disableBedroom } = useBedroom()
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handlePopup = () => {
    setShowPopup(!showPopup)
  }
  
  const {user} = useLogin()

  const clients: number = bedroom.clients.length;

  return (
    <Container>
      {showPopup && <PopupUpdateBedroom handlePopup={handlePopup} bedroom={bedroom} />}
      <StyledUl>
        <li>
          Number: <span>{bedroom.number}</span>
        </li>
        <li>
          Floor: <span>{bedroom.floor}</span>
        </li>
        <li>
          Capacity: <span>{bedroom.capacity}</span>
        </li>
        {bedroom.availability ? <li>Available</li> : <li>Not Available</li>}
        <li>
          Status: <span>{bedroom.status.toString()}</span>
        </li>
      </StyledUl>
      <Buttons>
        <Circle clients={clients} capacity={bedroom.capacity}></Circle>
        {user.admin && (
          <>
            <button onClick={handlePopup}>
              <FaPen />
            </button>
            <button onClick={() => disableBedroom(bedroom.id)}>
              <FaTrashAlt />
            </button>
          </>
        )}
      </Buttons>
    </Container>
  );
};

export default BedroomsCard;

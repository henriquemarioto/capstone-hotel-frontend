import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useLogin } from "../../providers/Login";
import { Buttons, Circle, Container, StyledUl } from "./styles";

const BedroomsCard = ({ bedroom }: any) => {
  
  const {user} = useLogin()

  const clients: number = bedroom.clients.length;

  return (
    <Container>
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
      </StyledUl>
      <Circle clients={clients} capacity={bedroom.capacity}></Circle>
      {user.admin && (
          <Buttons>
            <button>
              <FaPen />
            </button>
            <button>
              <FaTrashAlt />
            </button>
          </Buttons>
        )}
    </Container>
  );
};

export default BedroomsCard;

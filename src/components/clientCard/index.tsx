import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Li, Buttons, DivClient } from "./style";

const ClientCard = ({ client }: any) => {
  return (
    <>
      <Li>
        <DivClient>
        <h2>{client.name}</h2>
        <p>
          <span>CPF: </span>
          {client.cpf}
        </p>
        <p>
          <span>Birth date: </span>
          {client.birthDate}
        </p>
        <p>
          <span>Cellphone: </span>
          {client.cellphone}
        </p>
        <p>
          <span>Bedroom: </span> {client.bedroom}
        </p>
        </DivClient>
        <Buttons>
          <button>
            <FaPen />
          </button>
          <button>
            <FaTrashAlt />
          </button>
        </Buttons>
      </Li>
    </>
  );
};

export default ClientCard;

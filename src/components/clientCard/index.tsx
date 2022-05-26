import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useLogin } from "../../providers/Login";
import { Li, Buttons, DivClient } from "./style";

const ClientCard = ({ client }: any) => {
  const { user } = useLogin();

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
            {new Date(client.birthDate).toLocaleDateString('pt-BR')}
          </p>
          <p>
            <span>Cellphone: </span>
            {client.cellphone}
          </p>
        </DivClient>
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
      </Li>
    </>
  );
};

export default ClientCard;

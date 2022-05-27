import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useClients } from "../../providers/clients";
import { useLogin } from "../../providers/Login";
import PopupUpdateClient from "../Popups/PopupPatchClient";
import { Li, Buttons, DivClient } from "./style";

const ClientCard = ({ client }: any) => {
  const { user } = useLogin();
  const { disableClient} = useClients()

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <PopupUpdateClient handlePopup={handlePopup} client={client} />
      )}

      <Li>
        <DivClient>
          <h2>{client.name}</h2>
          <p>
            <span>CPF: </span>
            {client.cpf}
          </p>
          <p>
            <span>Birth date: </span>
            {new Date(client.birthDate).toLocaleDateString("pt-BR")}
          </p>
          <p>
            <span>Cellphone: </span>
            {client.cellphone}
          </p>
          <p>
            <span>Bedroom: </span>
            {client.bedroom_number}
          </p>
          <p>
            <span>Status: </span>
            {String(client.status)}
          </p>
        </DivClient>
        {user.admin && (
          <Buttons>
            <button onClick={handlePopup}>
              <FaPen />
            </button>

            {client.status && (
              <button>
                <FaTrashAlt onClick={() => disableClient(client.id)} />
              </button>
            )}
          </Buttons>
        )}
      </Li>
    </>
  );
};

export default ClientCard;

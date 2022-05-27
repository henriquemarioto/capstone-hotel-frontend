import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useLogin } from "../../providers/Login";
import { useService } from "../../providers/Service";
import PopupUpdateServices from "../Popups/PopupPatchServices";
import { Container, DivButtons, DivContent } from "./styles";

const ServiceCard = ({ service }: any) => {
  const { user } = useLogin();
  const { disableService } = useService();

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Container>
      {showPopup && (
        <PopupUpdateServices handlePopup={handlePopup} service={service} />
      )}
      <DivContent>
        <h1>Name: {service.name}</h1>
        <span>
          Price:
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(service.price)}
        </span>
        <p>Description: {service.description}</p>
      </DivContent>

      {user.admin && (
        <DivButtons>
          <button onClick={handlePopup}>
            <FaPen />
          </button>
          {service.status && (
            <button onClick={() => disableService(service.id)}>
              <FaTrashAlt />
            </button>
          )}
        </DivButtons>
      )}
    </Container>
  );
};

export default ServiceCard;

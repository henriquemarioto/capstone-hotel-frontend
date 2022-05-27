import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useLogin } from "../../providers/Login";
import { useService } from "../../providers/Service";
import PopupUpdateServices from "../Popups/PopupPatchServices";
import { Container, DivButtons, DivContent, Title } from "./styles";

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
        <div>
          <Title>Name: </Title>
          {service.name}
        </div>

        <div>
          <Title>Price: </Title>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(service.price)}
        </div>

        <div>
          <Title>Description: </Title>
          <p>{service.description}</p>
        </div>
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

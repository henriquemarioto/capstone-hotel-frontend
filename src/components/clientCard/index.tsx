import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Section, Ul, Container, Buttons } from "./style";

interface ClientProps {
    name: string
    cpf: string
    birthDate: string
    cellphone: string
    bedroom: string
}

const ClientCard = ({name, cpf, birthDate, cellphone, bedroom}: ClientProps) => {
  return (
    <Container>
      <Section>
        <div>
          <Ul>
          <h2>{name}</h2>
            <li>
              <p>
                <span>CPF: </span>{cpf}
              </p>
            </li>
            <li>
              <p>
                <span>Birth date: </span>{birthDate}
              </p>
            </li>
            <li>
              <p>
                <span>Cellphone: </span>{cellphone}
              </p>
            </li>
            <li>
              <p>
                <span>Bedroom: </span> {bedroom}
              </p>
            </li>
          </Ul>
        </div>
        <Buttons>
          <button>
            <FaPen />
          </button>
          <button>
            <FaTrashAlt />
          </button>
        </Buttons>
      </Section>
    </Container>
  );
};

export default ClientCard;

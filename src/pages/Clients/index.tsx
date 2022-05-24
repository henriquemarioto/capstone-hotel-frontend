import { FaSearch, FaArrowLeft } from "react-icons/fa";
import ClientCard from "../../components/clientCard";
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style";

const arrayTeste = [
  {
    name: "Cliente 1",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 2",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 3",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 4",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 5",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 6",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 7",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 8",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 9",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
  {
    name: "Cliente 10",
    cpf: "555.444.333-22",
    cellphone: "988887777",
    birthDate: "13/06/2001",
    bedroom: "1",
  },
];

const Clients = () => {
  return (
    <Container>
      <DivInitial>
        <button>
          <FaArrowLeft />
        </button>
        <h1>Clients</h1>
        <span></span>
      </DivInitial>
      <DivSearch>
        <InputDiv>
          <label>Search</label>
          <input type="text" />
        </InputDiv>
        <button>
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {arrayTeste.map((teste) => (
            <ClientCard client={teste} />
          ))}
        </Ul>
      </main>
    </Container>
  );
};

export default Clients;

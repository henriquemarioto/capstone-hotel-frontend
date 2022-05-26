import { useEffect } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import ClientCard from "../../components/clientCard";
import { useClients } from "../../providers/clients";
import { useLogin } from "../../providers/Login";
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style";


const Clients = () => {

  const {getAllClients, clients} = useClients()
  const {token} = useLogin()

  useEffect(() => {
    getAllClients(token)
  },[])

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
          {clients.map((teste) => (
            <ClientCard client={teste} />
          ))}
        </Ul>
      </main>
    </Container>
  );
};

export default Clients;

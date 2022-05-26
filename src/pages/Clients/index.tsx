import { useEffect, useState } from "react"
import { FaSearch, FaArrowLeft } from "react-icons/fa"
import ClientCard from "../../components/clientCard"
import { useClients } from "../../providers/clients"
import { useLogin } from "../../providers/Login"
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style"


const Clients = () => {
  const {getAllClients, clients} = useClients()
  const {token} = useLogin()
  
  // const [clientsList, setClientsList] = useState(arrayTeste)
  // const [search, setSearch] = useState("")

  // const filter = (search: string) => {
  //   const clients = [...arrayTeste]
  //   const filteredClients = clients.filter((client) => {
  //     return (
  //       String(client.name).toLocaleLowerCase() === search ||
  //       String(client.cpf) === search ||
  //       String(client.bedroom) === search
  //     )
  //   })

  //   if (filteredClients.length > 0) {
  //     return setClientsList(filteredClients)
  //   } else {
  //     return setClientsList(arrayTeste)
  //   }
  // }

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
          <input
            type="text"
          />
        </InputDiv>
        <button>
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {clients.map((client) => (
            <ClientCard client={client} />
          ))}
        </Ul>
      </main>
    </Container>
  )
}

export default Clients

import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { FaSearch, FaArrowLeft } from "react-icons/fa"

import ClientCard from "../../components/clientCard"
import { useClients } from "../../providers/clients"
import { useLogin } from "../../providers/Login"
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style"

const Clients = () => {
  const { getAllClients, clients, filter, filteredClients } = useClients()
  const { token } = useLogin()
  const history = useHistory()

  const [search, setSearch] = useState("")

  const goBack = () => {
    return history.push("/")
  }

  useEffect(() => {
    getAllClients(token)
  }, [])

  return (
    <Container>
      <DivInitial>
        <button onClick={goBack}>
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
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputDiv>
        <button onClick={() => filter(search)}>
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {filteredClients.length > 0
            ? filteredClients.map((client: any) => (
                <ClientCard key={client.id} client={client} />
              ))
            : clients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
        </Ul>
      </main>
    </Container>
  )
}

export default Clients

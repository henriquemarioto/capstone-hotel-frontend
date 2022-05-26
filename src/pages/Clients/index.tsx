import { useState } from "react"
import { FaSearch, FaArrowLeft } from "react-icons/fa"
import ClientCard from "../../components/clientCard"
import { Container, DivInitial, DivSearch, InputDiv, Ul } from "./style"

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
]

const Clients = () => {
  const [clientsList, setClientsList] = useState(arrayTeste)
  const [search, setSearch] = useState("")

  const filter = (search: string) => {
    const clients = [...arrayTeste]
    const filteredClients = clients.filter((client) => {
      return (
        String(client.name).toLocaleLowerCase() === search ||
        String(client.cpf) === search ||
        String(client.bedroom) === search
      )
    })

    if (filteredClients.length > 0) {
      return setClientsList(filteredClients)
    } else {
      return setClientsList(arrayTeste)
    }
  }
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
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputDiv>
        <button onClick={() => filter(search)}>
          <FaSearch />
        </button>
      </DivSearch>
      <main>
        <Ul>
          {clientsList.map((teste) => (
            <ClientCard client={teste} />
          ))}
        </Ul>
      </main>
    </Container>
  )
}

export default Clients

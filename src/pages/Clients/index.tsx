import { useEffect, useState } from "react"
import { FaSearch, FaArrowLeft } from "react-icons/fa"
import ClientCard from "../../components/clientCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useClients } from "../../providers/clients"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"


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
    <Margin>
      <SearchModel title="Client" placeholder="Name, CPF, cellphone...">
          <Ul>
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </Ul>
      </SearchModel>
    </Margin>
  );
}

export default Clients

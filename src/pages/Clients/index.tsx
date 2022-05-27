import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import ClientCard from "../../components/clientCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useClients } from "../../providers/clients"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"

const Clients = () => {
  const { getAllClients, clients, filter, filteredClients, filterByStatus } = useClients()
  const [status, setStatus] = useState<boolean>(false);

  const alterStatus = async () => {
    await filterByStatus(status);
    setStatus(!status);
  };

  useEffect(() => {
    getAllClients()
  }, [])

  return (
    <Margin>
      <SearchModel
        title="Client"
        placeholder="Name, CPF, cellphone..."
        searchFunction={filter}
        alterStatusFunction={alterStatus}
      >
        <Ul>
          {filteredClients.length > 0
            ? filteredClients.map((client: any) => (
                <ClientCard key={client.id} client={client} />
              ))
            : clients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
        </Ul>
      </SearchModel>
    </Margin>
  );

}

export default Clients

import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import ClientCard from "../../components/clientCard"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import { useClients } from "../../providers/clients"
import { useLogin } from "../../providers/Login"
import { Ul } from "./style"
import Loading from "../../components/Loading"

const Clients = () => {
  const { getAllClients, clients, filter, filteredClients } = useClients()
  const { token } = useLogin()

  useEffect(() => {
    getAllClients(token)
  }, [])

  return (
    <Margin>
      <SearchModel
        title="Client"
        placeholder="Name, CPF, cellphone..."
        searchFunction={filter}
      >
        <Ul>
          {clients.length === 0 ? (
            <Loading />
          ) : filteredClients.length > 0 ? (
            filteredClients.map((client: any) => (
              <ClientCard key={client.id} client={client} />
            ))
          ) : (
            clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))
          )}
        </Ul>
      </SearchModel>
    </Margin>
  )
}

export default Clients

import {createContext, ReactNode, useContext, useState} from "react"
import apiHotel from "../../services/apiHotel"
import {useLogin} from "../Login"

interface Clients {
  id: string
  name: string;
  birthDate: Date;
  cpf: string;
  cellphone: string;
  bedroomId: number;
  hiredServices: []
}

interface InputClients {
  name?: string;
  birthDate?: Date;
  cpf?: string;
  cellphone?: string;
  bedroomId?: number;
}

interface ClientsProps {
  children: ReactNode
}

interface ClientsContextData {
  clients: Clients[]
  client: Clients
  createClient: (clientsInput: InputClients) => Promise<void>
  getAllClients: () => Promise<void>
  getOneClient: (id: string) => Promise<void>
  updatedClient: (id: string, clientsInput: InputClients) => Promise<void>
  disableClient: (id: string) => Promise<void>
  JoinBedroom: (id: string, bedroom: number) => Promise<void>
}

const ClientsContext = createContext<ClientsContextData>(
  {} as ClientsContextData
)

export const ClientsProvider = ({children}: ClientsProps) => {
  const [clients, setClients] = useState<Clients[]>([])
  const [client, setClient] = useState<Clients>()
  const {token} = useLogin()

  const createClient = async (clientsInput: InputClients) => {
    const {data} = await apiHotel.post("/clients", clientsInput, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setClients([...clients, data])
  }

  const getAllClients = async () => {
    const {data} = await apiHotel.get("/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setClients(data)
  }

  const getOneClient = async (id: string) => {
    const {data} = await apiHotel.get(`clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setClient(data)
  }

  const UpdateClient = async (id: string, clientsInput: InputClients) => {
    const {data} = await apiHotel.patch(`clients/${id}`, clientsInput, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const newClients = clients.filter(client => client.id !== id)
    newClients.push(data)
    setClients(newClients)
  }

  const disableClient = async (id: string) => {
    const {data} = await apiHotel.delete(`clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  const JoinBedroom = async (id: string, bedroom: number) => {
    const {data} = await apiHotel.patch(`clients/joinbedroom/${id}`, bedroom, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}


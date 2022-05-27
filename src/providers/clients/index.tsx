import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"
import apiHotel from "../../services/apiHotel"
import { useLogin } from "../Login"

interface Clients {
  id: string
  name: string
  birthDate: string
  cpf: string
  cellphone: string
  bedroomId: number
  hiredServices: []
}

interface InputClients {
  name?: string
  birthDate?: string
  cpf?: string
  cellphone?: string
}

interface ClientsProps {
  children: ReactNode
}

interface ClientsContextData {
  clients: Clients[];
  client?: Clients;
  createClient: (clientsInput: InputClients) => Promise<void>;
  getAllClients: () => Promise<void>;
  getOneClient: (id: string) => Promise<void>;
  updatedClient: (id: string, clientsInput: InputClients) => Promise<void>;
  disableClient: (id: string) => Promise<void>;
  JoinBedroom: (id: string, bedroom: number) => Promise<void>;
  filter: (search: string) => void;
  filteredClients: Clients[];
  filterByStatus: (status: boolean) => Promise<void>;
}

const ClientsContext = createContext<ClientsContextData>(
  {} as ClientsContextData
)

export const ClientsProvider = ({ children }: ClientsProps) => {
  const [clients, setClients] = useState<Clients[]>([])
  const [client, setClient] = useState<Clients>()
  const [filteredClients, setFilteredClients] = useState<Clients[]>([])
  const {token} = useLogin()

  const createClient = async (clientsInput: InputClients, ) => {
    await apiHotel
      .post("clients", clientsInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Client created")
      })
      .catch((err) => {
        toast.error(err.response.data.message || err)
      })
  }

  const getAllClients = async () => {
    const { data } = await apiHotel.get("clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setClients(data)
  }

  const getOneClient = async (id: string, ) => {
    const { data } = await apiHotel.get(`clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setClient(data)
  }

  const updatedClient = async (
    id: string,
    clientsInput: InputClients,
    
  ) => {
    await apiHotel
      .patch(`clients/${id}`, clientsInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Client updated")
        getAllClients()
      })
      .catch((err) => {
        toast.error(err.response?.data.message || err)
      })
  }

  const disableClient = async (id: string, ) => {
    await apiHotel
      .delete(`clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllClients()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const JoinBedroom = async (id: string, bedroom: number, ) => {
    await apiHotel
      .patch(`clients/joinbedroom/${id}`, bedroom, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const filter = (search: string) => {
    const filteredClients = clients.filter((client) => {
      return (
        client.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        client.cpf.includes(search) ||
        String(client.bedroomId).includes(search)
      )
    })

    setFilteredClients(filteredClients)
  }

  const filterByStatus = async (status: boolean) => {
    const { data } = await apiHotel.get(`clients?status=${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setClients(data);
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        client,
        JoinBedroom,
        createClient,
        disableClient,
        getAllClients,
        getOneClient,
        updatedClient,
        filter,
        filteredClients,
        filterByStatus,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export const useClients = () => useContext(ClientsContext)

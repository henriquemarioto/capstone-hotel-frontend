import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"
import apiHotel from "../../services/apiHotel"
import { useLogin } from "../Login"

interface HiredServiceProps {
  children: ReactNode
}

interface Client {
  id: string
  name: string
  cpf: string
  status: boolean
}

interface Service {
  id: number
  name: string
  price: string
  description: string
  status: boolean
}

interface HiredService {
  id: number
  paid: boolean
  start_date: Date
  end_date: Date
  bedroom_number: string
  total_price: number
  created_at: Date
  updated_at: Date
  status: boolean
  client: Client
  service: Service
}

interface CreateHiredService {
  serviceId: string | number
  cpf: string
  start_date: string
  end_date: string
}

interface HiredServiceContextData {
  hiredServices: HiredService[]
  hiredService?: HiredService
  createHiredService: (data: CreateHiredService, ) => void
  getAllHiredServices: () => Promise<void>
  getOneHiredService: (id: string, ) => Promise<void>
  updatedHiredService: (id: string, ) => Promise<void>
  disableHiredService: (id: string, ) => Promise<void>
  filterByStatus: (status: boolean, ) => Promise<void>
  filter: (search: string) => void
  filteredHired: HiredService[]
}

const HiredServiceContext = createContext<HiredServiceContextData>(
  {} as HiredServiceContextData
)

export const HiredServiceProvider = ({ children }: HiredServiceProps) => {
  const [hiredServices, setHiredServices] = useState<HiredService[]>([])
  const [hiredService, setHiredService] = useState<HiredService>()
  const [filteredHired, setFilteredHired] = useState<HiredService[]>([])

  const {token} = useLogin()

  const createHiredService = (data: CreateHiredService, ) => {
    apiHotel
      .post("hiredservices", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Contract created")
      })
      .catch((err) => toast.error(err.response.data.message))
  }

  const getAllHiredServices = async () => {
    const { data } = await apiHotel.get("hiredservices", {
      headers: { Authorization: `Bearer ${token}` },
    })
    setHiredServices(data)
  }

  const getOneHiredService = async (id: string, ) => {
    const { data } = await apiHotel.get(`hiredservices/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    setHiredService(data)
  }

  const updatedHiredService = async (id: string ) => {
    await apiHotel
      .patch(`hiredservices/pay/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllHiredServices()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const disableHiredService = async (id: string, ) => {
    await apiHotel
      .delete(`hiredservices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllHiredServices()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const filterByStatus = async (status: boolean) => {
    const { data } = await apiHotel.get(`hiredservices?status=${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFilteredHired(data);
  };

  const filter = (search: string) => {
    const filteredContracts = hiredServices.filter((contract) => {
      return (
        contract.client.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        String(contract.id).toLocaleLowerCase() === search ||
        String(contract.paid).toLocaleLowerCase() === search
      )
    })

    setFilteredHired(filteredContracts)
  }

  return (
    <HiredServiceContext.Provider
      value={{
        hiredServices,
        hiredService,
        createHiredService,
        getAllHiredServices,
        getOneHiredService,
        updatedHiredService,
        disableHiredService,
        filterByStatus,
        filter,
        filteredHired,
      }}
    >
      {children}
    </HiredServiceContext.Provider>
  )
}

export const useHiredService = () => useContext(HiredServiceContext)

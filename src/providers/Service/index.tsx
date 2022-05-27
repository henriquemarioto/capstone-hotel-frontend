import { createContext, ReactNode, useContext, useState } from "react"
import apiHotel from "../../services/apiHotel"
import { toast } from "react-hot-toast"
import { useLogin } from "../Login"

interface ServiceProps {
  children: ReactNode
}

interface CreateService {
  name: string
  price: string | number
  description: string
}

interface Service {
  id: string
  name: string
  price: number
  description: string
  status: boolean
  created_at: Date
  updated_at: Date
}

interface UpdatedProps {
  name?: string
  price?: number
  description?: string
}

interface ServiceContextData {
  services: Service[]
  service?: Service
  filteredService: Service[]
  createService: (data: CreateService, ) => Promise<void>
  getAllServices: () => Promise<void>
  getOneService: (id: string, ) => Promise<void>
  updatedService: (
    data: UpdatedProps,
    id: string,
    
  ) => Promise<void>
  disableService: (id: string, ) => Promise<void>
  //filterByStatus: (status: boolean, ) => Promise<void>
  filter: (search: string) => void
}

const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
)

export const ServiceProvider = ({ children }: ServiceProps) => {
  const [services, setServices] = useState<Service[]>([])
  const [service, setService] = useState<Service>()
  const [filteredService, setFilteredService] = useState<Service[]>([])
  const {token} = useLogin()

  const createService = async (data: CreateService, ) => {
    await apiHotel
      .post("services", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Service Created")
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const getAllServices = async () => {
    const { data } = await apiHotel.get("services", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setServices(data)
  }

  const getOneService = async (id: string, ) => {
    const { data } = await apiHotel.get(`services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setService(data)
  }

  const updatedService = async (
    data: UpdatedProps,
    id: string,
    
  ) => {
    await apiHotel
      .patch(`services/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllServices()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const disableService = async (id: string, ) => {
    await apiHotel
      .delete(`services/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllServices()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  // const filterByStatus = async (status: boolean, ) => {
  //   const { data } = await apiHotel.get(`services?status=${status}`, {
  //     headers: {
  //       Authorizarion: `Bearer ${token}`,
  //     },
  //   })
  //   setFilteredService(data)
  // }

  const filter = (search: string) => {
    const filteredServices = services.filter(
      (service) =>
        service.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        service.description
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
    )

    setFilteredService(filteredServices)
  }

  return (
    <ServiceContext.Provider
      value={{
        createService,
        getAllServices,
        getOneService,
        updatedService,
        disableService,
        // filterByStatus,
        services,
        service,
        filteredService,
        filter,
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}

export const useService = () => useContext(ServiceContext)

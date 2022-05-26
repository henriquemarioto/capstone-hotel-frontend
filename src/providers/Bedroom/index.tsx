import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"

import apiHotel from "../../services/apiHotel"

interface Bedroom {
  id: string
  number: string
  floor: string
  capacity: string | number
  availability?: boolean
  createdAt?: Date
  updatedAt?: Date
  status?: boolean
  clients?: []
}

type BedroomInput = Pick<
  Bedroom,
  "number" | "floor" | "capacity" | "availability"
>

interface UpdateProps {
  capacity?: number
  availability?: boolean
}

interface BedroomProps {
  children: ReactNode
}

interface BedroomContextData {
  bedrooms: Bedroom[]
  bedroom?: Bedroom
  getAllBedrooms: (token: string) => Promise<void>
  getOneBedroom: (id: string, token: string) => Promise<void>
  updateBedroom: (data: UpdateProps, id: string, token: string) => Promise<void>
  disableBedroom: (id: string, token: string) => Promise<void>
  createBedroom: (bedroomInpu: BedroomInput, token: string) => Promise<void>
  filter: (search: string) => void
  filteredBedrooms: Bedroom[]
}

const BedroomContext = createContext<BedroomContextData>(
  {} as BedroomContextData
)

export const BedroomProvider = ({ children }: BedroomProps) => {
  const [bedrooms, setBedrooms] = useState<Bedroom[]>([])
  const [bedroom, setBedroom] = useState<Bedroom>()
  const [filteredBedrooms, setFilteredBedrooms] = useState<Bedroom[]>([])

  const createBedroom = async (bedroomInput: BedroomInput, token: string) => {
    await apiHotel
      .post("/bedrooms", bedroomInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Bedroom created")
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const getAllBedrooms = async (token: string) => {
    const { data } = await apiHotel.get("bedrooms", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setBedrooms(data)
  }

  const getOneBedroom = async (id: string, token: string) => {
    const { data } = await apiHotel.get(`bedrooms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setBedroom(data)
  }

  const updateBedroom = async (
    updateProps: UpdateProps,
    id: string,
    token: string
  ) => {
    await apiHotel
      .patch(`bedrooms/${id}`, updateProps, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllBedrooms(token)
      })
      .catch((err) => {
        toast.error(err.response.body.message)
      })
  }

  const disableBedroom = async (id: string, token: string) => {
    await apiHotel
      .delete(`bedroom/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message)
        getAllBedrooms(token)
      })
      .catch((err) => {
        toast.error(err.response.body.message)
      })
  }

  const filter = (search: string) => {
    const filteredBedrooms = bedrooms.filter((bedroom) => {
      return (
        String(bedroom.capacity) === search ||
        String(bedroom.floor) === search ||
        String(bedroom.number) === search
      )
    })

    setFilteredBedrooms(filteredBedrooms)
  }

  return (
    <BedroomContext.Provider
      value={{
        bedrooms,
        bedroom,
        createBedroom,
        getAllBedrooms,
        getOneBedroom,
        updateBedroom,
        disableBedroom,
        filter,
        filteredBedrooms,
      }}
    >
      {children}
    </BedroomContext.Provider>
  )
}

export const useBedroom = () => useContext(BedroomContext)

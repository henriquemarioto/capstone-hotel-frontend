import {createContext, ReactNode, useContext, useState} from "react"
import toast from "react-hot-toast"

import apiHotel from "../../services/apiHotel"
import {useLogin} from "../Login"

interface Bedroom {
  id: string
  number: string
  floor: string
  capacity: number
  availability: boolean
  createdAt: Date
  updatedAt: Date
  status: boolean
  clients: []
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
  getAllBedrooms: () => Promise<void>
  getOneBedroom: (id: string) => Promise<void>
  updateBedroom: (data: UpdateProps, id: string) => Promise<void>
  disableBedroom: (id: string) => Promise<void>
  createBedroom: (bedroomInpu: BedroomInput) => Promise<void>
}

const BedroomContext = createContext<BedroomContextData>(
  {} as BedroomContextData
)

export const BedroomProvider = ({children}: BedroomProps) => {
  const [bedrooms, setBedrooms] = useState<Bedroom[]>([])
  const [bedroom, setBedroom] = useState<Bedroom>()
  const {token} = useLogin()

  const createBedroom = async (bedroomInput: BedroomInput) => {
    const {data} = await apiHotel.post("/bedrooms", bedroomInput, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setBedrooms([...bedrooms, data])
    toast("Bedroom created with success!")
  }

  const getAllBedrooms = async () => {
    const {data} = await apiHotel.get("bedrooms", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setBedrooms(data)
  }

  const getOneBedroom = async (id: string) => {
    const {data} = await apiHotel.get(`bedrooms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setBedroom(data)
  }

  const updateBedroom = async (updateProps: UpdateProps, id: string) => {
    const data = await apiHotel.patch(`bedrooms/${id}`, updateProps, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    getAllBedrooms()
    toast("Bedroom updated with success!")
  }

  const disableBedroom = async (id: string) => {
    const data = await apiHotel.delete(`bedroom/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    getAllBedrooms()
    toast("Bedroom disabled with success")
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
      }}
    >
      {children}
    </BedroomContext.Provider>
  )
}

export const useBedroom = () => useContext(BedroomContext)

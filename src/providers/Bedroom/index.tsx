import {createContext, ReactNode, useEffect, useState} from "react"

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

interface UpdatedProps {
  capacity?: number
  availability?: boolean
}

interface BedroomProps {
  children: ReactNode
}

interface BedroomContextData {
  bedrooms: Bedroom[]
  bedroom: Bedroom
  getAllBedroom: () => Promise<void>
  getAllServices: () => Promise<void>
  getOneService: (id: string) => Promise<void>
  updatedBedroom: (data: UpdatedProps, id: string) => Promise<void>
  disableBedroom: (id: string) => Promise<void>
  filterByStatus: (status: boolean) => Promise<void>
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
}


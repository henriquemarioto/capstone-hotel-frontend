import BedroomsCard from "../../components/BedroomsCard"
import { BedroomsDiv } from "./styles"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { useBedroom } from "../../providers/Bedroom"
import { useLogin } from "../../providers/Login"
import Margin from "../../components/Margin"
import SearchModel from "../../components/SearchModel"
import PopupUpdateBedroom from "../../components/Popups/PopupPatchBedroom"
import Loading from "../../components/Loading"

interface Bedroom {
  availability: boolean
  capacity: number
  clientsList: object[]
  floor: string
  number: string
}

const BedroomsPage = () => {
  const { getAllBedrooms, bedrooms, filterByStatus, filteredBedrooms, filter } =
    useBedroom()
  const [status, setStatus] = useState<boolean>(false)

  const alterStatus = async () => {
    await filterByStatus(status)
    setStatus(!status)
  }

  useEffect(() => {
    getAllBedrooms()
  }, [])

  return (
    <Margin>
      <SearchModel
        title="Bedroom"
        placeholder="Number, floor, capacity"
        searchFunction={filter}
        alterStatusFunction={alterStatus}
      >
        <BedroomsDiv>
          {bedrooms.length === 0 ? (
            <Loading />
          ) : filteredBedrooms.length > 0 ? (
            filteredBedrooms.map((bedroom) => {
              return <BedroomsCard key={bedroom.id} bedroom={bedroom} />
            })
          ) : (
            bedrooms.map((bedroom) => {
              return <BedroomsCard key={bedroom.id} bedroom={bedroom} />
            })
          )}
        </BedroomsDiv>
      </SearchModel>
    </Margin>
  )
}

export default BedroomsPage

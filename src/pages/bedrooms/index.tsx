import BedroomsCard from "../../components/BedroomsCard"
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles"

import { FaSearch, FaArrowLeft } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import PopupRegisterClient from "../../components/PopupRegisterClient"
import { useEffect, useState } from "react"
import PopupRegisterService from "../../components/PopupRegisterService"
import PopupRegisterBedroom from "../../components/PopupRegisterBedroom"
import PopupRegisterContract from "../../components/PopupRegisterContract"
import Button from "../../components/Button"
import { useBedroom } from "../../providers/Bedroom"
import { useLogin } from "../../providers/Login"

interface Bedroom {
  availability: boolean
  capacity: number
  clientsList: object[]
  floor: string
  number: string
}

const BedroomsPage = () => {
  const { getAllBedrooms, bedrooms, filteredBedrooms, filter } = useBedroom()
  const { token } = useLogin()
  const [search, setSearch] = useState("")

  const history = useHistory()

  const goBack = () => {
    return history.push("/")
  }

  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handlePopup = () => {
    setShowPopup(!showPopup)
  }

  useEffect(() => {
    getAllBedrooms(token)
  }, [])

  return (
    <MainDiv>
      {/* <button onClick={handlePopup}></button>
      {showPopup && <PopupRegisterContract handlePopup={handlePopup} />} */}

      <TitleSection>
        <button onClick={goBack}>
          <FaArrowLeft />
        </button>
        <h1>Bedrooms</h1>
      </TitleSection>
      <SearchSection>
        <p>Choose the bedroom</p>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            filter(search)
          }}
        >
          <input
            type="text"
            placeholder="Number, floor, availability"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button type="submit">
            <FaSearch />
          </Button>
        </form>
      </SearchSection>
      <BedroomsDiv>
        {filteredBedrooms.length > 0
          ? filteredBedrooms.map((bedroom) => {
              return <BedroomsCard key={bedroom.id} bedroom={bedroom} />
            })
          : bedrooms.map((bedroom) => {
              return <BedroomsCard key={bedroom.id} bedroom={bedroom} />
            })}
      </BedroomsDiv>
    </MainDiv>
  )
}

export default BedroomsPage

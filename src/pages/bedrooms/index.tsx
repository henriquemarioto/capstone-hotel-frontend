import BedroomsCard from "../../components/BedroomsCard"
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles"

import { FaSearch, FaArrowLeft } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import PopupRegisterClient from "../../components/PopupRegisterClient"
import { useState } from "react"
import PopupRegisterService from "../../components/PopupRegisterService"
import PopupRegisterBedroom from "../../components/PopupRegisterBedroom"
import PopupRegisterContract from "../../components/PopupRegisterContract"
import Button from "../../components/Button"

interface Bedroom {
  availability: boolean
  capacity: number
  clientsList: object[]
  floor: string
  number: string
}

interface Bedrooms {
  bedrooms: Bedroom[]
}

const BedroomsPage = () => {
  const bedroomsList = [
    {
      availability: true,
      capacity: 3,
      clientsList: [{}, {}, {}],
      floor: "2",
      number: "200",
    },
    {
      availability: false,
      capacity: 4,
      clientsList: [{}, {}],
      floor: "3",
      number: "300",
    },
    {
      availability: true,
      capacity: 5,
      clientsList: [],
      floor: "1",
      number: "500",
    },
  ]
  const [search, setSearch] = useState("")
  const [bedrooms, setBedrooms] = useState(bedroomsList)
  const history = useHistory()

  const goBack = () => {
    return history.push("/")
  }

  const filter = (event: any, search: string) => {
    event.preventDefault()
    const bedrooms = [...bedroomsList]
    const filteredBedrooms = bedrooms.filter((bedroom) => {
      return (
        String(bedroom.capacity) === search ||
        String(bedroom.floor) === search ||
        String(bedroom.number) === search
      )
    })

    if (filteredBedrooms.length > 0) {
      return setBedrooms(filteredBedrooms)
    } else {
      return setBedrooms(bedroomsList)
    }
  }

  // const [showPopup, setShowPopup] = useState<boolean>(false);

  // const handlePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <MainDiv>
      {/* <button onClick={handlePopup}></button>
      {showPopup && <PopupRegisterContract handlePopup={handlePopup} />} */}

      <TitleSection>
        <Button onClick={goBack}>
          <FaArrowLeft />
        </Button>
        <h1>Bedrooms</h1>
      </TitleSection>
      <SearchSection>
        <p>Choose the bedroom</p>
        <form onSubmit={(event) => filter(event, search)}>
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Number, floor, availability"
          />
          <Button type="submit">
            <FaSearch />
          </Button>
        </form>
      </SearchSection>
      <BedroomsDiv>
        {bedrooms.map((bedroom, index) => {
          return <BedroomsCard key={index} bedroom={bedroom} />
        })}
      </BedroomsDiv>
    </MainDiv>
  )
}

export default BedroomsPage

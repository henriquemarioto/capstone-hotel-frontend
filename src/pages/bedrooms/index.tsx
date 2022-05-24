import BedroomsCard from "../../components/BedroomsCard"
import { BedroomsDiv, MainDiv, SearchSection, TitleSection } from "./styles"

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
  const bedrooms = [
    {
      availability: true,
      capacity: 3,
      clientsList: [{}, {}],
      floor: "2",
      number: "200",
    },
    {
      availability: false,
      capacity: 4,
      clientsList: [{}, {}],
      floor: "1",
      number: "100",
    },
    {
      availability: false,
      capacity: 4,
      clientsList: [{}, {}],
      floor: "1",
      number: "100",
    },
  ]
  return (
    <MainDiv>
      <TitleSection>
        <button>Voltar</button>
        <h1>Bedrooms</h1>
      </TitleSection>
      <SearchSection>
        <p>Choose the bedroom</p>
        <form>
          <input type="text" placeholder="Number, floor, availability" />
          <button type="submit">Go!</button>
        </form>
      </SearchSection>
      <BedroomsDiv>
        {bedrooms.map((bedroom, index) => {
          return (
            <BedroomsCard
              availability={bedroom.availability}
              capacity={bedroom.capacity}
              clientsList={bedroom.clientsList}
              floor={bedroom.floor}
              number={bedroom.number}
              key={index}
            />
          )
        })}
      </BedroomsDiv>
    </MainDiv>
  )
}

export default BedroomsPage

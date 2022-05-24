import {
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
  useState,
} from "react"

import { Circle, Container, StyledUl } from "./styles"

interface Bedroom {
  number: string
  floor: string
  capacity: number
  availability: boolean
  clientsList: object[]
}

//Retirar os dados mockados no card para receber os variados

const BedroomsCard = ({
  number = "300",
  floor = "3",
  capacity = 5,
  availability = true,
  clientsList = [{}, {}],
}: Bedroom) => {
  const clients: number = clientsList.length

  return (
    <Container>
      <StyledUl>
        <li>
          Number: <span>{number}</span>
        </li>
        <li>
          Floor: <span>{floor}</span>
        </li>
        <li>
          Capacity: <span>{capacity}</span>
        </li>
        {availability ? <li>Available</li> : <li>Not Available</li>}
      </StyledUl>
      <Circle clients={clients} capacity={capacity}></Circle>
    </Container>
  )
}

export default BedroomsCard

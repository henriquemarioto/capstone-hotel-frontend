import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import ServiceCard from "../../components/ServiceCard"
import {
  Container,
  InputContainer,
  HeadingContainer,
  CardsContainer,
} from "./styles"

import { FiSearch } from "react-icons/fi"
import { useService } from "../../providers/Service"
import { useEffect, useState } from "react"

export const Services = () => {
  const { services, getAllServices } = useService()

  const [search, setSearch] = useState("")
  const [servicesList, setServicesList] = useState(services)

  useEffect(() => {
    getAllServices()
  }, [])

  const filter = (search: string) => {
    const services = [...servicesList]
    const filteredServices = services.filter(
      (service) => String(service.name).toLocaleLowerCase() === search
    )

    if (filteredServices.length > 0) {
      return setServicesList(filteredServices)
    } else {
      return setServicesList(services)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <HeadingContainer>
          <h1>Services</h1>
          <InputContainer>
            {/* <Input label={"Choose a service"} /> */}
            <input
              type="text"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button onClick={() => filter(search)}>
              <FiSearch />
            </Button>
          </InputContainer>
        </HeadingContainer>

        <CardsContainer>
          {services.map((service) => {
            return (
              <ServiceCard
                name={service.name}
                description={service.description}
                price={service.price}
                key={service.id}
              />
            )
          })}
        </CardsContainer>
      </Container>
    </>
  )
}

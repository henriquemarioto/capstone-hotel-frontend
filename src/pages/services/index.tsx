import Button from "../../components/Button"
import { Input } from "../../components/Input"
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
import { useLogin } from "../../providers/Login"

export const Services = () => {
  const { services, getAllServices, filter, filteredService } = useService()
  const { token } = useLogin()

  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllServices(token)
  }, [])

  return (
    <Container>
      <HeadingContainer>
        <h1>Services</h1>
        <InputContainer>
          {/* <Input label={"Choose a service"} /> */}
          <Input
            title="Search"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={() => filter(search)}>
            <FiSearch />
          </Button>
        </InputContainer>
      </HeadingContainer>

      <CardsContainer>
        {filteredService.length > 0
          ? filteredService.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          : services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </CardsContainer>
    </Container>
  )
}

import Button from "../../components/Button";
import { Input } from "../../components/Input";
import ServiceCard from "../../components/ServiceCard";
import {
  Container,
  InputContainer,
  HeadingContainer,
  CardsContainer,
} from "./styles";

import { FiSearch } from "react-icons/fi";
import { useService } from "../../providers/Service";
import { useEffect, useState } from "react";
import { useLogin } from "../../providers/Login";

export const Services = () => {
  const { services, getAllServices } = useService();
  const { token } = useLogin();

  const [search, setSearch] = useState("");
  const [servicesList, setServicesList] = useState(services);

  // const filter = (search: string) => {
  //   const services = [...servicesList]
  //   const filteredServices = services.filter(
  //     (service) => String(service.name).toLocaleLowerCase() === search
  //   )

  //   if (filteredServices.length > 0) {
  //     return setServicesList(filteredServices)
  //   } else {
  //     return setServicesList(services)
  //   }
  // }

  useEffect(() => {
    getAllServices(token);
  }, []);

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
          <Button>
            <FiSearch />
          </Button>
        </InputContainer>
      </HeadingContainer>

      <CardsContainer>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </CardsContainer>
    </Container>
  );
};

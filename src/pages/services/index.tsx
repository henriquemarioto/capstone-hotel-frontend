import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ServiceCard from "../../components/ServiceCard";
import {
  Container,
  InputContainer,
  HeadingContainer,
  CardsContainer,
} from "./styles";

import {FiSearch} from "react-icons/fi";
import {useService} from "../../providers/Service";
import {useEffect} from "react";

export const Services = () => {
  const {services, getAllServices} = useService();

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <HeadingContainer>
          <h1>Services</h1>
          <InputContainer>
            <Input label={"Choose a service"} />
            <Button>
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
            );
          })}
        </CardsContainer>
      </Container>
    </>
  );
};

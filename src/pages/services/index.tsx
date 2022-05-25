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

export const Services = () => {
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
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
          <ServiceCard
            name="Café da manhã"
            description="Café da manhã gourmet com diversas opções."
            price={20}
          />
        </CardsContainer>
      </Container>
    </>
  );
};

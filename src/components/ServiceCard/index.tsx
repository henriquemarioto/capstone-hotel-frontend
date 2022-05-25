import {Container} from "./styles";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
}

const ServiceCard = ({name, description, price}: ServiceCardProps) => {
  return (
    <Container>
      <h1>{name}</h1>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </span>
      <p>{description}</p>
    </Container>
  );
};

export default ServiceCard;

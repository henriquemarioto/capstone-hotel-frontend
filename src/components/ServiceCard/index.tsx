import {Container} from "./styles";


const ServiceCard = ({service}: any) => {
  return (
    <Container>
      <h1>{service.name}</h1>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(service.price)}
      </span>
      <p>{service.description}</p>
    </Container>
  );
};

export default ServiceCard;

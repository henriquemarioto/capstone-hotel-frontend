import ServiceCard from "../../components/ServiceCard";
import { CardsContainer } from "./styles";

import { useService } from "../../providers/Service";
import { useEffect } from "react";
import { useLogin } from "../../providers/Login";
import Margin from "../../components/Margin";
import SearchModel from "../../components/SearchModel";

export const Services = () => {
  const { services, getAllServices, filter, filteredService } = useService();
  const { token } = useLogin();

  useEffect(() => {
    getAllServices(token);
  }, []);

  return (
    <Margin>
      <SearchModel
        title="Contracts"
        placeholder="Client name, service name, bedroom number..."
        searchFunction={filter}
      >
        <CardsContainer>
          {filteredService.length > 0
            ? filteredService.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            : services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
        </CardsContainer>
      </SearchModel>
    </Margin>
  );
};

export default Services;

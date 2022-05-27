import ServiceCard from "../../components/ServiceCard";
import { CardsContainer } from "./styles";

import { useService } from "../../providers/Service";
import { useEffect, useState } from "react";
import Margin from "../../components/Margin";
import SearchModel from "../../components/SearchModel";
import Loading from "../../components/Loading";

export const Services = () => {
  const { services, getAllServices, filter, filteredService, filterByStatus } =
    useService();

  const [status, setStatus] = useState<boolean>(false);

  const alterStatus = async () => {
    await filterByStatus(status);
    setStatus(!status);
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <Margin>
      <SearchModel
        title="Service"
        placeholder="Name, description"
        searchFunction={filter}
        alterStatusFunction={alterStatus}
      >
        <CardsContainer>
          {services.length === 0 ? (
            <Loading />
          ) : filteredService.length > 0 ? (
            filteredService.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          )}
        </CardsContainer>
      </SearchModel>
    </Margin>
  );
};

export default Services;

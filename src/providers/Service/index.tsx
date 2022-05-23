import { createContext, ReactNode, useContext, useState } from "react";
import apiHotel from "../../services/apiHotel";
import { toast } from "react-hot-toast";
import { useLogin } from "../Login";
import { bool } from "yup";

interface ServiceProps {
  children: ReactNode;
}

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

interface UpdatedProps {
  name?: string;
  price?: number;
  description?: string;
}

interface ServiceContextData {
  services: Service[];
  service: Service[];
  getAllServices: () => Promise<void>;
  getOneService: (id: string) => Promise<void>;
  updatedService: (data: UpdatedProps, id: string) => Promise<void>;
  disableService: (id: string) => Promise<void>;
  filterByStatus: (status: boolean) => Promise<void>
}

const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
);

export const ServiceProvider = ({ children }: ServiceProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [service, setService] = useState<Service[]>([]);
  const [filteredService, setFilteredService] = useState<Service[]>([]);
  const { token } = useLogin();

  const getAllServices = async () => {
    const { data } = await apiHotel.get("services", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setServices(data);
  };

  const getOneService = async (id: string) => {
    const { data } = await apiHotel.get(`services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setService([data]);
  };

  const updatedService = async (data: UpdatedProps, id: string) => {
    await apiHotel
      .patch(`services/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => getAllServices());
  };

  const disableService = async (id: string) => {
    await apiHotel
      .delete(`services/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Service disable"));
  };

  const filterByStatus = async (status: boolean) => {
    const { data } = await apiHotel.get(`services?status=${status}`);
    setFilteredService(data);
  };

  return (
    <ServiceContext.Provider
      value={{
        getAllServices,
        getOneService,
        updatedService,
        disableService,
        filterByStatus,
        services,
        service,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);

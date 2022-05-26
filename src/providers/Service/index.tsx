import { createContext, ReactNode, useContext, useState } from "react";
import apiHotel from "../../services/apiHotel";
import { toast } from "react-hot-toast";
import { useLogin } from "../Login";

interface ServiceProps {
  children: ReactNode;
}

interface CreateService {
  name: string;
  price:string | number;
  description: string;
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
  service?: Service;
  filteredService?: Service[];
  createService: (data: CreateService, token: string) => Promise<void>;
  getAllServices: (token: string) => Promise<void>;
  getOneService: (id: string, token: string) => Promise<void>;
  updatedService: (
    data: UpdatedProps,
    id: string,
    token: string
  ) => Promise<void>;
  disableService: (id: string, token: string) => Promise<void>;
  filterByStatus: (status: boolean, token: string) => Promise<void>;
}

const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
);

export const ServiceProvider = ({ children }: ServiceProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [service, setService] = useState<Service>();
  const [filteredService, setFilteredService] = useState<Service[]>([]);

  const createService = async (data: CreateService, token: string) => {
    await apiHotel
      .post("services", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Service Created");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const getAllServices = async (token: string) => {
    const { data } = await apiHotel.get("services", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setServices(data);
  };

  const getOneService = async (id: string, token: string) => {
    const { data } = await apiHotel.get(`services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setService(data);
  };

  const updatedService = async (
    data: UpdatedProps,
    id: string,
    token: string
  ) => {
    await apiHotel
      .patch(`services/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllServices(token);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const disableService = async (id: string, token: string) => {
    await apiHotel
      .delete(`services/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllServices(token);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const filterByStatus = async (status: boolean, token: string) => {
    const { data } = await apiHotel.get(`services?status=${status}`, {
      headers: {
        Authorizarion: `Bearer ${token}`,
      },
    });
    setFilteredService(data);
  };

  return (
    <ServiceContext.Provider
      value={{
        createService,
        getAllServices,
        getOneService,
        updatedService,
        disableService,
        filterByStatus,
        services,
        service,
        filteredService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);

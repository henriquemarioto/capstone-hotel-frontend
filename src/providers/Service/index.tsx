import { createContext, ReactNode, useContext, useState } from "react";
import apiHotel from "../../services/apiHotel";
import { toast } from "react-hot-toast";

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
}

const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
);

const useService = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error("teste");
  }

  return context;
};

const ServiceProvider = ({ children }: ServiceProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [service, setService] = useState<Service[]>([]);

  const getAllServices = async () => {
    const {data}  = await apiHotel.get("services", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTMzMjU3MDYsImV4cCI6MTY1MzU4NDkwNiwic3ViIjoiNTdlMWVmNzEtYTZiYS00NTZjLWIwNDEtZGZhN2RhMjE5ZGFhIn0.okf-tMLp9nKZMvaaaSeIyn8ZMHKDAei4yEzVXqxI0hI`,
      },
    });
    setServices(data);
  };

  const getOneService = async (id: string) => {
    const { data } = await apiHotel.get(`services/${id}`, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    setService(data);
  };

  const updatedService = async (data: UpdatedProps, id: string) => {
    await apiHotel
      .patch(`services/${id}`, data, {
        headers: {
          Authorization: `Bearer `,
        },
      })
      .then((_) => getAllServices());
  };

  const disableService = async (id: string) => {
    await apiHotel
      .delete(`services/${id}`, {
        headers: {
          Authorization: `Bearer `,
        },
      })
      .then((_) => toast.success("Service disable"));
  };

  return (
    <ServiceContext.Provider
      value={{
        getAllServices,
        getOneService,
        updatedService,
        disableService,
        services,
        service,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceProvider, useService };

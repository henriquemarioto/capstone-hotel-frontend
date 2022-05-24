import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import apiHotel from "../../services/apiHotel";
import { useLogin } from "../Login";

interface HiredServiceProps {
  children: ReactNode;
}

interface Client {
  id: string;
  name: string;
  cpf: string;
  status: boolean;
}

interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  status: boolean;
}

interface HiredService {
  id: number;
  paid: boolean;
  start_date: Date;
  end_date: Date;
  bedroom_number: string;
  total_price: number;
  created_at: Date;
  updated_at: Date;
  status: boolean;
  client: Client;
  service: Service;
}

interface CreateHiredService {
  serviceId: number;
  clientId: string;
  start_date: Date;
  end_date: Date;
}

interface HiredServiceContextData {
  hiredServices: HiredService[];
  hiredService?: HiredService;
  filteredHired?: HiredService[];
  createHiredService: (data: CreateHiredService) => void;
  getAllHiredServices: () => Promise<void>;
  getOneHiredService: (id: string) => Promise<void>;
  updatedHiredService: (id: string) => Promise<void>;
  disableHiredService: (id: string) => Promise<void>;
  filterByStatus: (status: boolean) => Promise<void>;
}

const HiredServiceContext = createContext<HiredServiceContextData>(
  {} as HiredServiceContextData
);

export const HiredServiceProvider = ({ children }: HiredServiceProps) => {
  const { token } = useLogin();
  const [hiredServices, setHiredServices] = useState<HiredService[]>([]);
  const [hiredService, setHiredService] = useState<HiredService>();
  const [filteredHired, setFilteredHired] = useState<HiredService[]>();

  const createHiredService = (data: CreateHiredService) => {
    try {
      apiHotel.post("hiredservices", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllHiredServices = async () => {
    const { data } = await apiHotel.get("hiredservices", {
      headers: { Authorizarion: `Bearer ${token}` },
    });
    setHiredServices(data);
  };

  const getOneHiredService = async (id: string) => {
    const { data } = await apiHotel.get(`hiredservices/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setHiredService(data);
  };

  const updatedHiredService = async (id: string) => {
    await apiHotel
      .patch(`hiredservices/pay/${id}`)
      .then((_) => {
        toast.success("Hired Service paid");
        getAllHiredServices();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const disableHiredService = async (id: string) => {
    await apiHotel
      .delete(`hiredservices/${id}`)
      .then((_) => {
        toast.success("Hired Service disable");
        getAllHiredServices();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const filterByStatus = async (status: boolean) => {
    const { data } = await apiHotel.get(`hiredservices?status=${status}`);
    setFilteredHired(data);
  };

  return (
    <HiredServiceContext.Provider
      value={{
        hiredServices,
        hiredService,
        filteredHired,
        createHiredService,
        getAllHiredServices,
        getOneHiredService,
        updatedHiredService,
        disableHiredService,
        filterByStatus,
      }}
    >
      {children}
    </HiredServiceContext.Provider>
  );
};

export const useHiredService = () => useContext(HiredServiceContext);

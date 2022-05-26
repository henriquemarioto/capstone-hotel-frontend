import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import apiHotel from "../../services/apiHotel";
import { useLogin } from "../Login";

interface Clients {
  id: string;
  name: string;
  birthDate: string;
  cpf: string;
  cellphone: string;
  bedroomId: number;
  hiredServices: [];
}

interface InputClients {
  name?: string;
  birthDate?: string;
  cpf?: string;
  cellphone?: string;
  bedroomId?: string | number;
}

interface ClientsProps {
  children: ReactNode;
}

interface ClientsContextData {
  clients: Clients[];
  client?: Clients;
  createClient: (clientsInput: InputClients, token: string) => Promise<void>;
  getAllClients: (token: string) => Promise<void>;
  getOneClient: (id: string, token: string) => Promise<void>;
  updatedClient: (
    id: string,
    clientsInput: InputClients,
    token: string
  ) => Promise<void>;
  disableClient: (id: string, token: string) => Promise<void>;
  JoinBedroom: (id: string, bedroom: number, token: string) => Promise<void>;
}

const ClientsContext = createContext<ClientsContextData>(
  {} as ClientsContextData
);

export const ClientsProvider = ({ children }: ClientsProps) => {
  const [clients, setClients] = useState<Clients[]>([]);
  const [client, setClient] = useState<Clients>();

  const createClient = async (clientsInput: InputClients, token: string) => {
    const { data }: any = await apiHotel
      .post("/clients", clientsInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setClients([...clients, data]);
        toast.success("Client created");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const getAllClients = async (token: string) => {
    const { data } = await apiHotel.get("/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setClients(data);
  };

  const getOneClient = async (id: string, token: string) => {
    const { data } = await apiHotel.get(`clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setClient(data);
  };

  const updatedClient = async (
    id: string,
    clientsInput: InputClients,
    token: string
  ) => {
    await apiHotel
      .patch(`clients/${id}`, clientsInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllClients(token);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const disableClient = async (id: string, token: string) => {
    await apiHotel
      .delete(`clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllClients(token);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const JoinBedroom = async (id: string, bedroom: number, token: string) => {
    await apiHotel
      .patch(`clients/joinbedroom/${id}`, bedroom, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        client,
        JoinBedroom,
        createClient,
        disableClient,
        getAllClients,
        getOneClient,
        updatedClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);

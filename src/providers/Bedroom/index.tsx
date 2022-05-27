import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

import apiHotel from "../../services/apiHotel";
import { useLogin } from "../Login";

interface Bedroom {
  id: string;
  number: string;
  floor: string;
  capacity: string | number;
  availability?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  status?: boolean;
  clients?: [];
}

type BedroomInput = Pick<
  Bedroom,
  "number" | "floor" | "capacity" | "availability"
>;

interface UpdateProps {
  number?: string;
  floor?: string;
  capacity?: string | number;
}

interface BedroomProps {
  children: ReactNode;
}

interface BedroomContextData {
  bedrooms: Bedroom[];
  bedroom?: Bedroom;
  getAllBedrooms: () => Promise<void>;
  filterByStatus: (status: boolean) => Promise<void>;
  getOneBedroom: (id: string) => Promise<void>;
  updateBedroom: (data: UpdateProps, id: string) => Promise<void>;
  disableBedroom: (id: string) => Promise<void>;
  createBedroom: (bedroomInpu: BedroomInput) => Promise<void>;
  filter: (search: string) => void;
  filteredBedrooms: Bedroom[];
}

const BedroomContext = createContext<BedroomContextData>(
  {} as BedroomContextData
);

export const BedroomProvider = ({ children }: BedroomProps) => {
  const [bedrooms, setBedrooms] = useState<Bedroom[]>([]);
  const [bedroom, setBedroom] = useState<Bedroom>();
  const [filteredBedrooms, setFilteredBedrooms] = useState<Bedroom[]>([]);
  const { token } = useLogin();

  const createBedroom = async (bedroomInput: BedroomInput) => {
    await apiHotel
      .post("/bedrooms", bedroomInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Bedroom created");
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Error creating room");
      });
  };

  const getAllBedrooms = async () => {
    const { data } = await apiHotel.get(`bedrooms`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setBedrooms(data);
  };

  const getOneBedroom = async (id: string) => {
    const { data } = await apiHotel.get(`bedrooms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBedroom(data);
  };

  const updateBedroom = async (updateProps: UpdateProps, id: string) => {
    await apiHotel
      .patch(`bedrooms/${id}`, updateProps, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllBedrooms();
      })
      .catch((err) => {
        toast.error(err.response.body.message || "Error updating room");
      });
  };

  const disableBedroom = async (id: string) => {
    await apiHotel
      .delete(`bedrooms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        getAllBedrooms();
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Error when disabling room");
      });
  };

  const filter = (search: string) => {
    const filteredBedrooms = bedrooms.filter((bedroom) => {
      return (
        String(bedroom.capacity) === search ||
        String(bedroom.floor) === search ||
        String(bedroom.number) === search
      );
    });

    setFilteredBedrooms(filteredBedrooms);
  };

  const filterByStatus = async (status: boolean) => {
    const { data } = await apiHotel.get(`bedrooms?status=${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setBedrooms(data)
  }

  return (
    <BedroomContext.Provider
      value={{
        bedrooms,
        bedroom,
        createBedroom,
        getAllBedrooms,
        getOneBedroom,
        updateBedroom,
        disableBedroom,
        filter,
        filterByStatus,
        filteredBedrooms,
      }}
    >
      {children}
    </BedroomContext.Provider>
  );
};

export const useBedroom = () => useContext(BedroomContext);

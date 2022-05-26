import { createContext, ReactNode, useContext, useState } from "react";
import ApiHotel from "../../services/apiHotel";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

interface EmployeeProps {
  children: ReactNode;
}

interface Employee {
  id: string;
  name: string;
  cpf: string;
  password: string;
  admin: boolean;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

interface CreateEmployee {
  name: string;
  cpf: string;
  password: string;
  admin?: boolean;
  status?: boolean;
}

interface UpdateEmployee {
  name?: string;
  cpf?: string;
  password?: string;
  admin?: boolean;
  status?: boolean;
}

interface EmployeeContextData {
  employee?: Employee;
  employees: Employee[];
  getAllEmployees: (token: string) => Promise<void>;
  getOneEmployee: (id: string, token: string) => Promise<void>;
  createEmployee: (data: CreateEmployee, token: string) => Promise<void>;
  updateEmployee: (
    id: string,
    token: string,
    data: UpdateEmployee
  ) => Promise<void>;
  deleteEmployee: (id: string, token: string) => Promise<void>;
}

const EmployeeContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
);

export const EmployeesProvider = ({ children }: EmployeeProps) => {
  const [employee, setEmployee] = useState<Employee>();
  const [employees, setEmployees] = useState<Employee[]>([]);

  const getAllEmployees = async (token: string) => {
    await ApiHotel.get("employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error));
  };

  const createEmployee = async (data: CreateEmployee, token: string) => {
    await ApiHotel.post(`employees`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success("Employee created");
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const getOneEmployee = async (id: string, token: string) => {
    await ApiHotel.get(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setEmployee(response.data))
      .catch((error) => console.log(error));
  };

  const updateEmployee = async (
    id: string,
    token: string,
    data: UpdateEmployee
  ) => {
    await ApiHotel.patch(`employees/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        getAllEmployees(token);
      })
      .catch((error) => toast.success(error.response.data.message));
  };

  const deleteEmployee = async (id: string, token: string) => {
    await ApiHotel.delete(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        getAllEmployees(token);
      })
      .catch((error) => toast.success(error.response.data.message));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        employees,
        getAllEmployees,
        createEmployee,
        getOneEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);

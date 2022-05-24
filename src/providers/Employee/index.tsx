import { createContext, ReactNode, useContext, useState } from "react"
import ApiHotel from "../../services/apiHotel"
import { useHistory } from "react-router-dom"

interface EmployeeProps {
  children: ReactNode
}

interface Employee {
  id: String
  name: String
  cpf: String
  password: String
  admin: Boolean
  status: Boolean
  created_at: Date
  updated_at: Date
}

interface CreateEmployee {
  name: String
  cpf: String
  password: String
  admin?: Boolean
  status?: Boolean
}

interface UpdateEmployee {
  name?: String
  cpf?: String
  password?: String
  admin?: Boolean
  status?: Boolean
}

interface EmployeeContextData {
  employee?: Employee
  employees: Employee[]
  getAllEmployees: (token: String) => Promise<void>
  getOneEmployee: (id: String, token: String) => Promise<void>
  createEmployee: (data: CreateEmployee) => Promise<void>
  updateEmployee: (
    id: String,
    token: String,
    data: UpdateEmployee
  ) => Promise<void>
  deleteEmployee: (id: String, token: String) => Promise<void>
}

const EmployeeContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
)

export const EmployeesProvider = ({ children }: EmployeeProps) => {
  const [employee, setEmployee] = useState<Employee>()
  const [employees, setEmployees] = useState<Employee[]>([])

  const getAllEmployees = async (token: String) => {
    await ApiHotel.get("employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error))
  }

  const createEmployee = async (data: CreateEmployee) => {
    await ApiHotel.post(`employees`, data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  const getOneEmployee = async (id: String, token: String) => {
    await ApiHotel.get(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setEmployee(response.data))
      .catch((error) => console.log(error))
  }

  const updateEmployee = async (
    id: String,
    token: String,
    data: UpdateEmployee
  ) => {
    await ApiHotel.patch(`employees/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  const deleteEmployee = async (id: String, token: String) => {
    await ApiHotel.delete(`employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

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
  )
}

export const useEmployee = () => useContext(EmployeeContext)

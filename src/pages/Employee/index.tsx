import { useEffect } from "react";
import EmployeeCard from "../../components/EmployeeCard";
import Margin from "../../components/Margin";
import SearchModel from "../../components/SearchModel";
import { useEmployee } from "../../providers/Employee";
import { useLogin } from "../../providers/Login";
import { Ul } from "./style";

const Employee = () => {
  const { employees, getAllEmployees } = useEmployee();
  const { token } = useLogin();

  useEffect(() => {
    getAllEmployees(token);
  }, []);

  return (
    <Margin>
      <SearchModel title="Employee" placeholder="Name, CPF...">
      <Ul>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </Ul>
      </SearchModel>
    </Margin>
  );
};

export default Employee;

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

  // const [clientsList, setClientsList] = useState(arrayTeste)
  // const [search, setSearch] = useState("")

  // const filter = (search: string) => {
  //   const clients = [...arrayTeste]
  //   const filteredClients = clients.filter((client) => {
  //     return (
  //       String(client.name).toLocaleLowerCase() === search ||
  //       String(client.cpf) === search ||
  //       String(client.bedroom) === search
  //     )
  //   })

  //   if (filteredClients.length > 0) {
  //     return setClientsList(filteredClients)
  //   } else {
  //     return setClientsList(arrayTeste)
  //   }
  // }

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

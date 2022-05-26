import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useLogin } from "../../providers/Login";
import { Li, Buttons, DivClient, Status } from "./style";

const EmployeeCard = ({ employee }: any) => {
  const { user } = useLogin();

  return (
    <>
      <Li>
        <DivClient>
          <h2>{employee.name}</h2>
          <p>
            <span>CPF: </span>
            {employee.cpf}
          </p>
          <div>
            <span>Is Admin: </span>
            <Status admin={employee.admin}>
              {employee.admin.toString()}{" "}
            </Status>
          </div>
          <div>
            <span>Status: </span>
            <Status status={employee.status}>
              {employee.status.toString()}{" "}
            </Status>
          </div>
        </DivClient>
        {user.admin && (
          <Buttons>
            <button>
              <FaPen />
            </button>
            <button>
              <FaTrashAlt />
            </button>
          </Buttons>
        )}
      </Li>
    </>
  );
};

export default EmployeeCard;

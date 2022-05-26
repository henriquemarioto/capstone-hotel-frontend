import { createContext, ReactNode, useContext, useState } from "react";
import ApiHotel from "../../services/apiHotel";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginProps {
  children: ReactNode;
}

interface Employee {
  id: string;
  name: string;
  cpf: string;
  admin: boolean;
  status: boolean;
  created_at: string;
  updated_at: string;
}

interface TokenUser {
  employee: Employee;
  token: string;
}

interface EmployeeLogin {
  cpf: String;
  password: String;
}

interface LoginContextData {
  login: (employee: EmployeeLogin) => void;
  token: string;
  user: Employee;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const LoginProvider = ({ children }: LoginProps) => {
  const [token, setToken] = useState<TokenUser>(() => {
    const data = localStorage.getItem("@HM:token");

    if (data) {
      return JSON.parse(data);
    }

    return {} as TokenUser;
  });
  const history = useHistory();

  const login = async (employee: EmployeeLogin) => {
    await ApiHotel.post("sessions", employee)
      .then((response) => {
        localStorage.setItem("@HM:token", JSON.stringify(response.data));
        toast.success("Login efetuado");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || "Erro ao efetuar login");
      });
  };

  return (
    <LoginContext.Provider
      value={{ login, token: token.token, user: token.employee }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

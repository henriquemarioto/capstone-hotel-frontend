import {createContext, ReactNode, useContext, useState} from "react"
import ApiHotel from "../../services/apiHotel"
import { useHistory } from "react-router-dom"
import toast from "react-hot-toast"

interface LoginProps {
  children: ReactNode;
}

interface EmployeeLogin {
  cpf: String;
  password: String;
}

interface LoginContextData {
  login: (employee: EmployeeLogin) => void;
  token: String;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const LoginProvider = ({children}: LoginProps) => {
  const [token, setToken] = useState("");
  const history = useHistory();

  const login = async (employee: EmployeeLogin) => {
    await ApiHotel.post("sessions", employee)
      .then((response) => {
        setToken(response.data.token)
        toast.success("Login efetuado")
        history.push("/dashboard")
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message || "Erro ao efetuar login")
      })
  }

  return (
    <LoginContext.Provider value={{login, token}}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

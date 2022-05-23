import { createContext, ReactNode, useContext, useState } from "react"
import ApiHotel from "../../services/apiHotel"
import { useHistory } from "react-router-dom"

interface LoginProps {
  children: ReactNode
}

interface EmployeeLogin {
  cpf: String
  password: String
}

interface LoginContextData {
  login: (employee: EmployeeLogin) => void
  token: String
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider = ({ children }: LoginProps) => {
  const [token, setToken] = useState("")
  const history = useHistory()

  const login = (employee: EmployeeLogin) => {
    ApiHotel.post("sessions", employee)
      .then((response) => {
        setToken(response.data.token)

        // history.push("/dashboard")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <LoginContext.Provider value={{ login, token }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)

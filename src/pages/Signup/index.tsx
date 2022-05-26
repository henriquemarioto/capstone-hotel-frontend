import { useState } from "react"
import GlobalStyle from "./style"
import { Card, Icon, Inputs } from "./style"
import ocult from "../../img/ocult.png"

const Signup = () => {
  const [password, setPassword] = useState("password")
  return (
    <>
      <GlobalStyle />
      <Card>
        <h1>Register</h1>
        <Inputs>
          <label>Name</label>
          <input type="text" />
          <label>CPF</label>
          <input type="text" />
          <label>Password</label>
          <div className="password">
            <input type={password} />
            <Icon
              onClick={() =>
                password === "password"
                  ? setPassword("text")
                  : setPassword("password")
              }
              src={ocult}
              alt="password"
            />
          </div>
          <button>Register</button>
        </Inputs>
      </Card>
    </>
  )
}

export default Signup

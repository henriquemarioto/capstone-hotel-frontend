import { useState } from "react";
import { Card, Container, Icon, Inputs } from "./style";
import ocult from "../../img/ocult.png";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Button from "../../components/Button";

const Login = () => {
  const [password, setPassword] = useState("password");

  return (
    <Container>
      <Form title="Login">
        <Input title="CPF" />
        <Input title="Password" type="password" />
        <Button>Login</Button>
      </Form>
      
      {/* <Card>
        <h2>Login</h2>
        <Inputs>
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
              alt="icon"
            />
          </div>
          <button>Login</button>
        </Inputs>
      </Card> */}
    </Container>
  );
};

export default Login;

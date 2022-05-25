import { useState } from "react";
import GlobalStyle from "./style";
import { Card, Icon, Inputs } from './style'
import ocult from "../../img/ocult.png"

const Login = () =>{
    
    const [password, setPassword] = useState("password")

    return(
        <>
        <GlobalStyle/>
        <Card>
           <h1>Logins</h1>
           <Inputs>
               <label>CPF</label>
               <input type="text" />
               <label>Password</label>
               <div className="password">
               <input type={password}/>
               <Icon  onClick={()=> password==="password" ? setPassword("text") : setPassword("password")} src={ocult} alt="icon"/>
               </div>
               <button>Login</button>
           </Inputs>
        </Card>
        </>
    );
}

export default  Login;
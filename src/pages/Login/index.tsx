import { useState } from "react";
import GlobalStyle from "./style";
import { Card, Icon, Inputs } from './style'

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
               <Icon  onClick={()=> password==="password" ? setPassword("text") : setPassword("password")} src="http://i.stack.imgur.com/H9Sb2.png" alt="icon"/>
               </div>
               <button>Login</button>
           </Inputs>
        </Card>
        </>
    );
}

export default  Login;
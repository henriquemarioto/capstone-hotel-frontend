import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import {Toaster} from 'react-hot-toast'
import { useService } from "./providers/Service";
import { useEffect } from "react";

function App() {

  const {services, service, getAllServices, getOneService} = useService()

  useEffect(() => {
    getAllServices()
  },[])
  
  console.log(services)

  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
